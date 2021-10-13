// Copyright (c) 2021 Paulo Ricardo
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

let position = 0;
let isJump = false;
const dino =  document.querySelector('.dino');
const background = document.querySelector('.background')

document.addEventListener('keyup', handleKeyUp)

function handleKeyUp(event) {
    if (event.keyCode === 32) {
       if (!isJump) {
            jump();
       }
    }
}

function jump() {
   isJump = true
   let upInterval = setInterval(() => {

    if (position >= 150) {
        clearInterval(upInterval);

      
        let downInterval = setInterval(() => {
            if(position <= 0){
                clearInterval(downInterval)
                isJump = false
            }
            position -=10;
            dino.style.bottom = position + 'px';
    },20)

    } else{

        position +=10; 

        dino.style.bottom = position + 'px';
    }
        
   }, 20) 
}

function createCactus() {
    const cactus = document.createElement('div')
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {        

        if (cactusPosition < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
        }
        else if(cactusPosition > 0 && cactusPosition < 60 && position < 60 ){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Fim de Jogo</h1>'
        }
        else{
            cactusPosition -=10;
            cactus.style.left = cactusPosition + 'px'
        }
    },20)

    setTimeout(createCactus, randomTime)
}

createCactus()

