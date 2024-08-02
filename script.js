// script.js
document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
          <span class="task-text">${taskText}</span>
          <button class="remove-btn">Remove</button>
      `;
    taskList.appendChild(li);

    taskInput.value = "";

    // Attach event listener to the remove button
    li.querySelector(".remove-btn").addEventListener("click", () => {
      taskList.removeChild(li);
    });
  });

  // Allow pressing Enter to add tasks
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
});
