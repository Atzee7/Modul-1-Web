// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add Task Event Listener
addTaskBtn.addEventListener("click", addTask);

// Function to add a task
function addTask() {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task item (li element)
  const li = document.createElement("li");

  // Create a span element for the task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Create buttons (Edit and Delete)
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Append the span and buttons to the li
  li.appendChild(taskSpan);
  const btnContainer = document.createElement("div");
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);
  li.appendChild(btnContainer);

  // Append the li to the task list
  taskList.appendChild(li);

  // Clear input after adding the task
  taskInput.value = "";

  // Edit button functionality
  editBtn.addEventListener("click", function () {
    if (editBtn.textContent === "Edit") {
      // Change text content to an input field for editing
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = taskSpan.textContent;
      li.insertBefore(inputField, taskSpan);
      li.removeChild(taskSpan);

      // Change button text to 'Save'
      editBtn.textContent = "Save";
    } else {
      // Save the edited task
      taskSpan.textContent = li.querySelector("input").value;
      li.insertBefore(taskSpan, li.querySelector("input"));
      li.removeChild(li.querySelector("input"));

      // Change button text back to 'Edit'
      editBtn.textContent = "Edit";
    }
  });

  // Delete button functionality
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });
}
