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
                    cardinality: 3
                },
                {
                    id: 3,
                    task: "Smarter Way to Learn JavaScript (1-9)",
                    duration: 0.75,
                    priority: "HIGH",
                    column: "todo",
                    cardinality: 2
                },
                {
                    id: 5,
                    task: "Smarter Way to Learn JavaScript (10-12)",
                    duration: 0.75,
                    priority: "HIGH",
                    column: "todo",
                    cardinality: 2
                },
                {
                    id: 6,
                    task: "Smarter Way to Learn JavaScript (15-20)",
                    duration: 0.75,
                    priority: "HIGH",
                    column: "todo",
                    cardinality: 2
                },
                {
                    id: 7,
                    task: "Smarter Way to Learn JavaScript (35-38)",
                    duration: 0.75,
                    priority: "HIGH",
                    column: "todo",
                    cardinality: 2
                },
                {
                    id: 4,
                    task: "Team Treehouse - Digital Literacy Track",
                    duration: 7,
                    priority: "HIGH",
                    column: "todo",
                    cardinality: 0
                },
                {
                    id: 8,
                    task: "Team Treehouse - Digital Literacy Track",
                    duration: 4,
                    priority: "HIGH",
                    column: "todo",
                    cardinality: 4
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
