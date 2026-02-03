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
  "w-full border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F9D58] focus:border-transparent transition";
const inputStyle = { borderColor: "#dadce0", borderRadius: 4, color: "#202124" };
const labelClass = "block text-sm font-medium mb-1";

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
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] px-4">
        <div className="text-center space-y-5">
          <img
            src="/gdg-logo.png"
            alt="Google Developer Groups"
            className="h-7 mx-auto"
          />
          <h2 className="text-2xl font-medium" style={{ color: "#202124" }}>
            Thank you for your interest!
          </h2>
          <p className="max-w-sm mx-auto" style={{ color: "#676c72" }}>
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
          <Link href="/" className="btn btn-green">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative z-10 max-w-xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-white">Partner With Us</h1>
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
          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className={labelClass} style={{ color: "#202124" }}>
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
            <label htmlFor="contactName" className={labelClass} style={{ color: "#202124" }}>
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

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass} style={{ color: "#202124" }}>
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
              <label htmlFor="phone" className={labelClass} style={{ color: "#202124" }}>
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
            <label htmlFor="website" className={labelClass} style={{ color: "#202124" }}>
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

          {/* Address */}
          <fieldset>
            <legend className={`${labelClass} mb-3`} style={{ color: "#202124" }}>
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

              <div className="grid grid-cols-4 gap-3">
                <div className="col-span-2">
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

          {/* Partnership Interest */}
          <div>
            <label htmlFor="partnershipInterest" className={labelClass} style={{ color: "#202124" }}>
              Partnership Interest <span style={{ color: "#EA4335" }}>*</span>
            </label>
            <select
              id="partnershipInterest"
              name="partnershipInterest"
              required
              value={formData.partnershipInterest}
              onChange={handleChange}
              className={`${inputClass} bg-white`}
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
            <label htmlFor="message" className={labelClass} style={{ color: "#202124" }}>
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your company and how you&apos;d like to partner with GDG on Campus."
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-y`}
              style={inputStyle}
            />
          </div>

          {/* Submit */}
          <div className="pt-1">
            <button type="submit" className="btn btn-green w-full">
              Submit Partnership Inquiry
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

export { PartnerWithUs };
