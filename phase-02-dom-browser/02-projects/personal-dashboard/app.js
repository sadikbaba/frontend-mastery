const noteForm = document.querySelector("#noteForm");
const noteInput = document.querySelector("#noteInput");
const notesList = document.querySelector("#notesList");

let notes = [];

// We will add functions step by step

function renderNotes() {
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${note}</span>
      <button data-index="${index}">Delete</button>
    `;

    notesList.appendChild(li);
  });
}

noteForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = noteInput.value.trim();

  if (text === "") return;

  notes.push(text);
  noteInput.value = "";
  renderNotes();
});

notesList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.dataset.index;
    notes.splice(index, 1);
    renderNotes();
  }
});

noteForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = noteInput.value.trim();
  if (text === "") return;

  notes.push(text);
  noteInput.value = "";
  renderNotes();
  saveNotes();
});

notesList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.dataset.index;
    notes.splice(index, 1);
    renderNotes();
    saveNotes();
  }
});

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const saved = localStorage.getItem("notes");
  if (saved) {
    notes = JSON.parse(saved);
    renderNotes();
  }
}

loadNotes();
