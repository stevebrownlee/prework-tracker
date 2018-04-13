const CardFactory = Object.create(null, {
    clear: {
        value: function () {
            const columns = document.querySelectorAll(".column__content")

            columns.forEach(c => {
                while (c.firstChild) {
                    c.removeChild(c.firstChild);
                }
            })
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
                    const parentComponent = document.querySelector(`.column__content--${t.column}`)
                    const card = document.createElement("section")

                    card.textContent = t.task
                    card.classList = `card card--${t.priority}`
                    card.draggable = true
                    card.id = `task--${t.id}`

                    parentComponent.appendChild(card)
                })
        }
    }
})

module.exports = CardFactory
