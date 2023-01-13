// EASY: Create an array of students holding their last name, first name, 
// and age with 3 students. To validate, please log a greeting with the 
// first name, last name and age of the 2nd student. The output should look 
// like "Hello, my name is John Doe and I'm 19 years old."

let students = [
    {
    firstName: "John",
    lastName: "Doe",
    age: "19"
},
    {
    firstName: "Junior",
    lastName: "Leon",
    age: "20"
},
    {
    firstName: "Abdul",
    lastName: "Khan",
    age: "36"
}
]

console.log(`Hello, my name is ${students[1].firstName} ${students[1].lastName} 
and I'm ${students[1].age} years old.`);