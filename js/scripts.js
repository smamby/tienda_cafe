const dotBtns = Array.from(document.getElementsByClassName('dot-btn'));
const leftBtn = document.getElementsByClassName('left-btn');
const rightBtn = document.getElementsByClassName('right-btn');
const backgroundIndex = document.getElementById('background-container');
dotBtns[0].classList.add('active');

dotBtns.forEach((el, i) => {
    el.addEventListener('click', ()=> {
        console.log(`boton apretado dot ${i}`);
        backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
        dotBtns.forEach((e) => {
            // e.style.background = 'transparent';
            e.classList.remove('active');
            // e.style.border = '1px solid white';
        })
        // el.style.background = 'white';
        el.classList.add('active');
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