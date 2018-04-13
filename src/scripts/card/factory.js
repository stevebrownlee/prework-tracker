const CardFactory = Object.create(null, {
    clear: {
        value: function () {
            const columns = document.querySelectorAll(".column")

            columns.forEach(c => {
                while (c.firstChild) {
                    c.removeChild(c.firstChild);
                }
            })

            // Add the header back to each column
            const todo = document.querySelector(".todo")
            const todoHeader = document.createElement("h2")
            todoHeader.textContent = "Work To Do"
            todoHeader.className = "column-header"
            todo.appendChild(todoHeader)

            const doing = document.querySelector(".doing")
            const doingHeader = document.createElement("h2")
            doingHeader.textContent = "Current Work"
            doingHeader.className = "column-header"
            doing.appendChild(doingHeader)

            const done = document.querySelector(".done")
            const doneHeader = document.createElement("h2")
            doneHeader.textContent = "Completed"
            doneHeader.className = "column-header"
            done.appendChild(doneHeader)
        }
    },
    generate: {
        value: function (tasks) {
            this.clear()
            tasks
                .sort((p,n) => {
                    return p.cardinality - n.cardinality
                })
                .forEach(t => {
                    const card = document.createElement("section")
                    card.textContent = t.task
                    card.classList = "card card--${t.column}"
                    card.draggable = true
                    card.id = `task--${t.id}`

                    const parentComponent = document.querySelector(`.${t.column}`)

                    parentComponent.appendChild(card)
                })
        }
    }
})

module.exports = CardFactory
