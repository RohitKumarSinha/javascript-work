document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const prioritySelect = document.getElementById("priority");
    const taskList = document.getElementById("task-list");
    const editMode = {
      active: false,
      taskId: null,
    };
  
    // Private Counter using Closure
    function createCounter() {
      let count = 0;
  
      function increment() {
        count++;
      }
  
      function decrement() {
        count--;
      }
  
      function getCount() {
        return count;
      }
  
      return {
        increment,
        decrement,
        getCount,
      };
    }
  
    const counter = createCounter();
  
    // Memoized Function
    function memoize(func) {
      const cache = {};
  
      return function (...args) {
        const key = JSON.stringify(args);
  
        if (cache[key]) {
          console.log('Using cached result for', args);
          return cache[key];
        } else {
          console.log('Calculating result for', args);
          const result = func(...args);
          cache[key] = result;
          return result;
        }
      };
    }
  
    function renderTaskList() {
      taskList.innerHTML = '';
  
      // Priority color mapping
      const priorityColors = {
        High: 'text-danger',   // Red
        Normal: 'text-primary', // Blue
        Low: 'text-success',    // Green
      };
  
      // Iterate over tasks and render them
      taskData.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "fade", "show", "d-flex", "justify-content-between", "align-items-center"); // Add Bootstrap classes
  
        const textContainer = document.createElement("div");
        textContainer.className = "d-flex align-items-center";
  
        const taskText = document.createElement("span");
        taskText.className = `task-text ${task.completed ? 'completed' : ''} ${priorityColors[task.priority]}`;
        taskText.innerText = task.text;
        textContainer.appendChild(taskText);
  
        const buttons = document.createElement("div");
        buttons.className = "btn-group";
        buttons.role = "group";
  
        const editButton = document.createElement("button");
        editButton.className = "edit-button btn btn-secondary";
        editButton.innerText = "Edit";
        buttons.appendChild(editButton);
  
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button btn btn-danger";
        deleteButton.innerText = "Delete";
        buttons.appendChild(deleteButton);
  
        listItem.appendChild(textContainer);
        listItem.appendChild(buttons);
  
        listItem.querySelector(".delete-button").addEventListener("click", function () {
          const taskIndex = taskData.indexOf(task);
          if (taskIndex !== -1) {
            taskData.splice(taskIndex, 1);
            localStorage.setItem('taskData', JSON.stringify(taskData)); // Update localStorage
          }
          listItem.remove();
          counter.decrement(); // Decrement the counter when a task is deleted
        });
  
        listItem.querySelector(".task-text").addEventListener("click", function () {
          task.completed = !task.completed;
          listItem.querySelector(".task-text").classList.toggle("completed");
          localStorage.setItem('taskData', JSON.stringify(taskData)); // Update localStorage
        });
  
        listItem.querySelector(".edit-button").addEventListener("click", function () {
          // Enter edit mode
          taskInput.value = task.text;
          prioritySelect.value = task.priority;
          editMode.active = true;
          editMode.taskId = index;
        });
  
        taskList.appendChild(listItem);
  
        setTimeout(function () {
          listItem.classList.remove("fade", "show");
        }, 500);
      });
  
      counter.increment(); // Increment the counter when the task list is rendered
      console.log('Total tasks: ' + counter.getCount());
    }
  
    // Check if taskData exists in localStorage and retrieve it
    let taskData = JSON.parse(localStorage.getItem('taskData')) || [];
  
    // Initial rendering of the task list
    renderTaskList();
  
    document.getElementById("add-task").addEventListener("click", function () {
      const taskText = taskInput.value;
      const priorityValue = prioritySelect.value;
  
      if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
      }
  
      if (editMode.active) {
        // Edit the existing task
        taskData[editMode.taskId] = {
          text: taskText,
          priority: priorityValue,
          completed: taskData[editMode.taskId].completed,
        };
        editMode.active = false;
      } else {
        // Add a new task
        taskData.push({
          text: taskText,
          priority: priorityValue,
          completed: false,
        });
      }
  
      taskInput.value = "";
      localStorage.setItem('taskData', JSON.stringify(taskData)); // Update localStorage
  
      // Re-render the task list with memoization
      const memoizeRenderTaskList = memoize(renderTaskList);
      memoizeRenderTaskList();
    });
  });
  