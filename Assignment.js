// Day 2
// 1. Create a function that takes an array of numbers and returns an array of objects. Each object should have a key called number with the original number, a key called isEven with a boolean value indicating whether the number is even, and a key called double with double the value of the number.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

createNumberObjects(numbers);
// Output:
[
  { number: 1, isEven: false, double: 2 },
  { number: 2, isEven: true, double: 4 },
  // ... (rest of the numbers)
]
// Solution :
function createNumberObjects(numbers) { //The createNumberObjects function uses the map method to iterate over each number in the input array. 
    return numbers.map(number => {
      return {
        number: number,
        isEven: number % 2 === 0,
        double: number * 2
      };
    });
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = createNumberObjects(numbers);
  console.log(result);

// Different Approaches
//For Loop: Instead of using the map method, you can use a traditional for loop to iterate over the numbers array and create the objects manually.
function createNumberObjects(numbers) {
    const result = [];
  
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      const isEven = number % 2 === 0;
      const double = number * 2;
  
      result.push({ number, isEven, double });
    }
  
    return result;
  }
// forEach Method: You can also use the forEach method to iterate over the numbers array and push the generated objects into a new array.
function createNumberObjects(numbers) {
    const result = [];
  
    numbers.forEach(number => {
      const isEven = number % 2 === 0;
      const double = number * 2;
  
      result.push({ number, isEven, double });
    });
  
    return result;
  }
// Array Reduce: Another approach is to use the reduce method to accumulate the array of objects.
  

// 2.Create an array of objects called students. Each object should have keys called name, age, grades, and hobbies. Then, create the following functions:
// a. findTopStudents - Returns an array of students who have an average grade above a specified threshold
// b. addHobby - Adds a hobby to a student with a given name, only if the student exists.
// c. updateStudent - Updates a student's information only if the student exists. This function should be able to update the student's name, age, grades, and hobbies.
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