const Card = require("./card")

const CardFactory = Object.create(null, {
    clear: {
        value: function () {
            /*
                Clear all cards out of each column
            */
            document.querySelectorAll(".column__content").forEach(column => {
                while (column.firstChild) {
                    column.removeChild(column.firstChild);
                }
            })
        }
    },
    generate: {
        value: function (tasks) {
            this.clear()

            /*
                Sort tasks by cardinality, then place each one in the
                column corresponding to its `column` property
            */
            tasks
                .sort((p,n) => {
                    return p.cardinality - n.cardinality
                })
                .forEach(task => {
                    const card = Card.init(task)
                    const parentComponent = document.querySelector(`.column__content--${task.column}`)
                    parentComponent.appendChild(card)
                })
        }
    }
})

module.exports = CardFactory
