import fetchHelper from "./fetchHelper.js";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ACCOUNTS_URL = `${API_BASE_URL}/api/accounts`;

export function getCsrfCookie() {
  return fetchHelper("GET", `${ACCOUNTS_URL}/csrf/`);
}

export function registerUser(userData) {
  return fetchHelper("POST", `${ACCOUNTS_URL}/register/`, userData);
}

export function loginUser(credentials) {
  return fetchHelper("POST", `${ACCOUNTS_URL}/login/`, credentials);
}

export function refreshAccessToken() {
  return fetchHelper("POST", `${ACCOUNTS_URL}/refresh/`);
}

export function logoutUser() {
  return fetchHelper("POST", `${ACCOUNTS_URL}/logout/`);
}