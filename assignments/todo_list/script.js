
var input = document.querySelector("input");

var addBtn = document.querySelector("button");
var todoList = document.querySelector('.todos');
var count = 0;

addBtn.addEventListener('click', function () {
    var data = input.value;
    var para = document.createElement("p");
    para.setAttribute("key", count);
    para.append(data);
    todoList.append(para);
    input.value = "";
    count += 1

    para.addEventListener('click', function () {
        para.remove()
    })

})
