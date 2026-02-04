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
              className="h-5 sm:h-7"
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
    </div>
  );
}

export { PartnerWithUs };
