let cards=[]
let sum=0
let hasblackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let SumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")



function getRandomnumberCard () {
     let randomnumber= Math.floor(Math.random()*13)+1
     
     if (randomnumber>10){
        return 10
     }
     else if(randomnumber===1){
        return 11
     }
     else{
        return randomnumber
     }

}

function startGame(){
    isAlive=true
    let firstCard=getRandomnumberCard();
    let secondCard=getRandomnumberCard();
    cards=[firstCard,secondCard]
     sum=firstCard + secondCard;
    renderGame()

    let player = {
        name: "Per",
        chips: 1000
    }
    
    let playerEl = document.getElementById("player-el")
    playerEl.textContent = player.name + ": Rs." + player.chips
}
    

function renderGame() {
    SumEl.textContent="Sum :"+sum 
    cardsEl.textContent="Cards :"
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasblackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasblackJack === false) {
        let card = getRandomnumberCard()
        sum += card
        cards.push(card)
        renderGame()        
    }

}



