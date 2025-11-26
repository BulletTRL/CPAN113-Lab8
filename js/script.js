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