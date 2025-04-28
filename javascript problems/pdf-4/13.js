const team = [
    {
        name: 'Alice',
        skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        name: 'Bob',
        skills: ['Java', 'Spring Boot'],
    },
];

for (const element of team) {
    if (element.name == "Alice") {
        element.skills.push("Node.js")

    }

}

console.log(team);
