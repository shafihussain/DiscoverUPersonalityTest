//---Calculating Results of Color Test---
$(document).ready(function () {
    console.log('Page & Script Loaded');
});

var highestColorTitle;
var brown = 0;
var green = 0;
var blue = 0;
var red = 0;
$(document).on("click", "a[name='testOneComplete']", function (e) {
    evaluateColorProfile(1, $('input[name=q1]:checked').val());
    evaluateColorProfile(2, $('input[name=q2]:checked').val());
    evaluateColorProfile(3, $('input[name=q3]:checked').val());
    evaluateColorProfile(4, $('input[name=q4]:checked').val());
    evaluateColorProfile(5, $('input[name=q5]:checked').val());
    evaluateColorProfile(6, $('input[name=q6]:checked').val());
    evaluateColorProfile(7, $('input[name=q7]:checked').val());
    evaluateColorProfile(8, $('input[name=q8]:checked').val());
    evaluateColorProfile(9, $('input[name=q9]:checked').val());
    evaluateColorProfile(10, $('input[name=q10]:checked').val());
    evaluateColorProfile(11, $('input[name=q11]:checked').val());
    evaluateColorProfile(12, $('input[name=q12]:checked').val());
    displayColorProfile();
});
//--Assigning the Questions to the Answers
function evaluateColorProfile(questionNumber, value) {
    if (questionNumber >= 1 && questionNumber <= 3) brown = parseInt(brown) + parseInt(value);
    if (questionNumber >= 4 && questionNumber <= 6) green = parseInt(green) + parseInt(value);
    if (questionNumber >= 7 && questionNumber <= 9) blue = parseInt(blue) + parseInt(value);
    if (questionNumber >= 10 && questionNumber <= 12) red = parseInt(red) + parseInt(value);
}
//-- Method to determine the winning color--
function displayColorProfile() {
    if (green > brown) highestColorTitle = "Green";
    if (blue > brown) highestColorTitle = "Blue";
    if (red > brown) highestColorTitle = "Red";
    if (brown > green) highestColorTitle = "Brown";
    if (blue > green) highestColorTitle = "Blue";
    if (red > green) highestColorTitle = "Red";
    if (brown > blue) highestColorTitle = "Brown";
    if (green > blue) highestColorTitle = "Green";
    if (red > blue) highestColorTitle = "Red";
    if (brown > red) highestColorTitle = "Brown";
    if (green > red) highestColorTitle = "Green";
    if (blue > red) highestColorTitle = "Blue";
    setCookie("personalityResult", highestColorTitle, 1);
}
