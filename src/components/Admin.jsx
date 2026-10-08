"use client";

import { Fragment, useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ApiError, apiFetch } from "../lib/api";
import { FormError } from "./FormHelpers";

const GRADIENT_BAR =
  "linear-gradient(90deg, #4285F4 25%, #EA4335 25%, #EA4335 50%, #FBBC05 50%, #FBBC05 75%, #0F9D58 75%)";
const MEMBER_STATUSES = ["pending", "active", "inactive"];
const PARTNER_STATUSES = ["new", "contacted", "in-progress", "closed"];
const STATUS_COLORS = {
  pending: "#FBBC05",
  active: "#0F9D58",
  inactive: "#9aa0a6",
  new: "#4285F4",
  contacted: "#FBBC05",
  "in-progress": "#a142f4",
  closed: "#9aa0a6",
};

const inputClass =
  "border px-3 py-2 text-sm bg-white/5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#1a73e8]/60 focus:border-transparent transition";
const inputStyle = { borderColor: "rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff" };
const cardStyle = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 16,
  overflow: "hidden",
  position: "relative",
};

// ─── Session token (sessionStorage, shared via useSyncExternalStore) ───────────
const TOKEN_KEY = "gdg-mdc-admin-token";
const TOKEN_EVENT = "gdg-mdc-admin-token-change";

const tokenStore = {
  subscribe(callback) {
    window.addEventListener(TOKEN_EVENT, callback);
    return () => window.removeEventListener(TOKEN_EVENT, callback);
  },
  get() {
    try {
      return sessionStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  },
  getServer() {
    return null;
  },
  set(token) {
    try {
      if (token) sessionStorage.setItem(TOKEN_KEY, token);
      else sessionStorage.removeItem(TOKEN_KEY);
    } catch {
      // Storage unavailable (private mode) — the session simply won't persist.
    }
    window.dispatchEvent(new Event(TOKEN_EVENT));
  },
};

function useToken() {
  return useSyncExternalStore(tokenStore.subscribe, tokenStore.get, tokenStore.getServer);
}

// Authenticated GET with derived loading state; `version` forces a refetch.
function useAdminData(path, token, version) {
  const key = `${path}#${version}`;
  const [state, setState] = useState({ key: null, data: null, error: "" });

  useEffect(() => {
    let cancelled = false;
    apiFetch(path, { token })
      .then((data) => !cancelled && setState({ key, data, error: "" }))
      .catch((err) => {
        if (cancelled) return;
        if (err instanceof ApiError && err.status === 401) tokenStore.set(null);
        setState({ key, data: null, error: err.message });
      });
    return () => {
      cancelled = true;
    };
  }, [key, path, token]);

  const ready = state.key === key;
  return { data: ready ? state.data : null, error: ready ? state.error : "", loading: !ready };
}

// Runs a mutating request; logs out on 401 and surfaces errors via alert.
async function mutate(token, path, options = {}) {
  try {
    return await apiFetch(path, { ...options, token });
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) tokenStore.set(null);
    window.alert(err.message);
    throw err;
  }
}

async function downloadCsv(token, path, fallbackName) {
  try {
    const response = await apiFetch(path, { token, raw: true });
    const blob = await response.blob();
    const disposition = response.headers.get("Content-Disposition") || "";
    const filename = disposition.match(/filename="?([^"]+)"?/)?.[1] || fallbackName;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    window.alert(err.message);
  }
}

const formatDate = (value) =>
  value
    ? new Date(value).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })
    : "—";

// ─── UI pieces ─────────────────────────────────────────────

function Card({ children, className = "" }) {
  return (
    <div className={`bg-[#202124]/70 backdrop-blur-xl ${className}`} style={cardStyle}>
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: GRADIENT_BAR }} />
      {children}
    </div>
  );
}

function StatusSelect({ value, options, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      className={`${inputClass} bg-[#2a2a2e] py-1 text-xs`}
      style={{ ...inputStyle, color: STATUS_COLORS[value] }}
      aria-label="Status"
    >
      {options.map((option) => (
        <option key={option} value={option} style={{ color: "#fff" }}>
          {option}
        </option>
      ))}
    </select>
  );
}

function DetailList({ rows }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-x-4 gap-y-2 text-sm">
      {rows
        .filter(([, value]) => value && (!Array.isArray(value) || value.length))
        .map(([label, value]) => (
          <Fragment key={label}>
            <dt className="text-white/40">{label}</dt>
            <dd className="text-white/80 break-words whitespace-pre-wrap">
              {Array.isArray(value) ? value.join(", ") : value}
            </dd>
          </Fragment>
        ))}
    </dl>
  );
}

function NotesEditor({ initial, onSave }) {
  const [notes, setNotes] = useState(initial || "");
  const [saving, setSaving] = useState(false);
  return (
    <div className="mt-4 space-y-2">
      <label className="block text-xs uppercase tracking-wider text-white/40">Internal notes</label>
      <textarea
        rows={3}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className={`${inputClass} w-full resize-y`}
        style={inputStyle}
      />
      <button
        type="button"
        disabled={saving || notes === (initial || "")}
        onClick={async () => {
          setSaving(true);
          try {
            await onSave(notes);
          } finally {
            setSaving(false);
          }
        }}
        className="btn btn-blue text-xs px-4 py-2 disabled:opacity-50"
      >
        {saving ? "Saving…" : "Save notes"}
      </button>
    </div>
  );
}

function Pagination({ page, pages, total, onPage }) {
  return (
    <div className="flex items-center justify-between text-sm text-white/50 px-4 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <span>
        {total} result{total === 1 ? "" : "s"}
      </span>
      <div className="flex items-center gap-2">
        <button type="button" className="chip disabled:opacity-40" disabled={page <= 1} onClick={() => onPage(page - 1)}>
          ← Prev
        </button>
        <span>
          {page} / {pages}
        </span>
        <button type="button" className="chip disabled:opacity-40" disabled={page >= pages} onClick={() => onPage(page + 1)}>
          Next →
        </button>
      </div>
    </div>
  );
}

// ─── Login ─────────────────────────────────────────────────

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const { token } = await apiFetch("/api/auth/login", { method: "POST", body: { email, password } });
      tokenStore.set(token);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center px-4">
      <Card className="w-full max-w-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="text-center">
            <img src="/gdg-logo-white.png" alt="Google Developer Groups" className="h-6 mx-auto gdg-logo-glow" />
            <h1 className="mt-4 text-xl font-medium text-white">Admin Login</h1>
            <p className="text-xs text-white/40 mt-1">GDG on Campus &mdash; MDC</p>
          </div>
          <div>
            <label htmlFor="admin-email" className="block text-sm text-white/70 mb-1">Email</label>
            <input
              id="admin-email"
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${inputClass} w-full`}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="admin-password" className="block text-sm text-white/70 mb-1">Password</label>
            <input
              id="admin-password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${inputClass} w-full`}
              style={inputStyle}
            />
          </div>
          <FormError error={error} />
          <button type="submit" disabled={submitting} className="btn btn-blue w-full disabled:opacity-60">
            {submitting ? "Signing in…" : "Sign in"}
          </button>
          <p className="text-center">
            <Link href="/" className="text-xs text-white/40 hover:text-white">
              ← Back to site
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}

// ─── Stats ─────────────────────────────────────────────────

function StatsRow({ token, version }) {
  const { data } = useAdminData("/api/admin/stats", token, version);
  const items = [
    { label: "Members", value: data?.members.total, sub: data && `${data.members.thisMonth} this month`, color: "#4285F4" },
    { label: "Pending members", value: data?.members.byStatus.pending ?? (data ? 0 : undefined), color: "#FBBC05" },
    { label: "Partner inquiries", value: data?.partners.total, sub: data && `${data.partners.byStatus.new ?? 0} new`, color: "#0F9D58" },
    {
      label: "Events",
      value: data && `${data.events.upcoming} / ${data.events.past}`,
      sub: "upcoming / past",
      color: "#EA4335",
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {items.map((item) => (
        <Card key={item.label} className="p-4 sm:p-5">
          <p className="text-xs uppercase tracking-wider text-white/40">{item.label}</p>
          <p className="text-2xl sm:text-3xl font-bold mt-1" style={{ color: item.color }}>
            {item.value ?? "—"}
          </p>
          {item.sub && <p className="text-xs text-white/40 mt-1">{item.sub}</p>}
        </Card>
      ))}
    </div>
  );
}

// ─── Submissions (members / partners) ──────────────────────

function SubmissionsTab({ token, resource, statuses, columns, details, csvName, onChanged, version }) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({ search: "", status: "", page: 1 });
  const [expanded, setExpanded] = useState(null);

  const params = new URLSearchParams({ page: String(query.page), limit: "20" });
  if (query.search) params.set("search", query.search);
  if (query.status) params.set("status", query.status);
  const { data, error, loading } = useAdminData(`/api/admin/${resource}?${params}`, token, version);
  // Bumping the dashboard version refetches this table and the stats row.
  const refresh = onChanged;

  async function update(id, body) {
    await mutate(token, `/api/admin/${resource}/${id}`, { method: "PATCH", body });
    refresh();
  }

  async function remove(item) {
    if (!window.confirm(`Delete this ${resource === "members" ? "member" : "inquiry"}? This cannot be undone.`)) return;
    await mutate(token, `/api/admin/${resource}/${item._id}`, { method: "DELETE" });
    setExpanded(null);
    refresh();
  }

  const exportParams = new URLSearchParams();
  if (query.search) exportParams.set("search", query.search);
  if (query.status) exportParams.set("status", query.status);

  return (
    <Card>
      <div className="flex flex-col sm:flex-row gap-3 p-4 pt-5">
        <form
          className="flex gap-2 flex-1"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery((q) => ({ ...q, search, page: 1 }));
          }}
        >
          <input
            type="search"
            placeholder="Search…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${inputClass} flex-1 min-w-0`}
            style={inputStyle}
          />
          <button type="submit" className="chip">Search</button>
        </form>
        <div className="flex gap-2">
          <select
            value={query.status}
            onChange={(e) => setQuery((q) => ({ ...q, status: e.target.value, page: 1 }))}
            className={`${inputClass} bg-[#2a2a2e]`}
            style={inputStyle}
            aria-label="Filter by status"
          >
            <option value="">All statuses</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-green text-sm px-4 py-2 whitespace-nowrap"
            onClick={() => downloadCsv(token, `/api/admin/${resource}/export.csv?${exportParams}`, `${csvName}.csv`)}
          >
            Export CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase tracking-wider text-white/40">
            <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {columns.map((column) => (
                <th key={column.label} className="px-4 py-3 font-medium whitespace-nowrap">
                  {column.label}
                </th>
              ))}
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={columns.length + 2} className="px-4 py-8 text-center text-white/40">
                  Loading…
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={columns.length + 2} className="px-4 py-8 text-center text-[#f28b82]">
                  {error}
                </td>
              </tr>
            )}
            {data?.items.length === 0 && (
              <tr>
                <td colSpan={columns.length + 2} className="px-4 py-8 text-center text-white/40">
                  Nothing here yet.
                </td>
              </tr>
            )}
            {data?.items.map((item) => (
              <Fragment key={item._id}>
                <tr
                  className="cursor-pointer hover:bg-white/5 transition-colors"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  onClick={() => setExpanded(expanded === item._id ? null : item._id)}
                >
                  {columns.map((column) => (
                    <td key={column.label} className="px-4 py-3 text-white/80 whitespace-nowrap max-w-[260px] truncate">
                      {column.render(item)}
                    </td>
                  ))}
                  <td className="px-4 py-3">
                    <StatusSelect value={item.status} options={statuses} onChange={(status) => update(item._id, { status })} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        remove(item);
                      }}
                      className="text-xs text-white/40 hover:text-[#f28b82]"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                {expanded === item._id && (
                  <tr style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                    <td colSpan={columns.length + 2} className="px-4 py-5">
                      <DetailList rows={details(item)} />
                      <NotesEditor key={item.updatedAt} initial={item.notes} onSave={(notes) => update(item._id, { notes })} />
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {data && <Pagination page={data.page} pages={data.pages} total={data.total} onPage={(page) => setQuery((q) => ({ ...q, page }))} />}
    </Card>
  );
}

const memberColumns = [
  { label: "Name", render: (m) => `${m.firstName} ${m.lastName}` },
  { label: "Email", render: (m) => m.email },
  { label: "Major", render: (m) => m.major },
  { label: "Year", render: (m) => m.year },
  { label: "Joined", render: (m) => formatDate(m.createdAt) },
];

const memberDetails = (m) => [
  ["Name", `${m.firstName} ${m.lastName}`],
  ["Email", m.email],
  ["Phone", m.phone],
  ["Major", m.major],
  ["Year", m.year],
  ["Interests", m.interests],
  ["Heard about us", m.hearAboutUs],
  ["Additional info", m.additionalInfo],
  ["Joined", formatDate(m.createdAt)],
];

const partnerColumns = [
  { label: "Company", render: (p) => p.companyName },
  { label: "Contact", render: (p) => p.contactName },
  { label: "Email", render: (p) => p.email },
  { label: "Interest", render: (p) => p.partnershipInterest },
  { label: "Submitted", render: (p) => formatDate(p.createdAt) },
];

const partnerDetails = (p) => [
  ["Company", p.companyName],
  ["Contact", p.contactName],
  ["Email", p.email],
  ["Phone", p.phone],
  ["Website", p.website],
  ["Address", `${p.streetAddress}, ${p.city}, ${p.state} ${p.zip}`],
  ["Interest", p.partnershipInterest],
  ["Message", p.message],
  ["Submitted", formatDate(p.createdAt)],
];

// ─── Events ────────────────────────────────────────────────

const EMPTY_EVENT = { title: "", startDate: "", endDate: "", location: "", url: "", imageUrl: "", descriptionShort: "", audienceType: "IN_PERSON" };

function NewEventForm({ token, onCreated }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_EVENT);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await apiFetch("/api/admin/events", {
        method: "POST",
        token,
        body: {
          ...form,
          startDate: new Date(form.startDate).toISOString(),
          endDate: form.endDate ? new Date(form.endDate).toISOString() : null,
        },
      });
      setForm(EMPTY_EVENT);
      setOpen(false);
      onCreated();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (!open) {
    return (
      <button type="button" className="btn btn-yellow text-sm px-4 py-2" onClick={() => setOpen(true)}>
        + Add event
      </button>
    );
  }

  const field = (name, label, props = {}) => (
    <label className="block text-xs text-white/50">
      {label}
      <input name={name} value={form[name]} onChange={set} className={`${inputClass} w-full mt-1`} style={inputStyle} {...props} />
    </label>
  );

  return (
    <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-white/5" style={{ borderRadius: 12 }}>
      <div className="sm:col-span-2">{field("title", "Title *", { required: true })}</div>
      {field("startDate", "Starts *", { type: "datetime-local", required: true })}
      {field("endDate", "Ends", { type: "datetime-local" })}
      {field("location", "Location")}
      <label className="block text-xs text-white/50">
        Format
        <select name="audienceType" value={form.audienceType} onChange={set} className={`${inputClass} bg-[#2a2a2e] w-full mt-1`} style={inputStyle}>
          <option value="IN_PERSON">In person</option>
          <option value="VIRTUAL">Virtual</option>
          <option value="HYBRID">Hybrid</option>
        </select>
      </label>
      {field("url", "Link (RSVP / details)", { type: "url", placeholder: "https://…" })}
      {field("imageUrl", "Image URL", { type: "url", placeholder: "https://…" })}
      <label className="block text-xs text-white/50 sm:col-span-2">
        Short description
        <textarea name="descriptionShort" rows={2} value={form.descriptionShort} onChange={set} className={`${inputClass} w-full mt-1`} style={inputStyle} />
      </label>
      <div className="sm:col-span-2">
        <FormError error={error} />
      </div>
      <div className="sm:col-span-2 flex gap-2">
        <button type="submit" disabled={saving} className="btn btn-blue text-sm px-4 py-2 disabled:opacity-60">
          {saving ? "Saving…" : "Create event"}
        </button>
        <button type="button" className="chip" onClick={() => setOpen(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
}

function EventsTab({ token, onChanged, version }) {
  const [syncing, setSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState("");
  const { data, error, loading } = useAdminData("/api/admin/events", token, version);
  const refresh = onChanged;

  async function sync() {
    setSyncing(true);
    setSyncMessage("");
    try {
      const result = await mutate(token, "/api/admin/events/sync", { method: "POST" });
      setSyncMessage(`Synced ${result.total} events (${result.upcoming} upcoming, ${result.past} past).`);
      refresh();
    } catch {
      // mutate already alerted
    } finally {
      setSyncing(false);
    }
  }

  async function patch(event, body) {
    await mutate(token, `/api/admin/events/${event._id}`, { method: "PATCH", body });
    refresh();
  }

  async function remove(event) {
    if (!window.confirm(`Delete "${event.title}"?`)) return;
    await mutate(token, `/api/admin/events/${event._id}`, { method: "DELETE" });
    refresh();
  }

  const now = Date.now();

  return (
    <Card>
      <div className="flex flex-wrap items-center gap-3 p-4 pt-5">
        <button type="button" disabled={syncing} onClick={sync} className="btn btn-blue text-sm px-4 py-2 disabled:opacity-60">
          {syncing ? "Syncing…" : "↻ Sync from GDG"}
        </button>
        <NewEventForm token={token} onCreated={refresh} />
        {syncMessage && <p className="text-xs text-[#81c995]">{syncMessage}</p>}
      </div>
      <p className="px-4 pb-3 text-xs text-white/40">
        Events from gdg.community.dev sync automatically every few hours. Synced events can be hidden or featured here;
        edit their content on the GDG platform.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase tracking-wider text-white/40">
            <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <th className="px-4 py-3 font-medium">Event</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Source</th>
              <th className="px-4 py-3 font-medium text-center">Featured</th>
              <th className="px-4 py-3 font-medium text-center">Visible</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-white/40">Loading…</td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-[#f28b82]">{error}</td>
              </tr>
            )}
            {data?.events.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-white/40">No events yet — try syncing.</td>
              </tr>
            )}
            {data?.events.map((event) => {
              const upcoming = new Date(event.endDate || event.startDate).getTime() >= now;
              return (
                <tr key={event._id} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", opacity: event.hidden ? 0.5 : 1 }}>
                  <td className="px-4 py-3 text-white/80 max-w-[340px]">
                    {event.url ? (
                      <a href={event.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#8ab4f8]">
                        {event.title}
                      </a>
                    ) : (
                      event.title
                    )}
                    {event.hostChapter && !event.hostChapter.includes("Miami Dade") && (
                      <span className="block text-xs text-white/40">Co-hosted with {event.hostChapter}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-white/60 whitespace-nowrap">
                    {formatDate(event.startDate)}
                    <span className="block text-xs" style={{ color: upcoming ? "#81c995" : "rgba(255,255,255,0.3)" }}>
                      {upcoming ? "Upcoming" : "Past"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-white/50 whitespace-nowrap">
                    {event.source === "manual" ? "Manual" : "gdg.community.dev"}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <input type="checkbox" checked={event.featured} onChange={() => patch(event, { featured: !event.featured })} aria-label="Featured" />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <input type="checkbox" checked={!event.hidden} onChange={() => patch(event, { hidden: !event.hidden })} aria-label="Visible" />
                  </td>
                  <td className="px-4 py-3 text-right">
                    {event.source === "manual" && (
                      <button type="button" onClick={() => remove(event)} className="text-xs text-white/40 hover:text-[#f28b82]">
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

// ─── Dashboard ─────────────────────────────────────────────

const TABS = [
  { key: "members", label: "Members" },
  { key: "partners", label: "Partners" },
  { key: "events", label: "Events" },
];

function Dashboard({ token }) {
  const [tab, setTab] = useState("members");
  const [version, setVersion] = useState(0);
  const { data: me } = useAdminData("/api/auth/me", token, 0);
  const bump = useCallback(() => setVersion((v) => v + 1), []);

  return (
    <div className="min-h-screen bg-[#202124]">
      <nav className="sticky top-0 z-50 bg-[#202124]/80 backdrop-blur-md" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/" className="shrink-0">
              <img src="/gdg-logo-white.png" alt="Google Developer Groups" className="h-4.5 sm:h-6 gdg-logo-glow" />
            </Link>
            <span className="hidden sm:inline text-sm text-white/40">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            {me?.admin && <span className="hidden md:inline text-xs text-white/40 truncate">{me.admin.email}</span>}
            <button type="button" className="btn btn-red text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2" onClick={() => tokenStore.set(null)}>
              Log out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-medium text-white">Dashboard</h1>
        <StatsRow token={token} version={version} />

        <div className="flex gap-2" role="tablist">
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

        {tab === "members" && (
          <SubmissionsTab
            key="members"
            token={token}
            resource="members"
            statuses={MEMBER_STATUSES}
            columns={memberColumns}
            details={memberDetails}
            csvName="gdg-mdc-members"
            onChanged={bump}
            version={version}
          />
        )}
        {tab === "partners" && (
          <SubmissionsTab
            key="partners"
            token={token}
            resource="partners"
            statuses={PARTNER_STATUSES}
            columns={partnerColumns}
            details={partnerDetails}
            csvName="gdg-mdc-partners"
            onChanged={bump}
            version={version}
          />
        )}
        {tab === "events" && <EventsTab token={token} onChanged={bump} version={version} />}
      </main>
    </div>
  );
}

export function Admin() {
  const token = useToken();
  return token ? <Dashboard token={token} /> : <Login />;
}

