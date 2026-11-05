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

async function fetchHelper(method, url, body = null, extraHeaders = {}) {
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
    const csrfToken = getCookie("csrftoken");

    if (csrfToken) {
      headers["X-CSRFToken"] = csrfToken;
    }
  }

  // Add JSON body only when one is provided
  if (body !== null && !safeMethods.includes(method.toUpperCase())) {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (response.status === 204) {
    return null;
  }

  if (!response.ok) {
    let message = `HTTP error! status: ${response.status}`;

    try {
      const data = await response.json();
      message = data.detail || data.message || JSON.stringify(data);
    } catch {
      // Keep the default error message if the response isn't JSON
    }

    throw new Error(message);
  }

  return response.json();
}

export default fetchHelper;
