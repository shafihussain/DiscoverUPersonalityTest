//---Calculating Results of Color Test---
$(document).ready(function () {
    console.log('Page & Script Loaded');
});

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var highestLetterTitle = 'Undefined';

$(document).on("click", "a[name='testThreeCompleted']", function (e) {
    evaluateLetterProfile(26, $('input[name=q26]:checked').val());
    evaluateLetterProfile(27, $('input[name=q27]:checked').val());
    evaluateLetterProfile(28, $('input[name=q28]:checked').val());
    evaluateLetterProfile(29, $('input[name=q29]:checked').val());
    evaluateLetterProfile(30, $('input[name=q30]:checked').val());
    evaluateLetterProfile(31, $('input[name=q31]:checked').val());
    evaluateLetterProfile(32, $('input[name=q32]:checked').val());
    evaluateLetterProfile(33, $('input[name=q33]:checked').val());
    evaluateLetterProfile(34, $('input[name=q34]:checked').val());
    evaluateLetterProfile(35, $('input[name=q35]:checked').val());
    evaluateLetterProfile(36, $('input[name=q36]:checked').val());
    evaluateLetterProfile(37, $('input[name=q37]:checked').val());
    evaluateLetterProfile(38, $('input[name=q38]:checked').val());
    evaluateLetterProfile(39, $('input[name=q39]:checked').val());
    evaluateLetterProfile(40, $('input[name=q40]:checked').val());
    displayLetterProfile();
});

//--Assigning the Questions to the Answers
function evaluateLetterProfile(questionNumber, value) {
    if (questionNumber >= 26 && questionNumber <= 29) A = parseInt(A) + parseInt(value);
    if (questionNumber >= 30 && questionNumber <= 33) B = parseInt(B) + parseInt(value);
    if (questionNumber >= 34 && questionNumber <= 36) C = parseInt(C) + parseInt(value);
    if (questionNumber >= 37 && questionNumber <= 40) D = parseInt(D) + parseInt(value);
}

//-- Method to determine the personality letter--
function displayLetterProfile() {
    if (A > B) highestLetterTitle = "A";
    if (A > C) highestLetterTitle = "A";
    if (A > D) highestLetterTitle = "A";
    if (B > A) highestLetterTitle = "B";
    if (B > C) highestLetterTitle = "B";
    if (B > D) highestLetterTitle = "B";
    if (C > D) highestLetterTitle = "C";
    if (C > A) highestLetterTitle = "C";
    if (C > B) highestLetterTitle = "C";
    if (D > A) highestLetterTitle = "D";
    if (D > B) highestLetterTitle = "D";
    if (D > C) highestLetterTitle = "D";
    setCookie("highestLetterResult", highestLetterTitle, 1);
}