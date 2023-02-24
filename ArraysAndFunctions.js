// WEEK 3: CODING ASSIGNMENT - JavaScript Arrays and Functions

// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log ("QUESTION 1:\nCreate an array called ages.\n\nages = [" + ages+"]\n\n");


// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array
// The first element is array[0] and the last element is array[array.length-1] because arrays start at index 0.
console.log("QUESTION 1a:\n" );
console.log("The difference between the last and first element values is: "+ (ages[ages.length - 1] - ages[0])+"\n\n");

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. 
// The push method will add a new element to the end of the array
ages.push(16);
console.log("QUESTION 1b:\nAdd a new element to array ages.\n\nages = [" + ages+"]\n\n");

// Find the difference between value of last element of array and first element of array again.
console.log("The new difference between the last and first element values is: "+ (ages[ages.length - 1] - ages[0])+"\n\n");


// 1c.	Use a loop to iterate through the ages array and calculate the average age.
let total = 0; // Sum of the values of all elements in array
// Using a FOR loop here since we know that we have to iterate through the lenght of the array.
for (let i = 0; i < ages.length; i++){
    total += ages[i];
}

// The average age is the sum of all ages divided by the lenght of the array
console.log("QUESTION 1c:\nThe average age is: " + ((total/ages.length).toFixed(2))+ "\n\n");


// 2.	Create an array called names that contains: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log ("QUESTION 2:\nCreate an array called names.\n\nnames = [" + names+"]\n\n");


// 2a.	Use a loop to iterate through names array and calculate the average number of letters per name. 
let letterTotal = 0;    // Holds the sum of the letters of all names in the array
let letterAverage = 0;  // Holds the average number of letters per name

for (let i = 0; i< names.length; i++){
    // Adding the length of each string(each name) to letterTotal
  	letterTotal += names[i].length;
}

console.log("QUESTION 2a:\n");
console.log("The average number of letters per name in the names array is: "+(letterTotal/names.length).toFixed(2)+"\n\n");


// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// NOTE: Could use the join() method to concatenate all the names in the array, separated by spaces, instead of loop.
let longName = "";
for (let i = 0; i < names.length; i++){
    longName += (names[i] + " "); // Concatenate every string and separate with a space
}

console.log("QUESTION 2b:\n");
console.log ("Concatenate names in array, separated by spaces: " + longName+"\n\n");

// 3.	How do you access the last element of any array?
console.log("QUESTION 3:\nThe last element of any array is at index [array.length-1].\n");
console.log("To access use: array[array.length-1]\n\n");


// 4.	How do you access the first element of any array?
console.log("QUESTION 4:\nThe first element of any array is at index 0.\nTo access use: array[0]\n\n");


// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and
// add the length of each name to the nameLengths array.
console.log("QUESTION 5:\nCreate a new array called nameLenghts made up of the lengths of each name in names array\n\n");

let nameLengths = []; // Each element in this array is the length of each name in names array.
for (i = 0; i < names.length; i++){
    // Assign the length of each string to element of nameLenghts array
    nameLengths[i] = names[i].length;
}
console.log( "This is the new nameLengths array: ["+nameLengths + "]\n\n");


// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sum = 0;    // Holds the sum of all elements in nameLengths

for (i = 0; i < nameLengths.length; i ++){
    sum += nameLengths[i]; // Add up the lengths of all elements in nameLengths array
}

console.log("QUESTION 6:\n");
console.log( "The sum of all the elements in the nameLengths array: ["+sum + "]\n\n");


// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
// to itself n number of times (i.e. pass ‘Hello’ and 3, expect the function to return ‘HelloHelloHello’).
let concatString = "";  // String to contain concatenated string.
// This function will iterate through the for loop n times, concatenating word to itself every time it goes through loop.
function concatenateItself(word, n){
    for (i = 0; i < n; i++){
        concatString += word; // This will concatenate the word to itself n times
    }
    return concatString;
}

console.log("QUESTION 7:\n");
console.log("If word is 'Hello' and n is 3, the result is: " + concatenateItself("Hello", 3)+"\n\n");


// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  
// The full name should be the first and the last name separated by a space.
function makeFullName(firstName, lastName){
    return (firstName + " " + lastName); // Concatenate 
}

console.log("QUESTION 8:\n");
console.log("The first name is 'Luke' and the last name is 'Skywalker'\nThe full name is: " + makeFullName("Luke", "Skywalker")+"\n\n");


// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numberArray = [10, 50, 20, 80];

function sumGreater(numArray){
    let sum = 0;
    // Use arrow function that goes through each element of array and adds its value to sum.
    numArray.forEach(element => sum +=element);
    console.log("The sum of all the numbers in the array is: " + sum);
    return (sum > 100); // If sum is > 100, function returns true. Otherwise, function returns false.
}

console.log("QUESTION 9:\n");
console.log("The return value of this function is: "+sumGreater(numberArray)+"\n\n");


// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function getArrayAverage(array){
    let sum = 0;
    array.forEach(element => sum += element); // forEach() method executes provided callback function once for each element.
    return(sum/array.length); // The average of all arrays elements is the sum divided by the length of the array.
}

// Test function by using numberArray = [10, 50, 20, 80] to call getArrayAverage() function.
console.log("QUESTION 10:\n");
console.log("The average of all the elements in the array numberArray = ["+numberArray+"] is: "+getArrayAverage(numberArray)+"\n\n")


// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first
// array is greater than the average of the elements in the second array.
let testArray1 = [95, 75, 80, 50, 30];
let testArray2 = [40, 30 ,15, 35, 70];

console.log("QUESTION 11:\n");

function compareArrays(array1, array2){
    let array1Ave = getArrayAverage(array1); // Use getArrayAverage function from Question 10 above
    let array2Ave = getArrayAverage(array2);
    console.log("array1 average is: "+ array1Ave);
    console.log("array2 average is: "+ array2Ave);
    return(array1Ave > array2Ave);
}

console.log("Is the average of the elements in first array greater than average in second array? The answer is: " + (compareArrays(testArray1, testArray2))+"\n\n");


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log("QUESTION 12:\n");
function willBuyDrink(isHotOutside, moneyInPocket){
   // if (isHotOutside === true && (parseFloat(moneyInPocket)) > 10.50){

    if (isHotOutside === true && moneyInPocket > 10.50){
        return true;
    }
    return false;
}

console.log("The function willBuyDrink(true, 10.70), returned: " + willBuyDrink(true, 10.70)+"\n");
console.log("The function willBuyDrink(false, 10.50), returned: " + willBuyDrink(false, 10.50)+"\n\n");


// 13.  Create a function of your own.
console.log("QUESTION 13:\n");
console.log("This is my function: bmiCalculator(weight, heightFeet, heightInches)\n\n");

// bmiCalculator finds the body mass index given 3 arguments: weight in lbs and height in feet and inches).
// The BMI is a ratio of mass to height.
// Created this function to keep everyone's BMI in my family on check.
const bmiCalculator = (weight, heightFeet, heightInches) => {

    let height = (heightFeet * 12) + heightInches; // Convert feet to inches
    let bmiResult =0;

    bmiResult = ((weight/(height**2)) * 703).toFixed(1); // Calculate BMI and us toFixed() method to set number to 1 decimal
    console.log("BMI is " , bmiResult); // Prints BMI and BMI status to console
    // Set up all the ranges:
    if (bmiResult <= 18.4 ){
        console.log("You BMI status is Underweight\n");
    }else if (bmiResult >= 18.5 && bmiResult <= 24.9){
        console.log("Your BMI status is Normal");
    }else if (bmiResult >= 25 && bmiResult <= 39.9){
        console.log("Your BMI status is Overweight")
    }else{
        // (bmiResult >= 40.0)
        console.log("Your BMI status is Obese");
    }
    return bmiResult; // This function returns a BMI value
};

bmiCalculator(100, 5, 3);
bmiCalculator(150, 5, 9);
bmiCalculator(300, 5, 4);