const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { refreshAccessToken } from "./accountsApi.js";
function getCookie(name) {
  const prefix = `${name}=`;
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const part = cookie.trim();

    if (part.startsWith(prefix)) {
      return decodeURIComponent(part.slice(prefix.length));
    }
  }

  return null;
}



async function getCsrfToken() {
  let csrfToken = getCookie("csrftoken");

  if (!csrfToken) {
    const response = await fetch(`${API_BASE_URL}/api/accounts/csrf/`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(
        `Unable to initialize CSRF protection (${response.status}).`,
      );
    }

    csrfToken = getCookie("csrftoken");
  }

  if (!csrfToken) {
    throw new Error(
      "The server did not provide a CSRF cookie. Please try again.",
    );
  }

  return csrfToken;
}

function formatFieldError(field, message) {
  const normalizedMessage = message.toLowerCase();

  if (field === "username" && normalizedMessage.includes("already exists")) {
    return "That username is already in use. Please choose another.";
  }

  if (field === "email" && normalizedMessage.includes("already exists")) {
    return "An account with this email already exists. Try signing in or use another email.";
  }

  const fieldLabels = {
    username: "Username",
    email: "Email",
    password: "Password",
  };
  const label = fieldLabels[field];

  return label ? `${label}: ${message}` : message;
}

function getErrorMessage(data, status, url) {
  if (url.endsWith("/login/") && (status === 400 || status === 401)) {
    return "Those sign-in details don’t match our records. Check your username or email and password, then try again.";
  }

  if (url.endsWith("/logout/") && status === 401) {
    return "Your session has expired. Please sign in again.";
  }

  if (data && typeof data === "object" && !Array.isArray(data)) {
    const fieldMessages = Object.entries(data).flatMap(([field, messages]) => {
      const values = Array.isArray(messages) ? messages : [messages];

      return values
        .filter((message) => typeof message === "string")
        .map((message) =>
          field === "detail" || field === "message" || field === "non_field_errors"
            ? message
            : formatFieldError(field, message),
        );
    });

    if (fieldMessages.length > 0) {
      return [...new Set(fieldMessages)].join(" ");
    }
  }

  if (typeof data === "string" && data.trim()) {
    return data;
  }

  if (url.endsWith("/logout/")) {
    return "We couldn’t log you out right now. Please try again.";
  }

  return `Something went wrong (error ${status}). Please try again.`;
}



async function refreshSession() {
  try {
    await refreshAccessToken();
    return true;
  } catch {
    return false;
  }
}
async function fetchHelper(method, url, body = null, extraHeaders = {},  allowRefresh = true,) {
  const headers = {
    ...extraHeaders,
  };

  const options = {
    method,
    headers,
    credentials: "include",
  };

  const safeMethods = ["GET", "HEAD", "OPTIONS", "TRACE"];

  // CSRF protection for requests that change data
  if (!safeMethods.includes(method.toUpperCase())) {
    headers["X-CSRFToken"] = await getCsrfToken();
  }

  // Add JSON body only when one is provided
  if (body !== null && !safeMethods.includes(method.toUpperCase())) {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  let response = await fetch(url, options);

if (response.status === 401 &&  allowRefresh) {
  const refreshed = await refreshSession();

  if (refreshed) {
    response = await fetch(url, options);
  }
}
  if (response.status === 204) {
    return null;
  }

  if (!response.ok) {
    let data;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    const error = new Error(
      getErrorMessage(data, response.status, url),
    );
    error.status = response.status;
    throw error;
  }

  return response.json();
}

export default fetchHelper;
