const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
let timeLeft = document.querySelector('.time-left')
let score = document.querySelector('.score')
let remark = document.querySelector('.remark')
let remarkScore = document.querySelector('.remark-score')
let squareContainer = document.querySelector('.square-container')

let hitPosition;
let result =  0;
let currentTime = timeLeft.innerHTML;
let randomPosition;

const randomSquare = () =>{
  square.forEach(eachSquare => {
  eachSquare.classList.remove('mole')    
  })

  randomPosition = square[Math.floor(Math.random() * 12)]
  randomPosition.classList.add('mole')


  hitPosition = randomPosition.id
}





square.forEach( eachSquare =>{
 eachSquare.addEventListener('mouseup',() =>{
   if(eachSquare.id === hitPosition){
       result = result + 1;
       score.textContent ='Score :  ' + result;
   }
 })
})

function moveMole(){
    let timerId = null
  timerId = setInterval(randomSquare,1000)
}
moveMole()



function countDown (){
    currentTime--
    timeLeft.textContent = currentTime + ' sec'
  if (currentTime == 0){
    clearInterval(timerId)
    remark.style.display='block';
    squareContainer.style.display='none';
    remarkScore.innerHTML=` ${result}`;
  }
}

function restart (){
    location.reload()
    remark.style.display='none';
    squareContainer.style.display='block';
    currentTime;
}

let timerId = setInterval(countDown,1000)




