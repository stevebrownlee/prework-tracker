const cards = require("./card")
const dragdrop = require("./dragdrop")
const provider = require("./tasks/provider")

provider.wipe()
const tasks = provider.load()

dragdrop.init()
cards.build(tasks)


