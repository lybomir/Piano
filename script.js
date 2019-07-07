 setTimeout(function(){
    TweenMax.staggerTo('.button', 5, { 
        x: 0, 
        y: 300
        }, .5 );
 }, 0.5 * 1000); 

 let buttonA = document.querySelector('.buttonA');
 let buttonS = document.querySelector('.buttonS');
 let buttonD = document.querySelector('.buttonD');
 let buttonF = document.querySelector('.buttonF');
 let buttonG = document.querySelector('.buttonG');
 let buttonH = document.querySelector('.buttonH');
 let buttonJ = document.querySelector('.buttonJ');
 let buttonK = document.querySelector('.buttonK');

 let music1 = document.querySelector('.music-1');
 let music2 = document.querySelector('.music-2');
 let music3 = document.querySelector('.music-3');
 let music4 = document.querySelector('.music-4');
 let music5 = document.querySelector('.music-5');
 let music6 = document.querySelector('.music-6');
 let music7 = document.querySelector('.music-7');
 let music8 = document.querySelector('.music-8');

function changeColor(){
    this.style.background = 'blue';
    this.style.transition = '.5s';
}

function changeColorReset(){
    this.style.background = 'white';
}

function changeColorA(){
    buttonA.style.background = 'blue';
    buttonA.style.transition = '.5s';
}

function changeColorS(){
    buttonS.style.background = 'blue';
    buttonS.style.transition = '.5s';
}

function changeColorD(){
    buttonD.style.background = 'blue';
    buttonD.style.transition = '.5s';
}

function changeColorF(){
    buttonF.style.background = 'blue';
    buttonF.style.transition = '.5s';
}

function changeColorG(){
    buttonG.style.background = 'blue';
    buttonG.style.transition = '.5s';
}

function changeColorH(){
    buttonH.style.background = 'blue';
    buttonH.style.transition = '.5s';
}

function changeColorJ(){
    buttonJ.style.background = 'blue';
    buttonJ.style.transition = '.5s';
}

function changeColorK(){
    buttonK.style.background = 'blue';
    buttonK.style.transition = '.5s';
}

window.addEventListener('keypress', function(event){
    console.log('keycode',event);
//    if(event.keyCode === 97){
//        music1.play();
//    } else if (event.keyCode === 115) {
//        music2.play();
//    } else if (event.keyCode === 100) {
//        music3.play();
//    } else if (event.keyCode === 102) {
//        music4.play();    
//    } else if (event.keyCode === 103) {
//        music5.play();
//    } else if (event.keyCode === 104) {
//        music6.play();
//    } else if (event.keyCode === 106) {
//        music7.play();
//    } else if (event.keyCode === 107) {
//        music8.play();
//    }   
    switch(event.keyCode) {
        case 97: music1.play(),
            changeColorA()
            break;
        case 115: music2.play(),
            changeColorS()
            break;
        case 100: music3.play(),
            changeColorD()
            break;
        case 102: music4.play(),
            changeColorF()
            break;
        case 103: music5.play(),
            changeColorG()
            break;
        case 104: music6.play(),
            changeColorH()
            break;
        case 106: music7.play(),
            changeColorJ()
            break;
        case 107: music8.play(),
            changeColorK()
            break;
    }
    
});

buttonA.addEventListener('mouseover', changeColor);
buttonA.addEventListener('mouseout',changeColorReset);

buttonS.addEventListener('mouseover',changeColor);
buttonS.addEventListener('mouseout',changeColorReset);

buttonD.addEventListener('mouseover',changeColor);
buttonD.addEventListener('mouseout',changeColorReset);

buttonF.addEventListener('mouseover',changeColor);
buttonF.addEventListener('mouseout',changeColorReset);


buttonG.addEventListener('mouseover',changeColor);
buttonG.addEventListener('mouseout',changeColorReset);

buttonH.addEventListener('mouseover',changeColor);
buttonH.addEventListener('mouseout',changeColorReset);

buttonJ.addEventListener('mouseover',changeColor);
buttonJ.addEventListener('mouseout',changeColorReset);

buttonK.addEventListener('mouseover',changeColor);
buttonK.addEventListener('mouseout',changeColorReset);



