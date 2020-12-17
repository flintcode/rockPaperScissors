
    let playerScore = 0;
    let computerScore = 0;
    const CHOICES = ["rock","paper","scissors"];

    const rockButton = document.querySelector('#rockButton');
    const paperButton = document.querySelector("#paperButton");
    const scissorsButton = document.querySelector('#scissorsButton');
    const buttons = document.querySelector('buttons');
    const restartButton = document.querySelector("#restartButton");



    function disable(){
        if (playerScore == 5 || computerScore == 5){
            rockButton.removeEventListener('click',rockChoices);  
            paperButton.removeEventListener('click', paperChoices);
            scissorsButton.removeEventListener('click',scissorsChoices);
        }
    }
    const reloadPage =() => window.location.reload(true)
        restartButton.addEventListener('click',reloadPage);

        const displayText = document.createElement('div');
            displayText.classList.add('displayText');
            textContainer.appendChild(displayText);


        rockButton.addEventListener('click',rockChoices);
        function rockChoices(){
            const playerSelection = 'rock';
            const randomChoice = CHOICES[Math.floor(Math.random()* CHOICES.length)];

        function computerPlay(){
            return randomChoice;
        }    
            const computerSelection = computerPlay();

                if (computerSelection == 'scissors'){
                    displayText.textContent = "Fantastic! Rock destroys scissors!";
                    ++playerScore;
                 }
                else if (computerSelection == "paper"){
                    displayText.textContent = "You lost! Paper covers rock!";
                    ++computerScore;
                }
                else {
                    displayText.textContent = "Tie game!";
                }

                if (computerScore == 5 ){
                    displayText.textContent = "You have lost in the race against the machine! press 'Play again!' to beat it!";
                }
                if (playerScore == 5){
                    displayText.textContent = "Amazing! You have won the race against the machine!";
                }
                document.getElementById('scoreBoard').innerHTML = "Player Score =  " + playerScore +   "    ||   Computer Score =  " + computerScore;
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
                        displayText.textContent = "Good job! Paper beats rock! ";
                        ++playerScore;
                    }
                    else if (computerSelection == "scissors"){
                        displayText.textContent ="The machine takes the round! Scissors beats paper!";
                        ++computerScore;
                    }
                    else{
                        displayText.textContent = "Stalemate!";
                    }
                    if (computerScore == 5 ){
                        displayText.textContent = "You have lost in the race against the machine! press 'Play again!' to beat it!";
                    }
                    if (playerScore == 5){
                        displayText.textContent = "Amazing! You have won the race against the machine! "
                    }
                    document.getElementById('scoreBoard').innerHTML = "Player Score =  " + playerScore +   "    ||   Computer Score =  " + computerScore;
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
                        displayText.textContent = "You won! Scissors cuts paper!";
                        ++playerScore;
                    }
                    else if (computerSelection == "rock"){
                        displayText.textContent = "The machine wins! Rock destroys scissors!";
                        ++computerScore;
                    }
                    else{
                        displayText.textContent = "Draw!";
                    }
                    if (computerScore == 5 ){
                        displayText.textContent = "You have lost in the race against the machine! press 'Play again!' to beat it!";
                    }
                    if (playerScore == 5){
                        displayText.textContent = "Amazing! You have won the race against the machine! "
                    }
                    document.getElementById('scoreBoard').innerHTML = "Player Score =  " + playerScore +   "    ||   Computer Score =  " + computerScore;
                    disable()
                } 
                 



                  
            
