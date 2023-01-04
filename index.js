




//alert(PlayerSelection);

function getComputerChoice(){
    let choice= Math.floor(Math.random()*3)+1;
    //console.log(choice);
    let strchoice=undefined;
    switch(choice){
     case 1:
          strchoice='ROCK';
         break;
    
    case 2:
          strchoice='PAPER';
         break;
     case 3:
          strchoice='SCISSORS';
         break;
    }
    return strchoice;
 }
 
 let compchoice=getComputerChoice();
 
 
 
 function round(PlayerSelection, ComputerSelection){
     
     if(PlayerSelection=='SCISSORS' && ComputerSelection=='PAPER'){
         return "Player Wins!";
     }
     else if (PlayerSelection=='ROCK'&& ComputerSelection=='SCISSORS' ){
         return "Player Wins!";
     }
     else if (PlayerSelection=='Paper'&& ComputerSelection=='ROCK' ){
         return "Player Wins!";
     }
     else if(PlayerSelection==ComputerSelection){
         return "Its a tie";//instead of a tie maybe force the function to be called again?
     }
     else{
         return "Player loses! "+ "Computer's choice was: "+ compchoice;
     }
     
 }
 for(let i=0;i<5;i++){
     let PlayerSelection=(prompt("Choose Rock,Paper,Scissors"));
 PlayerSelection= PlayerSelection.toUpperCase();
     compchoice=getComputerChoice();
     console.log(round(PlayerSelection,compchoice));
 }
 
  
 
 //console.log(round(PlayerSelection,compchoice));
 