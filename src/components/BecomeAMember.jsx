"use client";

import { useState } from "react";
import Link from "next/link";
import { NeonBackground } from "./NeonBackground";

const YEAR_OPTIONS = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate"];

const INTEREST_OPTIONS = [
  "Web Development",
  "Mobile Development",
  "Artificial Intelligence / Machine Learning",
  "Cloud Computing",
  "Cybersecurity",
  "Data Science",
  "UI/UX Design",
];

const HEAR_ABOUT_OPTIONS = [
  "Social Media",
  "Friend / Word of Mouth",
  "Campus Event",
  "Professor / Class",
  "Flyer / Poster",
  "Other",
];

const inputClass =
  "w-full border px-4 py-3 text-sm bg-white/5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#1a73e8]/60 focus:border-transparent transition";
const inputStyle = { borderColor: "rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff" };
const labelClass = "block text-sm font-medium mb-1 text-white/80";

function SectionDivider({ color, label }) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <span
        className="inline-block w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-xs font-medium text-white/50 uppercase tracking-wider whitespace-nowrap">
        {label}
      </span>
      <span className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
    </div>
  );
}

function BecomeAMember() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    major: "",
    year: "",
    interests: [],
    hearAboutUs: "",
    additionalInfo: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleInterestToggle(interest) {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: connect to backend / Airtable API
    console.log("Form submitted:", formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen relative flex items-center justify-center px-4">
        <NeonBackground />
        <div className="relative z-10 max-w-md w-full text-center space-y-5">
          <div
            className="mx-auto flex items-center justify-center w-16 h-16 rounded-full"
            style={{
              backgroundColor: "rgba(26,115,232,0.15)",
              boxShadow: "0 0 30px rgba(26,115,232,0.3)",
            }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#1a73e8"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium text-white">
            Welcome to the community!
          </h2>
          <p className="text-white/60">
            Thank you for signing up. We&apos;ll be in touch soon with upcoming
            events and opportunities.
          </p>
          <Link href="/" className="btn btn-blue">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

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
              className="h-5 sm:h-7"
            />
          </Link>
          <Link href="/" className="btn btn-blue shrink-0">
            Home
          </Link>
        </div>
      </nav>

      <div className="relative z-10 max-w-xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-medium text-white">Become a Member</h1>
          <p className="mt-2 text-sm text-white/60">
            GDG on Campus &mdash; Miami Dade College
          </p>
          {/* Google-color dots */}
          <div className="flex justify-center gap-1.5 mt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D58]" />
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#202124]/70 backdrop-blur-xl sm:p-10 p-6 space-y-7"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Google 4-color gradient bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: "linear-gradient(to right, #1a73e8 25%, #EA4335 25%, #EA4335 50%, #FBBC05 50%, #FBBC05 75%, #0F9D58 75%)",
            }}
          />

          {/* Section: Personal Information */}
          <SectionDivider color="#1a73e8" label="Personal Information" />

          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First Name <span style={{ color: "#EA4335" }}>*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last Name <span style={{ color: "#EA4335" }}>*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span style={{ color: "#EA4335" }}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@students.mdc.edu"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(305) 555-0123"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            />
          </div>

          {/* Section: Academic Details */}
          <SectionDivider color="#FBBC05" label="Academic Details" />

          {/* Major */}
          <div>
            <label htmlFor="major" className={labelClass}>
              Major / Field of Study <span style={{ color: "#EA4335" }}>*</span>
            </label>
            <input
              id="major"
              name="major"
              type="text"
              required
              placeholder="e.g. Computer Science"
              value={formData.major}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            />
          </div>

          {/* Year */}
          <div>
            <label htmlFor="year" className={labelClass}>
              Year <span style={{ color: "#EA4335" }}>*</span>
            </label>
            <select
              id="year"
              name="year"
              required
              value={formData.year}
              onChange={handleChange}
              className={`${inputClass} bg-[#2a2a2e]`}
              style={inputStyle}
            >
              <option value="" disabled>
                Select your year
              </option>
              {YEAR_OPTIONS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          {/* Section: Interests */}
          <SectionDivider color="#0F9D58" label="Interests" />

          {/* Tech Interests */}
          <fieldset>
            <legend className={labelClass}>
              What areas of technology interest you?
            </legend>
            <div className="flex flex-wrap gap-2 mt-1">
              {INTEREST_OPTIONS.map((interest) => {
                const selected = formData.interests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`chip ${selected ? "chip-active" : ""}`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Section: Additional */}
          <SectionDivider color="#EA4335" label="Additional" />

          {/* How did you hear about us */}
          <div>
            <label htmlFor="hearAboutUs" className={labelClass}>
              How did you hear about us?
            </label>
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleChange}
              className={`${inputClass} bg-[#2a2a2e]`}
              style={inputStyle}
            >
              <option value="" disabled>
                Select an option
              </option>
              {HEAR_ABOUT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Info */}
          <div>
            <label htmlFor="additionalInfo" className={labelClass}>
              Anything else you&apos;d like us to know?
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              value={formData.additionalInfo}
              onChange={handleChange}
              className={`${inputClass} resize-y`}
              style={inputStyle}
            />
          </div>

          {/* Submit */}
          <div className="pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <button
              type="submit"
              className="btn btn-blue w-full mt-4"
              style={{ padding: 14, borderRadius: 12, fontWeight: 600 }}
            >
              Join GDG on Campus &mdash; MDC
            </button>
            <p className="text-center text-xs text-white/30 mt-3">
              By joining, you agree to receive updates about events and opportunities.
            </p>
          </div>
        </form>

        <p className="text-center text-xs mt-6 text-white/40">
          Google Developer Groups on Campus &mdash; Miami Dade College
        </p>
      </div>
    </div>
  );
}

export { BecomeAMember };
