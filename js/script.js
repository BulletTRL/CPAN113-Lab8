const output = document.getElementById("output");
const log = (msg) => output.innerHTML += `<p>${msg}</p>`;

// Understanding and Creating Objects
log(`<strong>Understanding and Creating Objects</strong>`);

const student = {
    name: "Tyler Hoyos",
    age: 24,
    enrolled: true,
    courses: ["JavaScript", "Databases", "Web Development", "WRIT", "Algorithms", ""],
    displayInfo() {
        return `${this.name}, Age: ${this.age}, Courses: ${this.courses.join(", ")}`;
    }
};

log(`Name: ${student.name}`);
log(`Age: ${student.age}`);
log(`Info: ${student.displayInfo()}`);

// Working with JSON
log(`<strong>Working with JSON</strong>`);

const jsonString = JSON.stringify(student);
log(`JSON String: ${jsonString}`);

const parsedStudent = JSON.parse(jsonString);
log(`Parsed Student; Name: ${parsedStudent.name}, Age: ${parsedStudent.age}`);

// Using Destructuring Assignment
log(`<strong>Using Destructuring Assignment</strong>`);

const { name, courses } = student;
log(`Destructured Name: ${name}`);
log(`Destructured Courses: ${courses.join(", ")}`);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
log(`First two scores: ${firstScore}, ${secondScore}`);