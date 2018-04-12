const TasksProvider = Object.create(null, {
    wipe: {
        value: () => localStorage.removeItem("NSSPreworkTasks")
    },
    seed: {
        value: function () {
            const tasks = [
                {
                    id: 1,
                    task: "Interneting is hard",
                    duration: 7,
                    priority: "HIGH",
                    column: "todo",
                    cardinality: 1
                },
                {
                    id: 2,
                    task: "Beginner JavaScript",
                    duration: 16,
                    priority: "HIGH",
                    column: "todo",
                    cardinality: 2
                },
                {
                    id: 3,
                    task: "Smarter Way to Learn JavaScript Intro",
                    duration: 3,
                    priority: "HIGH",
                    column: "todo",
                    cardinality: 3
                },
                {
                    id: 4,
                    task: "Team Treehouse - Digital Literacy Track",
                    duration: 7,
                    priority: "HIGH",
                    column: "todo",
                    cardinality: 0
                }
            ]

            const stringifiedTasks = JSON.stringify(tasks)

            localStorage.setItem("NSSPreworkTasks", stringifiedTasks)

            return stringifiedTasks
        }
    },
    load: {
        value: function () {
            const tasks = localStorage.getItem("NSSPreworkTasks") || this.seed()

            return JSON.parse(tasks)
        }
    },
    save: {
        value: (data) => {
            localStorage.setItem("NSSPreworkTasks", JSON.stringify(data))
        }
    }
})

module.exports = TasksProvider
