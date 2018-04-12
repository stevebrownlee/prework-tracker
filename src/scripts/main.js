const columns = document.querySelectorAll(".column")

columns.forEach(col => {
    console.log(col);

    col.ondragover = e => {
        e.preventDefault()
    }

    col.ondrop = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text")
        e.target.appendChild(document.getElementById(data))
    }

    col.ondragstart = e => {
        e.dataTransfer.setData("text", e.target.id)
    }
})



const todos = [
    {
        id: 1,
        task: "Interneting is hard",
        duration: 7,
        priority: "HIGH"
    },
    {
        id: 2,
        task: "Beginner JavaScript",
        duration: 16,
        priority: "HIGH"
    },
    {
        id: 3,
        task: "Smarter Way to Learn JavaScript Intro",
        duration: 3,
        priority: "HIGH"
    }
]

const todoRef = document.querySelector(".todo")

todos.forEach(t => {
    const card = document.createElement("section")
    card.textContent = t.task
    card.classList = "card card--todo"
    card.draggable = true
    card.id = `task--${t.id}`

    todoRef.appendChild(card)
})
