let todoitems = [{
        "title": 'Mark Attendance',
        "done": false
    },
    {
        title: "submit Assignment",
        done: false,
    },
    {
        title: "Buy flowers",
        done: false,
    },
]
let todo = document.getElementById("todo");
let done = document.getElementById("done");
let add = document.getElementById("add");
add.addEventListener("clck", function() {
    let add = document.getElementById('item').value;
    let newItem = {
        title: item,
        done: false,
    };
    addNew(newItem)
});


function displayTodos() {
    todoitems.forEach(item => {
        let newItem = document.createElement("li");
        let itemTitle = document.createElement("span");
        itemTitle.innerHTML = item.title;
        if (!item.done) {
            itemTitle.className = "todo";
            newItem.innerHTML = '<input type="checkbox"/>';
            newItem.appendChild(itemTitle);
            todo.appendChild(newItem);
        } else {
            itemTitle.className = "done";
            newItem.innerHTML = '<input type="checkbox"/>';
            newItem.appendChild(itemTitle);
            done.appendChild(newItem);
        }
    })
}


function addNew() {
    todoitems.unshift(item);
    displayTodos();
}
document.addEventListener("DOMContentLoaded", () =>
    displayTodos());