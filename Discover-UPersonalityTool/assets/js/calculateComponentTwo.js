$(document).ready(function (e) {
    console.log('Page two loaded & script two loaded');
});
var extrovertLevel = 0;
var sensitivityLevel = 0;
var natureLevel = 0;
var tacticLevel = 0;
var briggsMyersResult = 0;
var socialType;
var senseType;
var natureType;
var tacticType;
$(document).on("click", "a[name='testTwoComplete']", function (e) {
    console.log('Click method executing');
    evaluateBMProfile(14, $('input[name=q14]:checked').val());
    evaluateBMProfile(15, $('input[name=q15]:checked').val());
    evaluateBMProfile(16, $('input[name=q16]:checked').val());
    evaluateBMProfile(17, $('input[name=q17]:checked').val());
    evaluateBMProfile(18, $('input[name=q18]:checked').val());
    evaluateBMProfile(19, $('input[name=q19]:checked').val());
    evaluateBMProfile(20, $('input[name=q20]:checked').val());
    evaluateBMProfile(21, $('input[name=q21]:checked').val());
    evaluateBMProfile(22, $('input[name=q22]:checked').val());
    evaluateBMProfile(23, $('input[name=q23]:checked').val());
    evaluateBMProfile(24, $('input[name=q24]:checked').val());
    evaluateBMProfile(25, $('input[name=q25]:checked').val());
    displayBMProfile();
});
//--Assigning the Questions to the Answers
function evaluateBMProfile(questionNumber, value) {
    console.log('Populating Types');
    if (questionNumber >= 14 && questionNumber <= 16) extrovertLevel = parseInt(extrovertLevel) + parseInt(value);
    if (questionNumber >= 17 && questionNumber <= 19) sensitivityLevel = parseInt(sensitivityLevel) + parseInt(value);
    if (questionNumber >= 20 && questionNumber <= 22) natureLevel = parseInt(natureLevel) + parseInt(value);
    if (questionNumber >= 23 && questionNumber <= 25) tacticLevel = parseInt(tacticLevel) + parseInt(value);
    console.log('Updated Stats: ' + extrovertLevel + ',' + sensitivityLevel + ',' + natureLevel + ',' + tacticLevel);
}
//-- Method to determine the winning color--
function displayBMProfile() {
    if (extrovertLevel > 0) socialType = 'E';
    else if (extrovertLevel < 0) socialType = 'I';
    else(socialType = 'Ambivert')
    if (sensitivityLevel > 0) senseType = 'S';
    else if (sensitivityLevel < 0) senseType = 'N';
    else(senseType = 'Neutral')
    if (natureLevel > 0) natureType = 'T';
    else if (natureLevel < 0) natureType = 'F';
    else(natureType = 'Neutral')
    if (tacticLevel > 0) tacticType = 'J';
    else if (tacticLevel < 0) tacticType = 'P';
    else(tacticType = 'Neutral')
    briggsMyersResult = socialType + " " + senseType + " " + natureType + " " + tacticType;
    console.log('Extrovert v Introvert : ' + socialType);
    console.log('Sensing v Intuitive : ' + senseType);
    console.log('Thinker v Feeler : ' + natureType);
    console.log('Judger v Perciever : ' + tacticType);
    setCookie("briggsMyers", briggsMyersResult, 1);
}
