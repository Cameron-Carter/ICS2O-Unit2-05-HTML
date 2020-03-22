// JavaScript File
// let statements for variables
let squareLength;
let squareArea;
// function to load background color
function backgroundColour() {
    window.getElementById('body').className="body";
}
// function to square the inputted length, and then alert the area
function findArea() {
    squareLength = document.getElementById('numberinput').value;
    squareArea = squareLength*squareLength;
    alert("The area of the square is " + squareArea);
}
// event listener to change background color when the page loads
document.addEventListener('load', backgroundColour);
// event listener to start findArea function when a double click occurs
document.addEventListener('dblclick', findArea);
