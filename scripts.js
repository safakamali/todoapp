const AddNewTodo_btn = document.getElementById('addnewtodo');
const AddNewTodo_dialog = document.getElementById('addnewtodo_dialog');
const AddTodo_btn = document.getElementById('addtodo');
const TodoName_input = document.getElementById('input_todoname')
const TodosBox = document.getElementById('todos-box')

AddNewTodo_btn.addEventListener("click", function () {
    TodoName_input.value = ""
    AddNewTodo_dialog.showModal();
});

AddTodo_btn.addEventListener("click", function () {
    var code = 
    '<div class="todo-box">' + 
        '<label>TODOTEXT</label>' +
        '<span class="material-icons" style="position: absolute; bottom: 5px; right: 5px;" onclick="this.parentElement.remove()">delete</span>' +
    '</div>'
    code = code.replace("TODOTEXT", TodoName_input.value)
    TodosBox.innerHTML += code
});