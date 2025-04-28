const projects = [
    {
        project: 'Website',
        tasks: [
            { task: 'Design', assignedTo: 'Alice' },
            { task: 'Code', assignedTo: 'Bob' },
        ],
    },
    {
        project: 'App',
        tasks: [
            { task: 'Develop', assignedTo: 'Alice' },
            { task: 'Test', assignedTo: 'Charlie' },
        ],
    },
];

let arr = [];

for (const element of projects) {

    for (const value of element.tasks) {
        if (value.assignedTo === "Alice") {

            arr.push(value);

        }

    }

}

console.log(arr);
