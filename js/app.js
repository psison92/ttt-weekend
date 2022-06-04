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

const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector("#message")
const boardEl = document.querySelector('.board')
const resetBtnEl = document.querySelector('.reset-btn')

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)
    
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
            sqIndex.className = 'x'
        } else if (square === -1) {
            sqIndex.textContent = 'O'
            sqIndex.className = 'o'
        } else if (square === null) {
            sqIndex.textContent = ''
            sqIndex.className = 'square'
        }
    })
    if (winner === null) {
        return (turn === 1 ? messageEl.textContent = `It's X's turn!` : 
            messageEl.textContent = `It's O's turn!`)
    } else if (winner === 'T') {
        messageEl.textContent = `It's a tie!`
    } else {
        messageEl.textContent = `${winner} wins!`
    }
}

function handleClick(evt) {
    const sqIdx = parseInt(evt.target.id)
    if (board[sqIdx] !== null || winner !== null) {
        return
    }
    board[sqIdx] = turn
    turn *= -1
    getWinner()
    render()
}

function getWinner() {
    let total
    winningCombos.forEach(function(combo) {
        total = (board[combo[0]] + board[combo[1]] + board[combo[2]])
        if (total === 3) {
            winner = 'X'
        }
        if (total === -3) {
            winner = 'O'
        } 
        if (board.includes(null) === false && winner === null) {
            winner = 'T'
        } else {
            return null
        }
    })
}
