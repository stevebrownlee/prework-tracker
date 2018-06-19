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
                    priority: "high",
                    column: "todo",
                    cardinality: 1
                },
                {
                    id: 2,
                    task: "Beginner JavaScript",
                    duration: 16,
                    priority: "high",
                    column: "todo",
                    cardinality: 3
                },
                {
                    id: 3,
                    task: "Smarter Way to Learn JavaScript (1-9)",
                    duration: 0.75,
                    priority: "high",
                    column: "todo",
                    cardinality: 2
                },
                {
                    id: 4,
                    task: "Smarter Way to Learn JavaScript (10-12)",
                    duration: 0.75,
                    priority: "high",
                    column: "todo",
                    cardinality: 2
                },
                {
                    id: 5,
                    task: "Smarter Way to Learn JavaScript (15-20)",
                    duration: 0.75,
                    priority: "high",
                    column: "todo",
                    cardinality: 2
                },
                {
                    id: 6,
                    task: "Smarter Way to Learn JavaScript (35-38)",
                    duration: 0.75,
                    priority: "high",
                    column: "todo",
                    cardinality: 2
                },
                {
                    id: 7,
                    task: "Team Treehouse - Digital Literacy Track",
                    duration: 7,
                    priority: "high",
                    column: "todo",
                    cardinality: 0
                },
                {
                    id: 8,
                    task: "Smarter Way to Learn JavaScript (55-68)",
                    duration: 7,
                    priority: "high",
                    column: "todo",
                    cardinality: 5
                },
                {
                    id: 9,
                    task: "Team Treehouse - Git Basics",
                    duration: 4,
                    priority: "high",
                    column: "todo",
                    cardinality: 4
                },
                {
                    id: 10,
                    task: "Team Treehouse - CSS Layout Basics",
                    duration: 4,
                    priority: "medium",
                    column: "todo",
                    cardinality: 6
                },
                {
                    id: 11,
                    task: "Team Treehouse - Bootstrap 4 Basics",
                    duration: 4,
                    priority: "medium",
                    column: "todo",
                    cardinality: 6
                },
                {
                    id: 12,
                    task: "Team Treehouse - jQuery Basics",
                    duration: 4,
                    priority: "medium",
                    column: "todo",
                    cardinality: 7
                },
                {
                    id: 13,
                    task: "Team Treehouse - Getting started with the console",
                    duration: 2,
                    priority: "medium",
                    column: "todo",
                    cardinality: 8
                },
                {
                    id: 14,
                    task: "Team Treehouse - Responsive layouts",
                    duration: 2,
                    priority: "low",
                    column: "todo",
                    cardinality: 9
                },
                {
                    id: 15,
                    task: "Team Treehouse - CSS Flexbox Layout",
                    duration: 2,
                    priority: "low",
                    column: "todo",
                    cardinality: 12
                },
                {
                    id: 16,
                    task: "Team Treehouse - AJAX Basics",
                    duration: 2,
                    priority: "low",
                    column: "todo",
                    cardinality: 11
                },
                {
                    id: 17,
                    task: "Team Treehouse - Console Foundations",
                    duration: 2,
                    priority: "low",
                    column: "todo",
                    cardinality: 10
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
