let firstName = 'Todd'
let age = 25
let str = 'hello JavaScript students!'
let str2 = '    Hello!    '

console.log(`Hello ${firstName}, you are ${age} today!`)// template literal with backticks

console.log(str.toLowerCase()) //makes all characters lower case

console.log(str.toUpperCase()) //makes all characters upper case

console.log(str2)           //demonstrates white space around variable
console.log(str2.trim()) //removes all whitespace

console.log(str.replace('JavaScript', 'Boca Code')) // replaces JavaScript with Boca Code

console.log(str.substring(6,16))// only returns part of the string, 0 indexed. Numbers are inclusive. 

console.log(str.startsWith('hello'))//returns true or false based on whether or not the string begins with these exact characters
console.log(str.startsWith('Java')) // demonstrating when it returns false

console.log(str.endsWith('students!')) // good for being sure emails return with .com etc. evals as a boolean
console.log(str.endsWith('student!'))// took off 's' for demonstration purposes. 

console.log(str.includes('Script')) // tells whether or not this string includes this series of characters
console.log(str.includes('script')) // demonstrating when it's false

console.log(str.indexOf('Java')) // returns index of the first letter only, 0 index

console.log(str.split(' '))//divides a string by patterns and returns an array of substrings when you put a space there as shown
