
// var input = document.querySelector("input");

// var addBtn = document.querySelector("button");
// var todoList = document.querySelector('.todos');
// var count = 0;

// addBtn.addEventListener('click', function () {
//     var data = input.value;
//     var para = document.createElement("p");
//     para.setAttribute("key", count);
//     para.append(data);
//     todoList.append(para);
//     input.value = "";
//     count += 1

//     para.addEventListener('click', function () {
//         para.remove()
//     })

// })


var button = document.querySelector("button")
var btn_1 = document.querySelector("#f")
fetch('https://jsonplaceholder.typicode.com/todos').then(function (data) {
    console.log(data)
    return data.json()
}).then(function (data) {
    button.addEventListener('click', function () {
        for (i = 0; i < 100; i++) {
            if (data[i].completed === true) {
                const para = document.createElement('p')
                const out = data[i].title
                para.textContent = out
                document.getElementById("root").append(para)
            }

        }
    })
    btn_1.addEventListener('click', function () {
        for (i = 0; i < 100; i++) {
            if (data[i].completed === false) {
                const para = document.createElement('p')
                const out = data[i].title
                para.textContent = out
                document.getElementById("root").append(para)
            }

        }
    })




})


