

// // Understand -
//      Create a rock paper scissors game that plays to 5 rounds and exits. It will keep score throughout and give winner at the end. where computer has random selection, and user inputs an answer.
// Plan - 
//      get prompt from user for choice, use console.log() to display results -->

//      // Algorithim  
//      // write a function taking parameters playerSelection and computerSelection then declares winner with a string
//      // write conditionals for choices of playerSelection vs computerSelection
//      // if  a player win condition, then alert a +1 increase in the playerScore and vice versa for computer
 
    let playerScore = 0;
    let computerScore = 0;
    const CHOICES = ["rock","paper","scissors"];

    const rockButton = document.querySelector('#rockButton');
    const paperButton = document.querySelector("#paperButton");
    const scissorsButton = document.querySelector('#scissorsButton');
    const buttons = document.querySelector('buttons');
    const restartButton = document.querySelector("#restartButton");


    // // disable buttons
    function disable(){
        if (playerScore == 5 || computerScore == 5){
            rockButton.removeEventListener('click',rockChoices);  
            paperButton.removeEventListener('click', paperChoices);
            scissorsButton.removeEventListener('click',scissorsChoices);
        }
    }
    // reload for try again
    const reloadPage =() => window.location.reload(true)
    restartButton.addEventListener('click',reloadPage);
   
    // creating elements and appending to container for text content 

       const displayText = document.createElement('div');
       displayText.classList.add('displayText');
       textContainer.appendChild(displayText);
   
        const tieGame = document.createElement("div");
        tieGame.classList.add("tieGame");
        textContainer.appendChild(tieGame);


    function playRoundText(){

        if (playerScore == 1){
            displayText.textContent = "Fantastic! Rock destroys scissors!";
        }
        if (computerScore == 1){
            displayText.textContent = "oh no! Paper beats rock, try again!"
        }
        
        if (playerScore == 2){
            displayText.textContent = "nice job! Rock destroys scissors!";
        }
        if (computerScore == 2){
            displayText.textContent = "the machines take the round!"
        }
        if (playerScore == 3){
            displayText.textContent = "You are one step closer to beating the machine!";
        }

        if (computerScore ==3){
            displayText.textContent = "The machine has taken the round! Paper beats rock, try again!"
        }
        if (playerScore == 4){
            displayText.textContent = "The machines has fallen again this round! Rock beats paper!";
        }

        if (computerScore ==4){
            displayText.textContent = "The machine is getting closer to the victory! Paper beats rock, try again!"
        }
        if (playerScore == 5){
            displayText.textContent = "You win the final race against the machine!";
        }
        if (computerScore == 5){
            displayText.textContent = "GAME OVER! The race against the machine has been lost! Press restart to play again!"
        }
    }

    // // rock tie game text

    
    // if (computerSelection === 'rock'){
    //     tieGame.textContent = "Tiegame!"
    // }
    //  // scissors tie game text

    //  if (computerSelection === 'scissors'){
    //     tieGame.textContent = "Tiegame!"
    // }
    //  // paper tie game text

    //  if (computerSelection === 'paper'){
    //     tieGame.textContent = "Tiegame!"
    // }

     // paper rounds text
    // function playPaperRounds(){

    //     if (playerScore == 1){
    //         paperText.textContent = "Wow, great win! Paper covers rock!";
    //     }

    //     if (computerScore == 1){
    //         paperText.textContent = "oh no! scissors cuts paper, try again!"
    //     }
        
    //     if (playerScore == 2){
    //         paperText.textContent = "Nice job! Paper covers rock!";
    //     }

    //     if (computerScore == 2){
    //         paperText.textContent = "oh no! scissors cuts paper, try again!"
    //     }
    //     if (playerScore == 3){
    //         paperText.textContent = "You are one step closer to beating the machine!";
    //     }

    //     if (computerScore ==3){
    //         paperText.textContent = "The machine has taken the round! Scissors cuts paper, try again!"
    //     }
    //     if (playerScore == 4){
    //         paperText.textContent = "The machines has fallen again this round! paper beats rock!";
    //     }
    //     if (computerScore ==4){
    //         paperText.textContent = "The machine is getting closer to the victory! scissors beats paper, try again!"
    //     }
    //     if (playerScore == 5){
    //         paperText.textContent = "You win the race against the machine!";
    //     }
    //     if (computerScore ==5){
    //         paperText.textContent = "GAME OVER! The race against the machine has been lost!"

    //     if (playerScore == 2 || computerScore ==2){
    //         tieGame.textContent = "Tiegame!"
    //     }
    //   }
    // }
    //     // scissor round text
    //     function playScissorsRounds(){

    //         if (playerScore == 1){
    //             scissorsBeats.textContent = "Fantastic! Scissors cuts paper!";
    //         }
    //         if (computerScore == 1){
    //             scissorsLoses.textContent = "Oh no! rock destroys scissors, try again!"
    //         }
    //         if (playerScore == 2){
    //             scissorsBeats.textContent = "nice job! Scissors cuts paper!";
    //         }
    //         if (computerScore == 2){
    //             scissorsLoses.textContent = "Oh no! rock destroys scissors, try again!"
    //         }
    //         if (playerScore == 3){
    //             scissorsBeats.textContent = "You are one step closer to beating the machine!";
    //         }
    //         if (computerScore ==3){
    //             scissorsLoses.textContent = "The machine has taken the round! rock beats paper, try again!"
    //         }
    //         if (playerScore == 4){
    //             scissorsBeats.textContent = "The machines has fallen again this round! Scissors beats paper!";
    //         }
    //         if (computerScore ==4){
    //             scissorsLoses.textContent = "The machine is getting closer to the victory! rock beats scissors, try again!"
    //         }
    //         if (playerScore == 5){
    //             scissorsBeats.textContent = "You win the race against the machine!";
    //         }
    //         if (computerScore ==5){
    //             scissorsLoses.textContent = "GAME OVER! The race against the machine has been lost!"
    //         }
    //     }
   
        rockButton.addEventListener('click',rockChoices);

        function rockChoices(){
            const playerSelection = 'rock';
            const randomChoice = CHOICES[Math.floor(Math.random()* CHOICES.length)];

        function computerPlay(){
            return randomChoice;
        }    
            const computerSelection = computerPlay();

                if (computerSelection == 'scissors'){
                    ++playerScore;
                 }
                else if (computerSelection == "paper"){
                    ++computerScore;
                }
                else {
                    tieGame.textContent = "Tie game!";
                }
                document.getElementById('scoreBoard').innerHTML = "Player Score =  " + playerScore +   "    ||   Computer Score =  " + computerScore;
           
                playRoundText()
                disable()
            }
        
        paperButton.addEventListener('click',paperChoices);  

        function paperChoices(){
            const playerSelection = 'paper';
            const randomChoice = CHOICES[Math.floor(Math.random()* CHOICES.length)];
             function computerPlay(){
                return randomChoice;
            }    

            const computerSelection = computerPlay();
                    if (computerSelection == 'rock'){
                        ++playerScore;
                    }
                    else if (computerSelection == "scissors"){
                        ++computerScore;
                    }
                    else{
                        tieGame.textContent = "Tie game!";
                    }
                    document.getElementById('scoreBoard').innerHTML = "Player Score =  " + playerScore +   "    ||   Computer Score =  " + computerScore;
                   
                    playRoundText()
                    disable()
                }

        
        scissorsButton.addEventListener('click',scissorsChoices)

        function scissorsChoices(){      
            const playerSelection = 'scissors';
            const randomChoice = CHOICES[Math.floor(Math.random()* CHOICES.length)];
            function computerPlay(){
                return randomChoice;
            }    
        const computerSelection = computerPlay();  
                    if (computerSelection == 'paper'){
                        ++playerScore;
                    }

                    else if (computerSelection == "rock"){
                        ++computerScore;
                    }
                    else{
                        tieGame.textContent = "Tie game!";
                    }
                    document.getElementById('scoreBoard').innerHTML = "Player Score =  " + playerScore +   "    ||   Computer Score =  " + computerScore;
                    playRoundText()
                    disable()
                   
                } 
                 



                  
                
             
     /* write new function called game() that uses previous function (playRound) inside parameter and loops it for 5 rounds   */
        // function game(){ 

        //     for (i = 0; i <= 5; i++){
        //         alert (playRound([i]));
        //     }
        //         if (playerScore > computerScore){
        //         alert (' You beat the machine! Fantastic job!')
        //         }
        //         else if (playerScore == computerScore){
        //          alert('Stalemate!')
        //         }
        //         else {
        //         alert ('Oh no, the machines are taking over!')
        //         }
        // }
            

