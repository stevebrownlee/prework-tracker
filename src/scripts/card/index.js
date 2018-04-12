const factory = require("./factory")

module.exports = Object.create(null, {
    build: {
        value: (tasks) => {
            factory.generate(tasks)
        }
    }
})
