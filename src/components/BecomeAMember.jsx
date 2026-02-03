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
  "w-full border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition";
const inputStyle = { borderColor: "#dadce0", borderRadius: 4, color: "#202124" };
const labelClass = "block text-sm font-medium mb-1";

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
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] px-4">
        <div className="max-w-md w-full text-center space-y-5">
          <img
            src="/gdg-logo.png"
            alt="Google Developer Groups"
            className="h-7 mx-auto"
          />
          <h2 className="text-2xl font-medium" style={{ color: "#202124" }}>
            Welcome to the community!
          </h2>
          <p style={{ color: "#676c72" }}>
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
    <div className="min-h-screen relative" style={{ color: "#202124" }}>
      <NeonBackground />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#202124]/80 backdrop-blur-md" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-16">
          <Link href="/" className="flex items-center">
            <img
              src="/gdg-logo-white.png"
              alt="Google Developer Groups"
              className="h-7"
            />
          </Link>
          <Link href="/" className="btn btn-blue">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative z-10 max-w-xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-white">Become a Member</h1>
          <p className="mt-2 text-sm text-white/60">
            GDG on Campus &mdash; Miami Dade College
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 space-y-6"
          style={{ border: "1px solid #dadce0", borderRadius: 8 }}
        >
          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className={labelClass} style={{ color: "#202124" }}>
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
              <label htmlFor="lastName" className={labelClass} style={{ color: "#202124" }}>
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
            <label htmlFor="email" className={labelClass} style={{ color: "#202124" }}>
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
            <label htmlFor="phone" className={labelClass} style={{ color: "#202124" }}>
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

          {/* Major */}
          <div>
            <label htmlFor="major" className={labelClass} style={{ color: "#202124" }}>
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
            <label htmlFor="year" className={labelClass} style={{ color: "#202124" }}>
              Year <span style={{ color: "#EA4335" }}>*</span>
            </label>
            <select
              id="year"
              name="year"
              required
              value={formData.year}
              onChange={handleChange}
              className={`${inputClass} bg-white`}
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

          {/* Tech Interests */}
          <fieldset>
            <legend className={labelClass} style={{ color: "#202124" }}>
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

          {/* How did you hear about us */}
          <div>
            <label htmlFor="hearAboutUs" className={labelClass} style={{ color: "#202124" }}>
              How did you hear about us?
            </label>
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleChange}
              className={`${inputClass} bg-white`}
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
            <label htmlFor="additionalInfo" className={labelClass} style={{ color: "#202124" }}>
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
          <div className="pt-1">
            <button type="submit" className="btn btn-blue w-full">
              Join GDG on Campus &mdash; MDC
            </button>
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
