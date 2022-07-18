const student = {
    name: "Juan Pablo TA",
    sclass: "VI",
    rollno: 12,
}

const showInfo = (student) => {
    student.rollno = undefined;
    return Object.values(student);
}

console.log(showInfo(student));

