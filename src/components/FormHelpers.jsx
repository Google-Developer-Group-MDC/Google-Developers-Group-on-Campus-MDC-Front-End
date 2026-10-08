// Hidden field that only bots fill in; the API silently discards submissions that include it.
export function Honeypot({ value, onChange }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
      <label htmlFor="company_website">Leave this field empty</label>
      <input
        id="company_website"
        name="company_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function FormError({ error }) {
  if (!error) return null;
  return (
    <div
      role="alert"
      className="text-sm px-4 py-3"
      style={{
        backgroundColor: "rgba(234,67,53,0.12)",
        border: "1px solid rgba(234,67,53,0.4)",
        borderRadius: 10,
        color: "#f8b4ae",
      }}
    >
      {error}
    </div>
  );
}

// Shows the API's validation message under a specific input.
export function FieldError({ fields, name }) {
  const message = fields?.[name]?.[0];
  if (!message) return null;
  return (
    <p className="mt-1 text-xs" style={{ color: "#f28b82" }}>
      {message}
    </p>
  );
}
