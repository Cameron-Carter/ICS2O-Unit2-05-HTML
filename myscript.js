// JavaScript File
// let statements for variables
let squareLength = document.getElementById("numberinput").value;
let squareArea = squareLength*squareLength;
// function to square the inputted length, and then alert the area
function findArea() {
    alert("The area of the square is " + squareArea);
}
document.getElementById("mybutton").addEventListener("click", findArea);