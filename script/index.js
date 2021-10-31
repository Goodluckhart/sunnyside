const toggleBtn = document.querySelector(".toggle")
const anchor = document.querySelector(".anchor")
const links = Array.from(document.querySelectorAll(".link"))
const writer = document.querySelector(".writer")

// HAMBUGER MENU FUNCTION
toggleBtn.addEventListener("click", () => {
    anchor.classList.toggle("active")
    toggleBtn.classList.toggle("active")
})

// CLOSE MENU FUNCTION 
links.forEach(link => link.addEventListener("click", () => {
    anchor.classList.remove("active")
    toggleBtn.classList.remove("active")
}))


// TYPEWRITER EFFECT 
const phrases = ["WE ARE CREATIVE", "TAKE YOUR BUSINESS TO THE NEXT LEVEL"]
let currentPhrase = []
let isComplete = false
let isEnd = false
let i = 0
let j = 0

function type() {
    isEnd = false
    writer.innerHTML = currentPhrase.join("")
    if(i < phrases.length) {
        
        if(!isComplete && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            writer.innerHTML = currentPhrase.join("")
        }
        if(isComplete && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
        }
        if(j == phrases[i].length) {
            isComplete = true
            isEnd = true
        }
        if(j == 0) {
            isComplete = false
            i++
        }
        if(i == phrases.length) {
            currentPhrase = []
            i = 0
        }
    }
    const spedUp = Math.floor(Math.random() * (80 - 50) + 50)
    const normalSpeed = Math.floor(Math.random() * (80 - 50) + 50)
    const time = isEnd ? 2000 : isComplete ? spedUp : normalSpeed
    setTimeout(type, time)
}
type()










