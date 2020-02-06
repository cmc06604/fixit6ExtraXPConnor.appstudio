let myNumbers =  [34, 56, 117, 324, 183, 231, 72, 111, -10, 207]

const numSum = myNumbers.reduce((a,b) => a + b, 0)
const numAvg = myNumbers.reduce((a,b) => a + b, 0) / myNumbers.length

let response = prompt("Would like you like the Sum or the Average")
switch(true) {
  case (response === "Sum") :
  alert("The sum of the numbers is: " + numSum)
  break
  case (response === "Average") : 
  alert("The Average of the numbers is " + numAvg)
  break
  default:
  alert("You did not enter in the correct Format") 
}

let num1 = parseInt(prompt("Enter the first number you want to add"))
let num2 = parseInt(prompt("Enter the second number you want to add"))
let num3 = parseInt(prompt("Enter the third number you want to add"))

myNumbers.push(num1)
myNumbers.push(num2)
myNumbers.push(num3)

console.log(myNumbers)

last_element = myNumbers.pop(); 
console.log(myNumbers);            
console.log(last_element);