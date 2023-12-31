
const adviceID = $('#adviceId');
const adviceText = $('#adviceText');
const dice = $('.dice-circle');

dice.click(function (e) {

    fetch('https://api.adviceslip.com/advice')
    .then(function(response) {
        return response.json(); 
    })
    .then(function(jsonData) {
        adviceText.text(jsonData.slip.advice);
        adviceID.text(' #' + jsonData.slip.id);
    })
    .catch(function(error) {
        console.error('Error fetching advice:', error);
    });

});