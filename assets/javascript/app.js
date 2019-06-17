$(document).ready(function () {

    // Variables to contain the number of correct or incorrect guesses.

    var correctAnswers = 0;
    var incorrectAnswers = 0;

    var testPrint = document.getElementById("test");

    // Now an .on click event to clear away the starting button and display the questions, "the done" button and start the timer.
    
    $("#startButt").click(function(){

        // Avoid using document.write or writeln, they don't only wipe out your body but wipe out everything in the head as well.

        // document.writeln("<h1>Videogame Trivia</h1><div id='startButt'><h2>Start</h2></div>");

        // document.write("<h1>Videogame Trivia</h1><div id='startButt'><h2>Start</h2></div>");

        // --------------------------------------

        // So, the below works in that it first fills "this" with the first .innerHTML and logs the first consolelog, but then it replaces that content with the second innerHTML and then logs the second statement to console.

        // It looks like I'm going to have to create a series of empty divs, and then use get their individual ids on click (?) so that i can then .innerHTML various radio selections for questions.

        // Damn it, although this displays what looks like a usable form it doesn't work. You can't select the radio buttons, so it's useless. Maybe because they're tied to the onclick function, so it reprints all this on click? Make an empty var and use the click to push the text to that instead.

        // Haha, works like a charm! Now split the individual questions up for the sake of your own sanity and write another handful, then we can set about sorting the answers.

        testPrint.innerHTML = "<h2>What is the name of the main character in the Legend of Zelda?</h2><form id='ques1' action=''><input type='radio' name='gender' value='guess1'> Lonk <input type='radio' name='gender' value='guess2'> Epona <input type='radio' name='gender' value='guess3'> Link <input type='radio' name='gender' value='guess4'> Zelda </form><br><h2>What game almost destroyed the western videogame market in the 20th century?</h2><form id='ques2' action=''><input type='radio' name='gender' value='guess1'> Pong <input type='radio' name='gender' value='guess2'> E.T. <input type='radio' name='gender' value='guess3'> Asteroids <input type='radio' name='gender' value='guess4'> Joust </form>";
       
        console.log("here we go");

        // temporary comment-out for testing

        // this.innerHTML = "<h2>Hello Again World!</h2><form id='ques2' action=''><input type='radio' name='gender' value='guess1'> Guess 1<input type='radio' name='gender' value='guess2'> Guess 2<input type='radio' name='gender' value='guess3'> Guess 3<input type='radio' name='gender' value='guess4'> Guess 4</form>";

        console.log("here we go again");

        // Just a fiddle. Speaking of which I should make a dedicated fiddle project to experiment with, but that's for another time.

        // for (i=0; i < 101; i++){
        //     console.log(i, "har-d-har-har");
        // };

        // Last step for the Start button is to create a Done button.

    });



});