
var todoArray = ["buy apple watch"];

var input = prompt("What would you do like to do ?");


while(input !== "quit"){
  if (input === "new"){
    var newTodo = prompt("Add new todo");
    todoArray.push(newTodo);
    console.log(todoArray);

  } else if (input === "list"){
   console.log(todoArray);
  }

  input = prompt("What would you do like to do?");
}

alert("Quit application");
