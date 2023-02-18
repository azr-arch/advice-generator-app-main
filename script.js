
const adviceEl = document.querySelector('.advice-text');
const dice = document.querySelector('.card--dice');
const adviceId = document.querySelector('.advice-id-text');


function getAdvice(){

    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => showAdvice(data.slip))
}

function showAdvice(data){ 
    adviceEl.innerText = `'${data.advice}'`
    adviceId.innerText = data.id
}   

function rotate(){
    diceSvg.style = `transform: rotateZ(360deg)`

}

dice.addEventListener('click', () => {
    getAdvice()
})