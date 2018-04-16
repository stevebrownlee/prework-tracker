const CardComponent = Object.create(null, {
    init: {
        value: function(data) {
            const card = document.createElement("section")

            card.textContent = data.task
            card.classList = `card card--${data.priority}`
            card.draggable = true
            card.id = `task--${data.id}`

            return card
        }
    }
})

module.exports = CardComponent
