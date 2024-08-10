// Object destructuring 

course = {
    courseName : "Web Development",
    Price : "999",
    courseInstructor : "Harkirat"
}

// it is just an syntactical sugar

const {courseName : naam, Price: dhaam} = course;

console.log(naam);
console.log(dhaam);
