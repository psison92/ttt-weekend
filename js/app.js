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
    let squareIdx
    squareEls.forEach(function(square, idx) {
        console.log(square)
        console.log(idx)
    })           
}
   
        
    
