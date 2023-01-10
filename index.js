//this program asks you ahead of resolution for your choices.
//can be improved by having this removed.
//can also be improved by having tie replaced with a replay until the tie is broken.

var playertext=document.getElementById('player');
var comptext=document.getElementById('computer');
var resulttext=document.getElementById('result')
var buttons=document.querySelectorAll('.inner-button');
var computer;
var player;
var result;

//!!

buttons.forEach(button=>button.addEventListener("click", () => {
    player = (button.textContent);
    computer=getComputerChoice();

    playertext.textContent = `Player: ${player.toUpperCase()}`;

    comptext.textContent = `Computer: ${computer}`;

    //console.log(round(player.toUpperCase(),computer));
    resulttext.textContent=`Result: ${round(player.toUpperCase(),computer)}`;

}));









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
        
         return "Player loses! ";
     }
 }

















/*
buttons.addEventListener('click',function(event) {
    // Use the event.target property to determine which element was clicked
    if (event.target.matches('.button1')) {
        console.log("bob1")
      // Perform actions for element 1
    } else if (event.target.matches('.button2')) {
        console.log("bob2")
      // Perform actions for element 2
    } else if (event.target.matches('.button3')) {
        console.log("bob3")
      // Perform actions for element 3
    }
  });*/


/*button1.addEventListener('click',function(){

    console.log(buttons.button1);
})
*/

/*
 for(let i=0;i<5;i++){
     let PlayerSelection=(prompt("Choose Rock,Paper,Scissors"));
     PlayerSelection= PlayerSelection.toUpperCase();
     compchoice=getComputerChoice();

     console.log(round(PlayerSelection,compchoice));
 }
 */
  
 
 //console.log(round(PlayerSelection,compchoice));
 
//INNER HTML CHANGIN BUTTONS TO IMGS


//rock.innerHTML= 