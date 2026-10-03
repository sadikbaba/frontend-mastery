const taskList = document.getElementById("task-list");

function renderTasks(tasks) {
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    const completedButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const p = document.createElement("p");

    const task = tasks[i];
    li.dataset.id = task.id;

    // set text content
    p.textContent = task.text;

    // set completed button
    if (task.completed === true) {
      p.style.textDecoration = "line-through";
      completedButton.textContent = "undo";
    } else {
      p.style.textDecoration = "none";
      completedButton.textContent = "Complete";
    }

    // set button text content
    deleteButton.textContent = "Delete";

    // append section ul
    taskList.appendChild(li);

    // class list
    completedButton.classList.add("toggle-task");
    deleteButton.classList.add("delete-task");

    // append  to li
    li.appendChild(p);
    li.appendChild(completedButton);
    li.appendChild(deleteButton);
  }
}

export { renderTasks };
