const students = [
  {
    name: "João",
    grade: 5.5,
    location: "East"
  },
  {
    name: 'Maria',
    grade: 10,
    location: "South"
  },
  {
    name: 'Pedro',
    grade: 2,
    location: "North"
  },
  {
    name: 'Ana',
    grade: 9.5,
    location: "West"
  },
    {
        name: 'José',
        grade: 7,
        location: "East"
    }
];

const getStudentFromEast = (data, callback) => {
    // get all students from East
    for (let student of data) {
        if (student.location.toLowerCase() === "east") {
            // check the callback if it's a function
            if (typeof callback ===  "function") {
                // call the callback and return the student
                callback(student);
            }
        }
    }

};

getStudentFromEast(students, (student) => {
    console.log(`The student from East campus is ${student.name}`);
});