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

// Alternative Approaches
//For Loop: Instead of using the map method, you can use a traditional for loop to iterate over the numbers array and create the objects manually.
function createNumberObjects(numbers) { //This line declares a function called createNumberObjects that takes in an array of numbers as a parameter.
    const result = []; //This line initializes an empty array called result which will store the objects created in the loop.
  
    for (let i = 0; i < numbers.length; i++) { //This line starts a for loop that iterates over the numbers array. It initializes a variable i to 0, sets the condition that the loop should continue as long as i is less than the length of the numbers array, and increments i by 1 in each iteration.
      const number = numbers[i];//This line assigns the value of the current element in the numbers array, at index i, to a variable called number.
      const isEven = number % 2 === 0;//This line checks whether the number is even by using the modulo operator % to calculate the remainder when dividing number by 2. If the remainder is 0, it means number is even, and the variable isEven is set to true. Otherwise, it is set to false.
      const double = number * 2;//This line multiplies the number by 2 and assigns the result to a variable called double.
  
      result.push({ number, isEven, double });//This line creates an object literal with properties number, isEven, and double, using the values stored in the variables with the same names. It then pushes this object into the result array.
    }
  
    return result;//This line returns the result array containing the objects created in the loop.
  }

// forEach Method: You can also use the forEach method to iterate over the numbers array and push the generated objects into a new array.
function createNumberObjects(numbers) {//This line declares a function called createNumberObjects that takes in an array of numbers as a parameter.
    const result = [];//This line initializes an empty array called result which will store the objects created in the loop.
  
    numbers.forEach(number => {//This line starts a forEach loop that iterates over each element in the numbers array. It takes a callback function as an argument, which will be executed for each element in the array.
      const isEven = number % 2 === 0;//This line checks whether the number is even by using the modulo operator % to calculate the remainder when dividing number by 2. If the remainder is 0, it means number is even, and the variable isEven is set to true. Otherwise, it is set to false.
      const double = number * 2;//This line multiplies the number by 2 and assigns the result to a variable called double.
  
      result.push({ number, isEven, double });//This line creates an object literal with properties number, isEven, and double, using the values stored in the variables with the same names. It then pushes this object into the result array.
    });
  
    return result;//This line returns the result array containing the objects created in the loop.
  }
// Array Reduce: Another approach is to use the reduce method to accumulate the array of objects.
function createNumberObjects(numbers) {
    return numbers.reduce((result, number) => {
      const isEven = number % 2 === 0;
      const double = number * 2;
  
      result.push({ number, isEven, double });
      return result;
    }, []);
  } 

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
  let = studentDetails = [
    {
      name: 'dinesh',
      age: 20,
      marks: 30,
      Grade: 'F'
    },
    {
      name: 'divi',
      age: 20,
      marks: 60,
      Grade: 'B'
    },
    {
      name: 'vignesh',
      age: 30,
      marks: 80,
      Grade: 'A'
    }]
  let partialStudentDetails = studentDetails.map((
    { name, age, Grade }) => ({ name, age, Grade }));
  console.log(partialStudentDetails);

  