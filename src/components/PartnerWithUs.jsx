"use client";

import { useState } from "react";
import Link from "next/link";
import { NeonBackground } from "./NeonBackground";

const PARTNERSHIP_OPTIONS = [
  "Event Sponsorship",
  "Workshop / Speaker",
  "Mentorship Program",
  "Recruiting / Hiring",
  "In-Kind Donation",
  "Other",
];

const inputClass =
  "w-full border px-4 py-3 text-sm bg-white/5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#0F9D58]/60 focus:border-transparent transition";
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

function PartnerWithUs() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    partnershipInterest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: connect to backend
    console.log("Partner form submitted:", formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen relative flex items-center justify-center px-4">
        <NeonBackground />
        <div className="relative z-10 text-center space-y-5">
          <div
            className="mx-auto flex items-center justify-center w-16 h-16 rounded-full"
            style={{
              backgroundColor: "rgba(15,157,88,0.15)",
              boxShadow: "0 0 30px rgba(15,157,88,0.3)",
            }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#0F9D58"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium text-white">
            Thank you for your interest!
          </h2>
          <p className="max-w-sm mx-auto text-white/60">
            We&apos;ve received your information and will be in touch shortly to
            discuss partnership opportunities.
          </p>
          <Link href="/" className="btn btn-green">
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
              className="h-4.5 sm:h-7 gdg-logo-glow"
            />
          </Link>
          <Link href="/" className="btn btn-green shrink-0">
            Home
          </Link>
        </div>
      </nav>

      <div className="relative z-10 max-w-xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-medium text-white">Partner With Us</h1>
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

          {/* Section: Company Details */}
          <SectionDivider color="#0F9D58" label="Company Details" />

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className={labelClass}>
              Company Name <span style={{ color: "#EA4335" }}>*</span>
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              value={formData.companyName}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            />
          </div>

          {/* Contact Person */}
          <div>
            <label htmlFor="contactName" className={labelClass}>
              Contact Person <span style={{ color: "#EA4335" }}>*</span>
            </label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              required
              value={formData.contactName}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            />
          </div>

          {/* Section: Contact Information */}
          <SectionDivider color="#1a73e8" label="Contact Information" />

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address <span style={{ color: "#EA4335" }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="contact@company.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number <span style={{ color: "#EA4335" }}>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(305) 555-0123"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className={labelClass}>
              Company Website
            </label>
            <input
              id="website"
              name="website"
              type="url"
              placeholder="https://www.example.com"
              value={formData.website}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            />
          </div>

          {/* Section: Address */}
          <SectionDivider color="#FBBC05" label="Address" />

          {/* Address */}
          <fieldset>
            <legend className={`${labelClass} mb-3`}>
              Company Address <span style={{ color: "#EA4335" }}>*</span>
            </legend>

            <div className="space-y-4">
              <div>
                <label htmlFor="streetAddress" className="sr-only">
                  Street Address
                </label>
                <input
                  id="streetAddress"
                  name="streetAddress"
                  type="text"
                  required
                  placeholder="Street Address"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="sm:col-span-2">
                  <label htmlFor="city" className="sr-only">
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="state" className="sr-only">
                    State
                  </label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    required
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="sr-only">
                    ZIP Code
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    required
                    placeholder="ZIP"
                    value={formData.zip}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Section: Partnership */}
          <SectionDivider color="#EA4335" label="Partnership" />

          {/* Partnership Interest */}
          <div>
            <label htmlFor="partnershipInterest" className={labelClass}>
              Partnership Interest <span style={{ color: "#EA4335" }}>*</span>
            </label>
            <select
              id="partnershipInterest"
              name="partnershipInterest"
              required
              value={formData.partnershipInterest}
              onChange={handleChange}
              className={`${inputClass} bg-[#2a2a2e]`}
              style={inputStyle}
            >
              <option value="" disabled>
                Select an option
              </option>
              {PARTNERSHIP_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your company and how you'd like to partner with GDG on Campus."
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-y`}
              style={inputStyle}
            />
          </div>

          {/* Submit */}
          <div className="pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <button
              type="submit"
              className="btn btn-green w-full mt-4"
              style={{ padding: 14, borderRadius: 12, fontWeight: 600 }}
            >
              Submit Partnership Inquiry
            </button>
            <p className="text-center text-xs text-white/30 mt-3">
              Our team will review your inquiry and follow up within a few business days.
            </p>
          </div>
        </form>

        <p className="text-center text-xs mt-6 text-white/40">
          Google Developer Groups on Campus &mdash; Miami Dade College
        </p>
      </div>

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

export { PartnerWithUs };
