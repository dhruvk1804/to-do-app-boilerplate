
var list = [];

var input = document.getElementById("input");

var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = click;

function click() {
  list.push(input.value);
  console.log(list);
  input.value = "";
  showList();
}


function showList() {

  todolist.innerHTML = " ";

  list.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}

function deleteItem(i) {
  list.splice(i, 1);
  showList();
}

function editItem(i) {
  var newValue = prompt("Please insert your new value");
  list.splice(i, 1, newValue);
  showList();
}