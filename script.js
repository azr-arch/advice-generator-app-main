
const dice = document.querySelector('.card--dice');
const adviceEl = document.querySelector('.advice-text');
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

dice.addEventListener('click', () => {
    getAdvice()
})