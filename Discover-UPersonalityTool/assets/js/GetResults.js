function personType(abbrevation, description) {
    this.abb = abbrevation;
    this.desc = description;
}

var allPersonType = [
      new personType('E', 'Extrovert ')
    , new personType('I', 'Introvert ')
    , new personType('S', 'Sensing')
    , new personType('N', 'Intuitive')
    , new personType('T', 'Thinker')
    , new personType('F', 'Feeler')
    , new personType('J', 'Judger')
    , new personType('P', 'Perciever')];

function getPersonType(abbreviation) {
    for (var i = 0; i < allPersonType.length; i++) {
        if (allPersonType[i].abb == abbreviation) return allPersonType[i].desc;
    }
}

$(document).ready(function (e) {
    console.log('results page loaded')
    var briggsAbbreviation = getCookie("briggsMyers");
    var arr = briggsAbbreviation.split(' ');
    var fullDescription = '';
    for (var i = 0; i < arr.length; i++) {
        var partialDescription = getPersonType(arr[i]);
        fullDescription += ' ' + partialDescription;
    }
    $('#resultOne').text(getCookie("personalityResult"));
    $('#resultTwo').text(briggsAbbreviation);
    $('#resultTwoDesc').text(fullDescription);
    $('#resultThree').text(getCookie("highestLetterResult"));
});
