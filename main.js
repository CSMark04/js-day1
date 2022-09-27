// Basics of JavaScript

/*
    EVERYTHING IN BETWEEN IS A COMMENT
    I CAN GO AS MANY LINES AS I WANT, AS LONG AS I STAY BETWEEN THE COMMENT SYMBOLS
*/

/* 
    -- Primitive data types
    -- Variable declarations in JavaScript
    -- Functions, how to define them and different variations
    -- Loops and Conditions
*/

/* 
    Primitive Data Types in JavaScript:
    strings, integers, booleans, floats, arrays, objects, sets

    Primitive Data Types in Python:
    strings, integers, booleans, floats, lists, dictionaries, sets, tuples
*/

// String variable
var firstName = "Christopher"
var lastName = "Thrutchley"

// Integer variable
var favoriteNumber = 3 // There's no question about it

// Floating type
var favoriteFloatingNumber = 3.14 // There's no question about it

// Redefining a variable
//firstName = "Lucas"

/* Objects & Arrays */
var favoriteSportsTeams = [ 'Cubs', 'Bears', 'Bulls', 'Blackhawks' ]

// print(favoriteSportsTeams[0])
console.log(favoriteSportsTeams[0])
console.log(favoriteSportsTeams.at(-1)) // Negative indexing
console.log(favoriteSportsTeams.at(1)) 

console.log(favoriteSportsTeams[favoriteSportsTeams.length - 2]) // Negative indexing without .at() method

var favoriteNumbers = [1,2,3,4,5]

var mixedArr = [1,'hello',2]

// Objects
var favoriteSportsTeamsObject = {
    cubs: {
        'players': 30
    },
    bears: {
        'players': 52
    },
    bulls: {
        'players': 30
    },
    blackhawks: {
        'players': 40
    }
}

console.log(favoriteSportsTeamsObject['cubs'])
console.log(favoriteSportsTeamsObject.cubs)

var team = 'bears'

console.log(favoriteSportsTeamsObject[team])

// String concatenation
var fullName = firstName + ' ' + lastName
console.log(fullName)

// Formatted Strings AKA Template Literals OR Template Strings
// f'{first_name} {last_name}'
console.log(`${firstName} ${lastName}'s favorite number is ${favoriteNumber}.`)

// Math operations
var add = 4 + 4
var subtract = 10 - 6
var multiply = 5 * 4
var divide = 50 / 5

// Floor divide -> 53 // 5
var floorDivide = Math.floor(53 / 5)
console.log(floorDivide)

var ceiling = Math.ceil(23.1)
console.log(ceiling)

var ceilingDivide = Math.ceil(53 / 5)
console.log(ceilingDivide)

var round = Math.round(23.4)
console.log(round)

/* Functions Fun */
// def function_name():

// Named function
function addNums(num, num2) {
    return num + num2
}

console.log(addNums(10,20))

// Named variable function
var addNums2 = function(num, num2) {
    return num + num2
}

console.log(addNums2(10,20))

// Arrow function
// lambda x, y: x + y
const addNums3 = (x, y) => x + y
const addNums4 = (x, y) => {
    return x + y
}

console.log(addNums3(10,20))
console.log(addNums4(10,20))

// Conditionals
firstName = 'Adam'
if (firstName == 'Christopher') {
    console.log('HELLO CHRISTOPHER')
} else if (firstName == 'Aaron') {
    console.log('HELLO AARON')
} else {
    console.log('HELLO UNKNOWN PERSON')
}

function greeter(name) {
    //return `Good afternoon ${name}, are you here for some tea? Chai is fire.` 
    return 'Good afternoon ' + name + ', are you here for some tea? Chai is fire.' 
}

console.log(greeter('Christopher'))

/* 
    Write a function to determine, based on a given age
    if someone is an adult and also if they can legally
    drink

    Three possibilities:
    - Minor
    - Adult (18 or over), but can't legally drink (Under 21)
    - Adult and can legally drink (21 or Over)
*/
function ageChecker(age) {
    if (age < 18) {
        return 'Minor'
    } else if (age >= 18 && age < 21) {
        return "Adult but can't drink."
    } else {
        return "Can drink."
    }
}

console.log(ageChecker(19))
console.log(ageChecker(15))
console.log(ageChecker(22))

// If someone has a red shirt or a blue shirt
// print out yippee!
// If someone has a different colored shirt
// print out awwwww....
function checkShirtColor(color) {
    if (color == 'red' || color == 'blue') {
        return 'yippee!'
    } else {
        return 'awwwww....'
    }
}

console.log(checkShirtColor('green'))
console.log(checkShirtColor('red'))
console.log(checkShirtColor('blue'))

// Ternary operator
// One line conditionals
// output_if_true if condition else output_if_false

// Set the message to hello, if the variable loggedIn is true, otherwise set the message to goodbye
var loggedIn = false
var message = (loggedIn) ? 'hello' : 'goodbye'
console.log(message)
// (condition) ? outputIfTrue : outputIfFalse

/* 
    LOOPING
*/
var colors = ['blue', 'black', 'pink', 'purple']
//  (  counter;         condition; incrementor/decrementor)
for (var i = 0; i < colors.length; i++) {
    console.log(i)
}

/* Print every number between one and a given number */
function countUp(num) {
    for (var i = 1; i <= num; i++ ) {
        console.log(i)
    }
}
countUp(5)

/* Print every number between a given number and one (decrementing) */
function countDown(num) {
    for (var i = num; i > 0; i-- ) {
        console.log(i)
    }
}
countDown(5)

// Simpler for loop, in this case we're looping through items
// in an array
colors = ['blue', 'black', 'pink', 'purple']
for (var color of colors) {
    console.log(color)
}

// While loops

var count = 0
while(count < 10) {
    console.log(count)

    if (count == 5) {
        break
    }

    count++
}

/* Javascript Array Methods
    .map(), .filter(), .sort(), .reduce()
*/

var names = ['Bryan', 'Cyrus', 'Dennis', 'George', 'Jessica', 'Juneun', 'Mark', 'Victor']

// Change the value in the array to '1st Half' if their name appears alphabetically before 'M', otherwise
// change it to '2nd Half'

names = names.map((name) => {
    if (name < 'M') {
        return '1st Half'
    } else {
        return '2nd Half'
    }
})

console.log(names)

var numbers = [10,20,30,40]

var double = numbers.map((number) => number * 2)
console.log(double)

names = ['Bryan', 'Cyrus', 'Dennis', 'George', 'Jessica', 'Juneun', 'Mark', 'Victor']

// Remove names from the array that appear before 'M' alphabetically
names = names.filter((name) => {
    if (name < 'M') {
        return false
    } else {
        return true
    }
})

console.log(names)

numbers = [1,2,3,4,5,6]
// Remove all evens
numbers = numbers.filter((number) => number % 2 == 1)
console.log(numbers)

// .sort()
names = ['Bryan', 'Mark', 'Dennis', 'George', 'Jessica', 'Cyrus', 'Juneun', 'Victor']
names = names.sort()
console.log(names)

// .reduce()

// Take an array of numbers, and return the sum
numbers = [1,2,3,4,5,6]
var sum = numbers.reduce((num1, num2) => {
    console.log(num1, num2)
    return num1 + num2
})
console.log(sum)

numbers = [1,2,3,4,5,6]
var sum = numbers.reduce((num1, num2) => {
    console.log(num1, num2)
    return num1 * num2
})
console.log(sum)

/* 
 .split()
 .join()
 .slice()
 .splice()
*/

var sentence = "The quick brown fox jumped over the lazy dog"

var words = sentence.split(' ')

console.log(words)

console.log(words.join(' '))

/* 
arr1 = [1,2,2,3,1]

print(arr1[1:4]) 
*/
var arr1 = [1,2,2,3,1]
console.log(arr1.slice(1,4))

/* Splicing */
arr1.splice(1,3)
console.log(arr1)

names = ['Bryan', 'Mark', 'Dennis', 'George', 'Jessica', 'Cyrus', 'Juneun', 'Victor']
names.splice(2,0,'Christopher')
console.log(names)