export function createStatusMessage(text) {
  const p = document.createElement("p");
  p.classList.add("status-message");
  p.textContent = text;
  return p;
}
