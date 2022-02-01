



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


