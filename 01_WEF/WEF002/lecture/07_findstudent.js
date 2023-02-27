// let studentFound;
// for (let student of peter.students) {
//   if (student.name === "Andy") {
//     studentFound = student;
//   }
// }

// let student2Found;
// for (let student of peter.students) {
//   if (student.name === "Bob") {
//     student2Found = student;
//   }
// }

// let student3Found;
// for (let student of peter.students) {
//   if (student.name === "Charlie") {
//     student3Found = student;
//   }
// }
const peter = {
    name: "Peter",
    age: 50,
    students: [
        { name: "Andy", age: 20 },
        { name: "Bob", age: 23 },
        {
            name: "Charlie",
            age: 25,
            exercises: [{ score: 60, date: new Date("2019-01-05") }],
        },
    ],
};

function findStudent(name) {
    let studentFound;

    for (let student of peter.students) {
        if (student.name === name) {
            studentFound = `${name} is found!!!`;
            console.log(`${name} is found!!!`)
        }
    }

    return studentFound;
}

//   console.log(findStudent("Andy"));
findStudent("Andy");

findStudent("Bob");
findStudent("Charlie");