/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.squares')
const messageEl = document.querySelector("#message")

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    render()
}


function render() {
    let sqIndex
    board.forEach(function(square, idx) {
        sqIndex = squareEls[idx]
        if (square === 1) {
            sqIndex.textContent = 'X'
            //come back to change square color
        } else if (square === -1) {
            sqIndex.textContent = 'O'
            //come back to change square color
        } 
    })
    if (winner === null) {
        messageEl.textContent = `It's ${turn} turn!`
    } else if (winner === 'T') {
        messageEl.textContent = `It's a tie!`
    } else {
        messageEl.textContent = `Congratulations player ${turn}! You won!`
    }
     
}

       
   
        
