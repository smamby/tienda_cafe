const imgFondoCerTuy = document.getElementById('fondo-cercatuyo');

window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight;
    const startPic = totalHeight - 1080 - 1152; // 1911
    let valueY = window.scrollY;
    console.log(valueY);
    console.log(totalHeight);
    
    if (valueY > startPic) { //1911 && valueY < 3063){
        let y = (valueY - startPic) / 3.86
        imgFondoCerTuy.style.top = `${y}px`;
    }
})