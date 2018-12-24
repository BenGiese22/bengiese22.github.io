
function getRandomTrivia() {
    $.ajax({
        url: 'http://jservice.io/api/random',
        success: function (response) {
            if(response != null) {
                $("#question").text(response[0].question);
                $("#answer").text(response[0].answer);
                if(response[0].value != null) {
                    $("#difficulty").text("Difficulty: " + (parseInt(response[0].value)/100) + " out of 10...");
                }
                console.log(response);
            }
        }
    });
}