"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NeonBackground } from "./NeonBackground";
import { apiFetch } from "../lib/api";

const GDG_CHAPTER_URL =
  "https://gdg.community.dev/gdg-on-campus-miami-dade-college-miami-united-states/";

const GRADIENT_BAR =
  "linear-gradient(90deg, #4285F4 25%, #EA4335 25%, #EA4335 50%, #FBBC05 50%, #FBBC05 75%, #0F9D58 75%)";

const AUDIENCE_LABELS = { IN_PERSON: "In person", VIRTUAL: "Virtual", HYBRID: "Hybrid" };

// Fetches events from the API. Loading state is derived from the request key so
// switching tabs never shows stale events.
export function useEvents(when, limit) {
  const key = `${when}:${limit}`;
  const [state, setState] = useState({ key: null, events: [], error: "" });

  useEffect(() => {
    let cancelled = false;
    apiFetch(`/api/events?when=${when}&limit=${limit}`)
      .then((data) => !cancelled && setState({ key, events: data.events, error: "" }))
      .catch((err) => !cancelled && setState({ key, events: [], error: err.message }));
    return () => {
      cancelled = true;
    };
  }, [key, when, limit]);

  const ready = state.key === key;
  return { events: ready ? state.events : [], error: ready ? state.error : "", loading: !ready };
}

function formatEventDate(event) {
  const options = {
    timeZone: event.timezone || "America/New_York",
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const date = new Date(event.startDate);
  const day = new Intl.DateTimeFormat("en-US", options).format(date);
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: options.timeZone,
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);
  return { day, time };
}

export function EventCard({ event, past = false }) {
  const { day, time } = formatEventDate(event);
  const link = event.url || GDG_CHAPTER_URL;

  return (
    <article
      className="card-hover-dark bg-[#202124]/70 backdrop-blur-xl relative overflow-hidden flex flex-col"
      style={{
        border: "1px solid rgba(26,115,232,0.3)",
        borderRadius: 16,
        boxShadow: "0 0 30px rgba(26,115,232,0.15)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10" style={{ background: GRADIENT_BAR }} />

      {event.imageUrl ? (
        <img
          src={event.imageUrl}
          alt=""
          loading="lazy"
          className="w-full aspect-[16/9] object-cover"
          style={past ? { filter: "grayscale(25%)" } : undefined}
        />
      ) : (
        <div
          className="w-full aspect-[16/9] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(66,133,244,0.25), rgba(15,157,88,0.25))" }}
        >
          <img src="/gdg-logo-white.png" alt="" className="h-6 opacity-70" />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {event.featured && (
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FBBC05]/15 text-[#FBBC05]">
              Featured
            </span>
          )}
          <span className="text-[11px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/60">
            {AUDIENCE_LABELS[event.audienceType] ?? "Event"}
          </span>
        </div>

        <p className="text-sm font-medium text-[#8ab4f8]">{day}</p>
        <p className="text-xs text-white/50 mb-2">{time}</p>
        <h3 className="text-base font-medium text-white leading-snug">{event.title}</h3>

        {event.location && (
          <p className="mt-2 text-xs text-white/50 flex items-start gap-1.5">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 mt-px" fill="#0F9D58" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>
            <span>{event.location}</span>
          </p>
        )}

        {event.descriptionShort && (
          <p className="mt-3 text-sm leading-relaxed text-white/60 flex-1">{event.descriptionShort}</p>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${past ? "btn-green" : "btn-blue"} mt-5 self-start text-sm`}
        >
          {past ? "View Event" : "RSVP on GDG"}
        </a>
      </div>
    </article>
  );
}

function EventGrid({ events, loading, error, past, emptyMessage, skeletons = 3 }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" aria-busy="true">
        {Array.from({ length: skeletons }, (_, i) => (
          <div
            key={i}
            className="animate-pulse bg-white/5"
            style={{ borderRadius: 16, height: 380, border: "1px solid rgba(255,255,255,0.06)" }}
          />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-sm text-[#f28b82]">{error}</p>;
  }

  if (!events.length) {
    return <p className="text-center text-sm text-white/50">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {events.map((event) => (
        <EventCard key={event._id} event={event} past={past} />
      ))}
    </div>
  );
}

/** Home-page section: shows upcoming events, or the most recent ones when nothing is scheduled. */
export function EventsTeaser() {
  const upcoming = useEvents("upcoming", 3);
  const past = useEvents("past", 3);

  const showUpcoming = upcoming.loading || upcoming.events.length > 0;
  const current = showUpcoming ? upcoming : past;

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-medium text-center mb-3 mt-8 sm:mt-10 text-white">
        {showUpcoming ? "Upcoming Events" : "Recent Events"}
      </h2>
      <p className="text-center text-sm sm:text-base max-w-lg mx-auto mb-8 sm:mb-12 text-white/50">
        {showUpcoming
          ? "Workshops, study jams and meetups — RSVP on our official GDG chapter page."
          : "New events are announced regularly. Here's what we've been up to lately."}
      </p>
      <EventGrid
        {...current}
        past={!showUpcoming}
        emptyMessage="No events yet — check back soon!"
      />
      <div className="text-center mt-8">
        <Link href="/events" className="btn btn-red">
          See All Events
        </Link>
      </div>
    </>
  );
}

const TABS = [
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
];

/** Full /events page. */
export function Events() {
  const [tab, setTab] = useState("upcoming");
  const { events, loading, error } = useEvents(tab, 50);

  return (
    <div className="min-h-screen relative">
      <NeonBackground />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#202124]/80 backdrop-blur-md" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/gdg-logo-white.png"
              alt="Google Developer Groups"
              className="h-4.5 sm:h-7 gdg-logo-glow"
            />
          </Link>
          <div className="flex items-center gap-1.5 sm:gap-3">
            <Link href="/" className="btn btn-red shrink-0 text-[10px] px-2.5 py-1.5 sm:text-sm sm:px-6 sm:py-2.5">
              Home
            </Link>
            <Link href="/become-a-member" className="btn btn-blue shrink-0 text-[10px] px-2.5 py-1.5 sm:text-sm sm:px-6 sm:py-2.5">
              <span className="sm:hidden">Join Now!</span>
              <span className="hidden sm:inline">Become a Member</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-medium text-white">Events</h1>
          <p className="mt-2 text-sm text-white/60">
            Workshops, study jams and meetups from GDG on Campus &mdash; Miami Dade College
          </p>
          <div className="flex justify-center gap-1.5 mt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D58]" />
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-10" role="tablist" aria-label="Event timeframe">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={`chip ${tab === key ? "chip-active" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>

        <EventGrid
          events={events}
          loading={loading}
          error={error}
          past={tab === "past"}
          skeletons={6}
          emptyMessage={
            tab === "upcoming"
              ? "No upcoming events right now — new ones are announced regularly!"
              : "No past events yet."
          }
        />

        <p className="text-center text-sm text-white/50 mt-12">
          Events are hosted on our official{" "}
          <a href={GDG_CHAPTER_URL} target="_blank" rel="noopener noreferrer" className="text-[#8ab4f8] hover:underline">
            GDG chapter page
          </a>
          . Join the chapter there to get notified about new events.
        </p>
      </main>

      <footer className="relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 32 }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center gap-6">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <img
              src="/gdg-logo-white.png"
              alt="Google Developer Groups"
              className="h-5 sm:h-6 gdg-logo-glow"
            />

            <div className="flex items-center gap-5 text-base text-white/40">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/become-a-member" className="hover:text-white transition-colors">
                Join
              </Link>
              <Link href="/partner-with-us" className="hover:text-white transition-colors">
                Partner
              </Link>
            </div>

            <p className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} GDG on Campus &mdash; MDC
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-base text-white/50">Follow us on social media</p>
            <div className="social-icons flex items-center gap-9 sm:gap-6">
              <a href="https://www.facebook.com/profile.php?id=61586034917973" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/gdgoncampusmdc" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://x.com/GDG_MDC" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/gdg-on-campus-miami-dade-college/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
