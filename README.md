### Day 2

1. Create a function that takes an array of numbers and returns an array of objects. Each object should have a key called `number` with the original number, a key called `isEven` with a boolean value indicating whether the number is even, and a key called `double` with double the value of the number.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

createNumberObjects(numbers);
// Output:
[
  { number: 1, isEven: false, double: 2 },
  { number: 2, isEven: true, double: 4 },
  // ... (rest of the numbers)
]
```

2. Create an array of objects called `students`. Each object should have keys called `name`, `age`, `grades`, and `hobbies`. Then, create the following functions:

   a. `findTopStudents` - Returns an array of students who have an average grade above a specified threshold.
   
   b. `addHobby` - Adds a hobby to a student with a given name, only if the student exists.
   
   c. `updateStudent` - Updates a student's information only if the student exists. This function should be able to update the student's name, age, grades, and hobbies.

```js
const students = [
  // ... (Your array of students with their information)
];

// Example usage:

findTopStudents(students, 85);
// Output: Returns an array of students with an average grade greater than 85

addHobby(students, 'Alice', 'painting');
// Output: Adds 'painting' to the hobbies array of the student with name 'Alice'

updateStudent(students, 'Alice', { age: 20, grades: [90, 80, 95], hobbies: ['reading', 'painting'] });
// Output: Updates the student with name 'Alice' to have age 20, new grades, and updated hobbies array
```
