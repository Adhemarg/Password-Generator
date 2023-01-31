const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let button1 = document.getElementById("but1")
let button2 = document.getElementById("but2")
let passwordLength = 15
function randomCharacter() {
    let randomchar = Math.floor(Math.random()*characters.length)
    return characters[randomchar]
}

function generate() {
    let randomPassword1 = ""
    for (i = 0; i < passwordLength; i++) {
        randomPassword1 += randomCharacter()
    } 
    button1.textContent = randomPassword1
    let randomPassword2 = ""
    for (i = 0; i < passwordLength; i++) {
        randomPassword2 += randomCharacter()
    } 
    button2.textContent = randomPassword2
}



