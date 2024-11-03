// CARRUSEL PORTADA

const dotBtns = Array.from(document.getElementsByClassName('dot-btn'));
const leftBtn = document.getElementsByClassName('left-btn');
const rightBtn = document.getElementsByClassName('right-btn');
const backgroundIndex = document.getElementById('background-container');
let carruselTextH1 = document.getElementById('carrusel-h1');
let carruselTextH2 = document.getElementById('carrusel-h2');
let carruselTextP = document.getElementById('carrusel-p');
let carruselBtn =  document.getElementById('btn-carusel');
let carruselBtnAccess = document.getElementById('btn-carusel-access');
const content = [
    ['Tu té preferido',
        'SIEMPRE CERCA',
        'Blends, varietales, tés del mundo.<br>Encontrá tu Tienda mas cercana y tentate con nuestros sabores.',
        'ENCONTRANOS',
        '/contacto.html'],
    ['Probá nuestras',
        'COMBINACIONES',
        '100% hierbas naturales sin aditivos',
        'DESCUBRILAS',
        '/nuestro-te.html'],
    ['Desde 2003',
        'COSECHANDO TU TÉ',
        'Años de experiencia cuidando cada paso del proceso.',
        '',
        '']
];
function actualizarCarrucel(i) {
    backgroundIndex.style.backgroundImage = `url('./img/home-background-${i}.jpg')`;
    carruselTextH2.textContent = content[i][0];
    carruselTextH1.textContent = content[i][1];
    carruselTextP.innerHTML = content[i][2];
    carruselBtn.textContent = content[i][3];
    carruselBtnAccess.href = content[i][4];
    if (i==2) {
        carruselBtn.style.display='none';
    } else {
        carruselBtn.style.display='flex';
    }
}

dotBtns[0].classList.add('active');
var i = 0;

dotBtns.forEach((el, ix) => {
    el.addEventListener('click', ()=> {
        console.log(`boton apretado dot ${ix}`);
        i = ix;
        actualizarCarrucel(i)
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
        actualizarCarrucel(i)
        console.log(`foto i= ${i}`)
    } else {
        i -= 1;
        actualizarCarrucel(i)
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
        actualizarCarrucel(i)
        console.log(`foto i= ${i}`)
    } else {
        i += 1;
        actualizarCarrucel(i)
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
    actualizarCarrucel(i)
    console.log(`foto i= ${i}`)
    
    dotBtns.forEach((e) => {
        e.classList.remove('active');
    });
    dotBtns[i].classList.add('active');
        
}, 5000);


const imgFondoCerTuy = document.getElementById('fondo-cercatuyo');

window.addEventListener('scroll', () => {
    let valueY = window.scrollY;
    console.log(valueY);
    
    if (valueY > 2012 && valueY < 3356){
        let y = (valueY - 2012) / 3.36
        imgFondoCerTuy.style.top = `${y}px`;
    }
})