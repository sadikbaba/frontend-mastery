const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const APPLICATIONS_URL = `${API_BASE_URL}/api/applications/`;
import fetchHelper from "./fetchHelper";

export async function getApplications(filters = {}) {
  const params = new URLSearchParams();

  if (filters.status) {
    params.set("status", filters.status);
  }

  if (filters.search) {
    params.set("search", filters.search);
  }

  if (filters.page) {
    params.set("page", filters.page);
  }

  const queryString = params.toString();

  const url = queryString
    ? `${APPLICATIONS_URL}?${queryString}`
    : APPLICATIONS_URL;

  return fetchHelper("GET", url);
}

export async function createApplication(applicationData) {
  return fetchHelper("POST", APPLICATIONS_URL, applicationData);
}

export async function updateApplication(id, updates) {
  return fetchHelper("PATCH", `${APPLICATIONS_URL}${id}/`, updates);
}

export async function deleteApplication(id) {
  return fetchHelper("DELETE", `${APPLICATIONS_URL}${id}/`);
}
