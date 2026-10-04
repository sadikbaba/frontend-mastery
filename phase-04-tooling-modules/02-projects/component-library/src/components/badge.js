export function createBadge(text) {
    const badge = document.createElement("span");
    badge.textContent = text;
    return badge;
}