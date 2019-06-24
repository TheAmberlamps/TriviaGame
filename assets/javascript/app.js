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
    var unTagged = document.getElementById("unSelected");
    
    function purge () {

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
        console.log("Purge function");

    }

    function submitForms(){

        // When .val is called on an empty collection, it returns "undefined".

        value1 = $('input[name=ques1]:checked', '#ques1').val();

            if(value1 === "et"){
                right++;
            }
            else if(value1 === undefined){
                unAnswered++;
            }
            else{
                wrong++;
            }

        value2 = $('input[name=ques2]:checked', '#ques2').val();

            if(value2 === "link"){
                right++;
            }
            else if(value2 === undefined){
                unAnswered++;
            }
            else{
                wrong++;
            }

        value3 = $('input[name=ques3]:checked', '#ques3').val();
        
            if(value3 === "1985"){
                right++;
            }
            else if(value3 === undefined){
                unAnswered++;
            }
            else{
                wrong++;
            }
    
        value4 = $('input[name=ques4]:checked', '#ques4').val();

            if(value4 === "mario"){
                right++;
            }
            else if(value4 === undefined){
                unAnswered++;
            }
            else{
                wrong++;
            }

        value5 = $('input[name=ques5]:checked', '#ques5').val();

            if(value5 === "genesis"){
                right++;
            }
            else if(value5 === undefined){
                unAnswered++;
            }
            else{
                wrong++;
            }

        value6 = $('input[name=ques6]:checked', '#ques6').val();

            if(value6 === "metal"){
                right++;
            }
            else if(value6 === undefined){
                unAnswered++;
            }
            else{
                wrong++;
            }

        value7 = $('input[name=ques7]:checked', '#ques7').val();
        
            if(value7 === "blizz"){
                right++;
            }
            else if(value7 === undefined){
                unAnswered++;
            }
            else{
                wrong++;
            }
        
        value8 = $('input[name=ques8]:checked', '#ques8').val();

            if(value8 === "135"){
                right++;
            }
            else if(value8 === undefined){
                unAnswered++;
            }
            else{
                wrong++;
            }

    }
    
    // Now an .on click event to clear away the starting button and display the questions, "the done" button and start the timer.
    
    $("#startButt").click(function(){
        
        
        counter.innerHTML = "<h2>Time left: " + "20" + "</h2><br>";
        
        setTimeout(countDown,1000);
        
        function countDown(){
            if(n > 0){
                n--;
                setTimeout(countDown,1000);
            
                console.log(n);
                counter.innerHTML = "<h2>Time left: " + n + "</h2><br>";
            }
            if(n === 0){
                
                submitForms();

                n = -1;
                
                purge();

                correctAnswers.innerHTML = "<h2>Correct: " + right + "</h2>";

                incorrectAnswers.innerHTML = "<h2>Incorrect: " + wrong + "</h2>";
        
                unTagged.innerHTML = "<h2>Unanswered: " + unAnswered + "</h2>";
            }
            };
        
            // if ( n === 0){
            // purge();
            // console.log("purged");
            // }

            
        // Ok, time to figure out how to deal with the information from these forms. I have a feeling this will be hard.


        this.innerHTML = "";

        question1.innerHTML = "<h2>What game almost destroyed the western videogame market in the 20th century?</h2><form id='ques1' method='get'><input type='radio' name='ques1' value='pong'> Pong <input type='radio' name='ques1' value='et'> E.T. <input type='radio' name='ques1' value='asteroids'> Asteroids <input type='radio' name='ques1' value='joust'> Joust </form><br>"

        question2.innerHTML = "<h2>What is the name of the main character in the Legend of Zelda?</h2><form id='ques2' method='get'><input type='radio' name='ques2' value='lonk'> Lonk <input type='radio' name='ques2' value='epona'> Epona <input type='radio' name='ques2' value='link'> Link <input type='radio' name='ques2' value='zelda'> Zelda </form><br>";
       
        question3.innerHTML = "<h2>In what year was the Nintendo Entertainment System released in North America?</h2><form id='ques3' method='get'><input type='radio' name='ques3' value='1982'> 1982 <input type='radio' name='ques3' value='1986'> 1986 <input type='radio' name='ques3' value='2000'> 2000 <input type='radio' name='ques3' value='1985'> 1985 </form><br>";

        question4.innerHTML = "<h2>What game made its debut in the 1989 film The Wizard?</h2><form id='ques4' method='get'><input type='radio' name='ques4' value='mario'> Super Mario 3 <input type='radio' name='ques4' value='kirby'> Kirby's Adventure <input type='radio' name='ques4' value='contra'> Contra <input type='radio' name='ques4' value='afterburner'> Aterburner </form><br>";

        question5.innerHTML = "<h2>On what console was Streets of Rage released?</h2><form id='ques5' method='get'><input type='radio' name='ques5' value='genesis'> Genesis <input type='radio' name='ques5' value='snes'> Super Nintendo <input type='radio' name='ques5' value='ps'> Playstation <input type='radio' name='ques5' value='3do'> 3DO </form><br>";

        question6.innerHTML = "<h2>What popular series of games is Hideo Kojima responsible for?</h2><form id='ques6' method='get'><input type='radio' name='ques6' value='castle'> Castlevania <input type='radio' name='ques6' value='sonic'> Sonic the Hedgehog <input type='radio' name='ques6' value='pokemon'> Pokemon <input type='radio' name='ques6' value='metal'> Metal Gear </form><br>";

        question7.innerHTML = "<h2>What studio published Warcraft?</h2><form id='ques7' method='get'><input type='radio' name='ques7' value='bioware'> Bioware <input type='radio' name='ques7' value='blizz'> Blizzard <input type='radio' name='ques7' value='black'> Black Isle <input type='radio' name='ques7' value='ea'> Electronic Arts </form><br>";

        question8.innerHTML = "<h2>How much was the global videogame market worth in 2018?</h2><form id='ques8' method='get'><input type='radio' name='ques8' value='569'> $569 million <input type='radio' name='ques8' value='799'> $799 billion <input type='radio' name='ques8' value='135'> $135 billion <input type='radio' name='ques8' value='61'> $61 billion </form><br>";

        stopButt.innerHTML = "<h2>Done</h2>";

    });

    $("#stopButt").click(function(){

        // Run a function that tabulates right and wrong answers

        submitForms();
        
        alert("Stop");

        // Then purge the empty divs and display the number of right and wrong guesses
        
        n = -1;
        
        purge();

        correctAnswers.innerHTML = "<h2>Correct: " + right + "</h2>";

        incorrectAnswers.innerHTML = "<h2>Incorrect: " + wrong + "</h2>";

        unTagged.innerHTML = "<h2>Unanswered: " + unAnswered + "</h2>";

                
    });



});