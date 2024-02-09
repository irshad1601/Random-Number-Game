let random_Number = Math.floor(Math.random()*10+1)
const user_Input = document.querySelector('#number')
console.log(typeof user_Input.value);
const button = document.querySelector('#btn')
const display_Message = document.querySelector('.message')
const previous_Guess = document.querySelector('.prevguess')
const remaining_Guess = document.querySelector('.rguess')
const startOver = document.querySelector('.startOver')

const p=document.createElement('p')

play_Game = true
let r_Guess = 3
 
button.addEventListener('click',function(e){
    e.preventDefault()
    r_Guess--
    if(r_Guess == 0 && user_Input.value !=random_Number){
        guessDisplay(user_Input.value)
        messageDisplay(`Game Over! Random number is ${random_Number}`)
        endGame()
    }
    else if(play_Game)
    {
        guess_Number = parseInt(user_Input.value)   
        validate(guess_Number)
    }
})

function validate(guess_Number)
{
    if(guess_Number <1 || guess_Number >10 || guess_Number == '' || isNaN(guess_Number))
    {
        alert("Please enter number between 1 and 10")
        user_Input.value=''
    }
    else{
        check(guess_Number)

    }
}

function check(guess_Number)
{
    if(guess_Number == random_Number)
    {
        guessDisplay(guess_Number)
        messageDisplay(`Congratulation! You guesses Right number ${guess_Number}`)
        endGame()
    }
    else if(guess_Number < random_Number)
    {
        messageDisplay('You Guess TOOO Low')
        user_Input.value=''
        guessDisplay(guess_Number)
    }
    else if(guess_Number > random_Number)
    {
        messageDisplay('You Guess TOOO High')
        user_Input.value=''
        guessDisplay(guess_Number)
    }
}

function messageDisplay(message)
{
    display_Message.innerHTML=`${message}`
}

function guessDisplay(guess_Number)
{
    previous_Guess.innerHTML+=`${guess_Number} `
    remaining_Guess.innerHTML=r_Guess
}

function endGame()
{
    user_Input.value=''
    user_Input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=`<p id="new_Game">Again Start</p>`
    startOver.appendChild(p)
    play_Game=false
    newGame()
}

function newGame()
{
    const new_Game = document.querySelector('#new_Game')
    new_Game.addEventListener('click',function(e){
        random_Number = Math.floor(Math.random()*10+1)
        r_Guess=3
        previous_Guess.innerHTML=
        display_Message.innerHTML=''
        remaining_Guess.innerHTML=r_Guess
        user_Input.removeAttribute('disabled')
        startOver.removeChild(p)
        play_Game=true
    })
}
