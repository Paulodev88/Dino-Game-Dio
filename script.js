// Copyright (c) 2021 Paulo Ricardo
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

let isJump = false;
const dino =  document.querySelector('.dino');

document.addEventListener('keyup', handleKeyUp)

function handleKeyUp(event) {
    if (event.keyCode === 32) {
       if (!isJump) {
            jump();
       }
    }
}

function jump() {
   let position = 0;
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