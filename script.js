function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    if (task !== "") {
      var list = document.getElementById("taskList");
      var listItem = document.createElement("li");
      listItem.textContent = task;
      
      var updateInput = document.createElement("input");
      updateInput.type = "text";
      updateInput.classList.add("update-input");
      
      var updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      updateButton.classList.add("update-button");
      updateButton.onclick = function() {
        listItem.textContent = updateInput.value.trim();
        listItem.appendChild(updateInput);
        listItem.appendChild(updateButton);
        listItem.appendChild(deleteButton);
      };
      
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");
      deleteButton.onclick = function() {
        list.removeChild(listItem);
      };
      
      listItem.appendChild(updateInput);
      listItem.appendChild(updateButton);
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
      input.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  