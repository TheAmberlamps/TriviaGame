$(document).ready(function () {

    // Variables to contain the number of correct or incorrect guesses.

    var correctAnswers = 0;
    var incorrectAnswers = 0;

    var counter = document.getElementById("CD");

    var questing = document.getElementById("quests");

    var question1 = document.getElementById("q1");
    var question2 = document.getElementById("q2");
    var question3 = document.getElementById("q3");
    var question4 = document.getElementById("q4");
    var question5 = document.getElementById("q5");
    var question6 = document.getElementById("q6");
    var question7 = document.getElementById("q7");
    var question8 = document.getElementById("q8");

    var stopButt = document.getElementById("stopButt");

    function purge () {
        
        question1.innerHTML = "";
        question2.innerHTML = "";
        question3.innerHTML = "";
        question4.innerHTML = "";
        question5.innerHTML = "";
        question6.innerHTML = "";
        question7.innerHTML = "";
        question8.innerHTML = "";       
        stopButt.innerHTML = "";
        console.log("Purge");

    }

    // Now an .on click event to clear away the starting button and display the questions, "the done" button and start the timer.
    
    $("#startButt").click(function(){

        // Whatever questions are or aren't answered are sorted out if you don't click on the done button and the time runs out.

        // setTimeout(purge, 1000 *10);
        counter.innerHTML = "<h2>Time left: " + "20" + "</h2><br>";

        var n = 20;
        setTimeout(countDown,1000);

        function countDown(){
        n--;
        if(n > 0){
            setTimeout(countDown,1000);
        }
        console.log(n);
        counter.innerHTML = "<h2>Time left: " + n + "</h2><br>";
        
        }

        // Avoid using document.write or writeln, they don't only wipe out your body but wipe out everything in the head as well.

        // So, the below works in that it first fills "this" with the first .innerHTML and logs the first consolelog, but then it replaces that content with the second innerHTML and then logs the second statement to console.

        // It looks like I'm going to have to create a series of empty divs, and then use get their individual ids on click (?) so that i can then .innerHTML various radio selections for questions.

        // Damn it, although this displays what looks like a usable form it doesn't work. You can't select the radio buttons, so it's useless. Maybe because they're tied to the onclick function, so it reprints all this on click? Make an empty var and use the click to push the text to that instead.

        // Haha, works like a charm! Now split the individual questions up for the sake of your own sanity and write another handful, then we can set about sorting the answers.

        // Ok, time to figure out how to deal with the information from these forms. I have a feeling this will be hard.

        this.innerHTML = "";

        questing.innerHTML = 

        question1.innerHTML = "<h2>What game almost destroyed the western videogame market in the 20th century?</h2><form id='ques1' action='' method='get'><input type='radio' name='gender' value='guess1'> Pong <input type='radio' name='gender'> E.T. <input type='radio' name='gender'> Asteroids <input type='radio' name='gender'> Joust </form><br>"

        question2.innerHTML = "<h2>What is the name of the main character in the Legend of Zelda?</h2><form id='ques2' action='' method='get'><input type='radio' name='gender'> Lonk <input type='radio' name='gender'> Epona <input type='radio' name='gender'> Link <input type='radio' name='gender'> Zelda </form><br>";
       
        question3.innerHTML = "<h2>In what year was the Nintendo Entertainment System released in North America?</h2><form id='ques3' method='get' action=''><input type='radio' name='gender'> 1982 <input type='radio' name='gender'> 1986 <input type='radio' name='gender'> 2000 <input type='radio' name='gender'> 1985 </form><br>";

        question4.innerHTML = "<h2>What game made its debut in the 1989 film The Wizard?</h2><form id='ques4' action='' method='get'><input type='radio' name='gender'> Super Mario 3 <input type='radio' name='gender'> Kirby's Adventure <input type='radio' name='gender'> Contra <input type='radio' name='gender'> Aterburner </form><br>";

        question5.innerHTML = "<h2>On what console was Streets of Rage released?</h2><form id='ques5' action='' method='get'><input type='radio' name='gender'> Genesis <input type='radio' name='gender'> Super Nintendo <input type='radio' name='gender'> Playstation <input type='radio' name='gender'> 3DO </form><br>";

        question6.innerHTML = "<h2>What popular series of games is Hideo Kojima responsible for?</h2><form id='' action='' method='get'><input type='radio' name='gender'> Castlevania <input type='radio' name='gender'> Sonic the Hedgehog <input type='radio' name='gender'> Pokemon <input type='radio' name='gender'> Metal Gear </form><br>";

        question7.innerHTML = "<h2>What studio published Warcraft?</h2><form id='' action='' method='get'><input type='radio' name='gender'> Bioware <input type='radio' name='gender'> Blizzard <input type='radio' name='gender'> Black Isle <input type='radio' name='gender'> Electronic Arts </form><br>";

        question8.innerHTML = "<h2>How much was the global videogame market worth in 2018?</h2><form id='' action='' method='get'><input type='radio' name='gender'> $569 million <input type='radio' name='gender'> $799 billion <input type='radio' name='gender'> $135 billion <input type='radio' name='gender'> $61 billion </form><br>";

        stopButt.innerHTML = "<h2>Done</h2>"

    });

    $("#stopButt").click(function(){

        console.log("Now we empty the start divs and fill the score divs.");

        clearTimeout(purge);

        alert("Stop");

        // Clear the questions

        question1.innerHTML = "";
        question2.innerHTML = "";
        question3.innerHTML = "";
        question4.innerHTML = "";
        question5.innerHTML = "";
        question6.innerHTML = "";
        question7.innerHTML = "";
        question8.innerHTML = "";       
        stopButt.innerHTML = "";
        console.log("Stopped");

        // Then tabulate right and wrong answers, and unanswers
        
    });



});