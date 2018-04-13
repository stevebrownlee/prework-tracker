const provider = require("../tasks/provider")

const DragDrop = Object.create(null, {
    init: {
        value: () => {
            const columns = document.querySelectorAll(".column__content")

            columns.forEach(col => {
                // Dragover not supported by default. Turn that off.
                col.ondragover = e => e.preventDefault()

                // Gain reference of item being dragged
                col.ondragstart = e => e.dataTransfer.setData("text", e.target.id)

                col.ondrop = e => {
                    // Enabled dropping on targets
                    e.preventDefault()

                    // Determine what's being dropped
                    const data = e.dataTransfer.getData("text")

                    // Can only drop cards in column components
                    let dropTarget = null
                    if (e.target.classList.contains("card")) {
                        dropTarget = e.target.parentElement
                    }

                    if (e.target.classList.contains("column__content")) {
                        dropTarget = e.target
                    }

                    // Append card to target column as child
                    dropTarget.appendChild(document.getElementById(data))

                    // Update task's `column` property
                    const tasks = provider.load()
                    const id = data.split("--")[1]
                    const task = tasks.find(t => t.id === parseInt(id))
                    task.column = dropTarget.classList[1].split("--")[1]

                    // Save tasks to local storage
                    provider.save(tasks)

                    // Rebuild the cards in the UI
                    const cards = require("../card")
                    cards.build(tasks)
                }
            })
        }
    }
})

module.exports = DragDrop
