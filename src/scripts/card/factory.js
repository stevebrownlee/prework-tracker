const CardFactory = Object.create(null, {
    generate: {
        value: (tasks) => {
            tasks.forEach(t => {
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
