const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const APPLICATIONS_URL = `${API_BASE_URL}/api/applications/`;
import fetchHelper from "./fetchHelper";

export async function getApplications() {
  return fetchHelper("GET", APPLICATIONS_URL);
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