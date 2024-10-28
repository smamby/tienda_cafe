const dotBtns = Array.from(document.getElementsByClassName('dot-btn'));
const leftBtn = document.getElementsByClassName('left-btn');
const rightBtn = document.getElementsByClassName('right-btn');
const backgroundIndex = document.getElementById('main-container');


dotBtns.forEach((el, i) => {
    el.addEventListener('click', ()=> {
        console.log(`boton apretado dot ${i}`);
        backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
        dotBtns.forEach((e) => {
            e.style.background = 'transparent';
            e.style.border = '1px solid white';
        })
        el.style.background = 'white';
    });
})
var i = 0;
leftBtn[0].addEventListener('click', () => {
    console.log(`boton apretado < i= ${i}`)
    if (i == 0) {
        i = 2;
        backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
        return
    }
    i -= 1;
    backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
})

rightBtn[0].addEventListener('click', () => {
    console.log(`boton apretado > i= ${i}`)
    if (i == 2) {
        i = 0;
        backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
        return
    }
    i += 1;
    backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
})