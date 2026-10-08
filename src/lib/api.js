export const API_URL = (process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000").replace(/\/$/, "");

export class ApiError extends Error {
  constructor(message, status, fields) {
    super(message);
    this.status = status;
    this.fields = fields;
  }
}

/**
 * Small fetch wrapper for the GDG MDC back-end.
 * Throws ApiError with the server's message so forms can show it directly.
 */
export async function apiFetch(path, { method = "GET", body, token, raw = false } = {}) {
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        ...(body !== undefined && { "Content-Type": "application/json" }),
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError("We couldn't reach the server. Please check your connection and try again.", 0);
  }

  if (raw && response.ok) return response;
  if (response.status === 204) return null;

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new ApiError(data.error || "Something went wrong. Please try again.", response.status, data.fields);
  }
  return data;
}
