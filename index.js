
let resetButton = document.getElementsByClassName("reset-hidden")[0];

const winningPositions = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];

var currentState = true;
let moves = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
function main(){

let buttons =returnAllButtons();

resetButton.addEventListener("click",()=>{resetGame(moves,buttons,currentState,resetButton)})


initButtons(buttons,moves);

}

main()




function initButtons(buttons,moves){

for(let i = 0;i != 9;i++){
    
buttons[i].addEventListener("click",() =>{
console.log(currentState)
  

    if(buttons[i].className == ""){

moves[i] = currentState;

if(cheakIfXWon(moves,winningPositions)){resetButton.className = "reset-shown"}
if(cheakIfOWon(moves,winningPositions)){resetButton.className = "reset-shown"}
buttons[i].className = (currentState) ? "xButton":"oButton";
currentState = !currentState;
    }
if(cheakForEndOfGame(moves)){
            resetButton.className = "rest-shown";
        }
  
})

}
    
}





function cheakForEndOfGame(moves){

    if(moves.includes(undefined)){
        return false;
    }
return true;
}





function returnAllButtons(){

    let buttons=[];

    for(let i =0;i != 9;i++){

buttons[i] = document.getElementById(`${i}`);

    }

    return buttons;
    
}




function cheakIfXWon(moves,winningPositions){

var hasWon = false;
winningPositions.forEach((position) =>{
    
       
    if(moves[position[0]] && moves[position[1]] && moves[position[2]]){
      
        hasWon = true;
       
    }

    
})
return hasWon;

}


function cheakIfOWon(moves,winningConditions){

    var hasWon = false;
    winningPositions.forEach((position) =>{

  
        
            if(moves[position[0]] == false && moves[position[1]] == false && moves[position[2]] == false){
                
                hasWon = true;
            }
        
     
        
        
        })
        return hasWon;
    }



    function resetGame(moves,buttons,currentState,resetButton){

        moves = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];


        buttons.forEach(button => {
            
            button.className = "";

        });

        currentState = true;
        resetButton.className = "rest-hidden"
        initButtons(buttons,moves);
    }




        
        
        

