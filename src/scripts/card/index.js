const provider = require("./provider")
const factory = require("./factory")

module.exports = Object.create(null, {
    init: {
        value: () => {
            factory.generate(provider)
        }
    }
})
