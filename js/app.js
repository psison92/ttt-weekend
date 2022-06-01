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
    board = [1, -1, null, null, null, null, null, null, null]
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
        } else if (square === -1) {
            sqIndex.textContent = 'O'
        } 
    })
     
}

       
   
        
