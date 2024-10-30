const dotBtns = Array.from(document.getElementsByClassName('dot-btn'));
const leftBtn = document.getElementsByClassName('left-btn');
const rightBtn = document.getElementsByClassName('right-btn');
const backgroundIndex = document.getElementById('background-container');
dotBtns[0].classList.add('active');
var i = 0;

dotBtns.forEach((el, ix) => {
    el.addEventListener('click', ()=> {
        console.log(`boton apretado dot ${ix}`);
        backgroundIndex.style.backgroundImage = `url('./img/home-background-${ix}.jpg')`;
        i = ix;
        dotBtns.forEach((e) => {
            e.classList.remove('active');
        })
        el.classList.add('active');
    });
})

leftBtn[0].addEventListener('click', () => {
    console.log(`boton apretado < i= ${i}`)
    if (i == 0) {
        i = 2;
        backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
        console.log(`foto i= ${i}`)
    } else {
        i -= 1;
        backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
        console.log(`foto i= ${i}`)
    }
    dotBtns.forEach((e) => {
        e.classList.remove('active');
    })
    dotBtns[i].classList.add('active');
})

rightBtn[0].addEventListener('click', () => {
    console.log(`boton apretado > i= ${i}`)
    if (i == 2) {
        i = 0;
        backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
        console.log(`foto i= ${i}`)
    } else {
        i += 1;
        backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
        console.log(`foto i= ${i}`)
    }
    dotBtns.forEach((e) => {
        e.classList.remove('active');
    })
    dotBtns[i].classList.add('active');
})

setInterval(function () {
    if (i == 2) {
        i = 0;
    } else {
        i += 1;
    }
    backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
    console.log(`foto i= ${i}`)
    
    dotBtns.forEach((e) => {
        e.classList.remove('active');
    });
    dotBtns[i].classList.add('active');
        
}, 5000);