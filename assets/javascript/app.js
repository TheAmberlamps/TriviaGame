$(document).ready(function () {

    // Variables to contain the number of correct or incorrect guesses.

    var correctAnswers = 0;
    var incorrectAnswers = 0;

    // Now an .on click event to clear away the starting button and display the questions, "the done" button and start the timer.
    
    $("#startButt").on("click", function () {

        // Avoid using document.write or writeln, they don't only wipe out your body but wipe out everything in the head as well.

        // document.writeln("<h1>Videogame Trivia</h1><div id='startButt'><h2>Start</h2></div>");

        // document.write("<h1>Videogame Trivia</h1><div id='startButt'><h2>Start</h2></div>");

        // --------------------------------------

        // However, the line below works like a charm.

        this.innerHTML = "<h2>Hello World!</h2>";

        console.log("here we go");

        for (i=0; i < 101; i++){
            console.log(i, "har-d-har-har");
        };

    });



});