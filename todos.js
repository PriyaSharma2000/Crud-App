update();
let addTask = document.getElementById("addTask");
let add_btn = document.getElementById("add_btn");
add_btn.addEventListener("click", function () {
  addTaskval = addTask.value;
  if (addTaskval.trim() != 0) {
    if (!localStorage.getItem("todos")) {
      todosArray = [];
    } else {
      todosArrayStr = localStorage.getItem("todos");
      todosArray = JSON.parse(todosArrayStr);
    }
    var date = new Date();
    todosArray.push({
      task: addTaskval,
      timestamp: date.toLocaleString(),
    });
    localStorage.setItem("todos", JSON.stringify(todosArray));
    addTask.value = "";
  }
  update();
});
function update() {
  if (!localStorage.getItem("todos")) {
    todosArray = [];
    localStorage.setItem("todos", JSON.stringify(todosArray));
  } else {
    todosArrayStr = localStorage.getItem("todos");
    todosArray = JSON.parse(todosArrayStr);
    todosArray.reverse();
  }
  let html = "";
  let parentList = document.getElementById("parentList");
  todosArray.forEach((item, index) => {
    html += `<li class="list-group-item d-flex justify-content-between">
          <h3 class="flex-grow-1">${item.task}</h3> <br>
          <p class="flex-grow-1">${item.timestamp}</p> 
          <button class="btn btn-danger" onclick="removeTodo(${index})">Remove</button>
        </li>`;
  });
  parentList.innerHTML = html;
}
function removeTodo(index) {
  todosArrayStr = localStorage.getItem("todos");
  todosArray = JSON.parse(todosArrayStr);
  todosArray.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosArray));
  update();
}
function clearAll() {
  todosArrayStr = localStorage.getItem("todos");
  todosArray = JSON.parse(todosArrayStr);
  if (localStorage.getItem("todos") == null) {
    todosArray = [];
  } else {
    todosArray = JSON.parse(todosArrayStr);
    todosArray = [];
  }
  localStorage.setItem("todos", JSON.stringify(todosArray));
  update();
}
addTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskval = addTask.value;
    if (addTaskval.trim() != 0) {
      if (!localStorage.getItem("todos")) {
        todosArray = [];
      } else {
        todosArrayStr = localStorage.getItem("todos");
        todosArray = JSON.parse(todosArrayStr);
      }
      var date = new Date();
      todosArray.push({
        task: addTaskval,
        timestamp: date.toLocaleString(),
      });
      localStorage.setItem("todos", JSON.stringify(todosArray));
      addTask.value = "";
    }
    update();
  }
});
var today = new Date();
var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date + " " + time;
console.log(dateTime);

// for (var i = todosArray.length - 1; i >= 0; i--) {
//   console.log(todosArray[i]);
// }
