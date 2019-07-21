# TriviaGame
A "simple" trivia game.

I had a lot of fun with this project. The goal was to create a dynamically generated trivia game with a timer. I chose to base my trivia on video games, so that I would finally have a chance to use all my useless knowledge. I feel that it's my best looking work to date as well, thanks to google fonts and a snappy background.

Upon clicking the start button, the player is presented with a number of multiple-choice trivia questions that must be answered within the alloted time. Upon answering all the questions (or running out of time) the trivia questions are removed and the player is shown how many answers were correct, how many were incorrect, and how many were unanswered.

So when the start button is pressed, a series of forms are created in empty divs. I spent a lot of time bumbling around with forms because I'd not been exposed to them before... the forms themselves weren't the problem, it was that I had this idea stuck in my head that I /had/ to use the submit function in order to get form info, which is absolutely not true.

I wrote individual if/else statements to handle the individual answers, which while functional, is far from DRY. I plan on DRYing my logic out at a later date because nearly half of my code is dedicated to handling the forms. Once the game is over, the divs are emptied and the correct/incorrect/unanswered values are displayed.

Now that I'm thinking about it, I'd like to write situational messages that would be displayed depending on how many correct answers the player gets, or how many questions remain unanswered. Something to consider when I rework my logic.