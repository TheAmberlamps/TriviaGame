$(document).ready(function () {

    // Variables to contain the number of correct or incorrect guesses.
    
    var n = 20;

    var right = 0;

    var wrong = 0;

    var unAnswered = 0;
    
    var counter = document.getElementById("CD");
    
    var question1 = document.getElementById("q1");
    var question2 = document.getElementById("q2");
    var question3 = document.getElementById("q3");
    var question4 = document.getElementById("q4");
    var question5 = document.getElementById("q5");
    var question6 = document.getElementById("q6");
    var question7 = document.getElementById("q7");
    var question8 = document.getElementById("q8");
    
    var stopButt = document.getElementById("stopButt");
    
    var correctAnswers = document.getElementById("correct");
    var incorrectAnswers = document.getElementById("incorrect");
    var unAnswered = document.getElementById("unSelected");
    
    function purge () {

        n = 0;
        counter.innerHTML = "";
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
        
        
        counter.innerHTML = "<h2>Time left: " + "20" + "</h2><br>";
        
        setTimeout(countDown,1000);
        
        function countDown(){
            if(n > 0){
                n--;
                setTimeout(countDown,1000);
            }
            console.log(n);
            counter.innerHTML = "<h2>Time left: " + n + "</h2><br>";
            
        }
        
            if ( n === 0){
            purge();
            console.log("purged");
            }

        // Avoid using document.write or writeln, they don't only wipe out your body but wipe out everything in the head as well.

        // So, the below works in that it first fills "this" with the first .innerHTML and logs the first consolelog, but then it replaces that content with the second innerHTML and then logs the second statement to console.

        // It looks like I'm going to have to create a series of empty divs, and then use get their individual ids on click (?) so that i can then .innerHTML various radio selections for questions.

        // Damn it, although this displays what looks like a usable form it doesn't work. You can't select the radio buttons, so it's useless. Maybe because they're tied to the onclick function, so it reprints all this on click? Make an empty var and use the click to push the text to that instead.

        // Haha, works like a charm! Now split the individual questions up for the sake of your own sanity and write another handful, then we can set about sorting the answers.

        // Ok, time to figure out how to deal with the information from these forms. I have a feeling this will be hard.

        this.innerHTML = "";

        // questing.innerHTML = 

        question1.innerHTML = "<h2>What game almost destroyed the western videogame market in the 20th century?</h2><form id='ques1' method='get'><input type='radio' name='pong'> Pong <input type='radio' name='et'> E.T. <input type='radio' name='asteroids'> Asteroids <input type='radio' name='joust'> Joust <input type='submit' value='press me bitch'><br>"

        question2.innerHTML = "<h2>What is the name of the main character in the Legend of Zelda?</h2><form id='ques2' method='get'><input type='radio' name='lonk'> Lonk <input type='radio' name='epona'> Epona <input type='radio' name='link'> Link <input type='radio' name='zelda'> Zelda </form><br>";
       
        question3.innerHTML = "<h2>In what year was the Nintendo Entertainment System released in North America?</h2><form id='ques3' method='get'><input type='radio' name='1982'> 1982 <input type='radio' name='1986'> 1986 <input type='radio' name='2000'> 2000 <input type='radio' name='1985'> 1985 </form><br>";

        question4.innerHTML = "<h2>What game made its debut in the 1989 film The Wizard?</h2><form id='ques4' method='get'><input type='radio' name='super_mario_3'> Super Mario 3 <input type='radio' name='kirbys_adventure'> Kirby's Adventure <input type='radio' name='contra'> Contra <input type='radio' name='afterburner'> Aterburner </form><br>";

        question5.innerHTML = "<h2>On what console was Streets of Rage released?</h2><form id='ques5' method='get'><input type='radio' name='genesis'> Genesis <input type='radio' name='super_nintendo'> Super Nintendo <input type='radio' name='playstation'> Playstation <input type='radio' name='3do'> 3DO </form><br>";

        question6.innerHTML = "<h2>What popular series of games is Hideo Kojima responsible for?</h2><form id='ques6' method='get'><input type='radio' name='castlevania'> Castlevania <input type='radio' name='sonic'> Sonic the Hedgehog <input type='radio' name='pokemon'> Pokemon <input type='radio' name='metal_gear'> Metal Gear </form><br>";

        question7.innerHTML = "<h2>What studio published Warcraft?</h2><form id='ques7' method='get'><input type='radio' name='bioware'> Bioware <input type='radio' name='blizzard'> Blizzard <input type='radio' name='black_isle'> Black Isle <input type='radio' name='ea'> Electronic Arts </form><br>";

        question8.innerHTML = "<h2>How much was the global videogame market worth in 2018?</h2><form id='ques8' method='get'><input type='radio' name='569m'> $569 million <input type='radio' name='799b'> $799 billion <input type='radio' name='135m'> $135 billion <input type='radio' name='61b'> $61 billion </form><br>";

        stopButt.innerHTML = "<h2>Done</h2>";

    });

    $("#stopButt").click(function(){

        console.log("Now we empty the start divs and fill the score divs.");

        // Clear the questions

        purge();

        alert("Stop");

        console.log("Stopped");

        counter.innerHTML = "";

        correctAnswers.innerHTML = "<h2>Correct: " +  + "</h2>";

        incorrectAnswers.innerHTML = "<h2>Incorrect: " +  + "</h2>";

        unAnswered.innerHTML = "<h2>Unanswered: " +  + "</h2>";

        // Then tabulate right and wrong answers, and unanswers
        
    });



});