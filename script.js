const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

addTaskButton.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  createTask(text);
  saveTasks();

  taskInput.value = "";
  taskInput.focus();
});

function createTask(text, completed = false) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = text;

  if (completed) {
    span.classList.add("completed");
  }

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
    saveTasks();
  });

  const removeButton = document.createElement("button");
  removeButton.innerText = "X";

  removeButton.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(removeButton);

  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = [];

  document.querySelectorAll("#taskList li span").forEach(span => {
    tasks.push({
      text: span.innerText,
      completed: span.classList.contains("completed")
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  storedTasks.forEach(task => {
    createTask(task.text, task.completed);
  });
}
loadTasks();

//