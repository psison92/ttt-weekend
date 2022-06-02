/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


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

       
   
        
