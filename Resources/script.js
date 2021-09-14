const changeTextButton = document.getElementById('changeText');
const changeBackgroundButton = document.getElementById('changeBackground');
const changeShadowButton = document.getElementById('changeShadow');


const changeToFunkyColor = (domElement) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
   
    return `rgb(${r}, ${g}, ${b})`;
  }

changeTextButton.addEventListener('click', () => {
    changeToFunkyColor();
});
changeBackgroundButton.addEventListener('click', () => {
    changeToFunkyColor(changeBackgroundButton);
});
changeShadowButton.addEventListener('click', () => {
    changeShadowButton.style.boxShadow = changeToFunkyColor(changeShadowButton);
});