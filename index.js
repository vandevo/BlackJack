let firstCard = 10
let secondCard = 4

let cards = [firstCard, secondCard]

let sum = firstCard + secondCard


let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") //

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")


function getRandomCards(){
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1){
        return 11
    } else {
    return randomNumer}
}

function startGame() {
    renderGame()
}

function renderGame(){

    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for ( let i = 0 ; i < cards.length ; i ++){
        cardsEl.textContent += cards[i] + " "
    }

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
messageEl.textContent = message



}



function newCard() {
    message = "Drawing a new card from the deck!"
    let card = getRandomCards()
    sum += card
    cards.push(card)

    renderGame()

}
