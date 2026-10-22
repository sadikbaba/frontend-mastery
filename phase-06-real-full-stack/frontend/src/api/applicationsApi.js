const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const APPLICATIONS_URL = `${API_BASE_URL}/api/applications/`;

export async function getApplications() {
  return fetchHelper("GET", APPLICATIONS_URL);
}

export async function createApplication(applicationData) {
  return fetchHelper("POST", APPLICATIONS_URL, applicationData);
}

export async function updateApplication(id, updates) {
  return fetchHelper("PATCH", `${APPLICATIONS_URL}${id}/`, updates);
}

async function fetchHelper(method, url, body = null, extraHeaders = {}) {
  const headers = {
    ...extraHeaders,
  };

  const options = {
    method,
    headers,
  };

  // Only add body + Content-Type for methods that need it
  if (body && method !== "GET" && method !== "HEAD") {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
