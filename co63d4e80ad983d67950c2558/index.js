let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")


let countHome = 0
let countGuest = 0
function freeThrowHome(){
   countHome += 1
   scoreHomeEl.textContent = countHome 
}
function midRangeHome(){
    countHome += 2
    scoreHomeEl.textContent = countHome
}
function outerRangeHome(){
    countHome += 3
    scoreHomeEl.textContent = countHome
}
function freeThrowGuest(){
   countGuest += 1
   scoreGuestEl.textContent = countGuest 
}
function midRangeGuest(){
    countGuest += 2
    scoreGuestEl.textContent = countGuest
}
function outerRangeGuest(){
    countGuest += 3
    scoreGuestEl.textContent = countGuest
}

 