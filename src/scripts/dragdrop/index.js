const DragDrop = Object.create(null, {
    init: {
        value: () => {
            const columns = document.querySelectorAll(".column")

            columns.forEach(col => {
                col.ondragover = e => e.preventDefault()
                col.ondragstart = e => e.dataTransfer.setData("text", e.target.id)

                col.ondrop = e => {
                    e.preventDefault()
                    const data = e.dataTransfer.getData("text")
                    if (e.target.classList.contains("column")) {
                        e.target.appendChild(document.getElementById(data))
                    }
                }
            })
        }
    }
})

module.exports = DragDrop
