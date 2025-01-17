const toggleTheme= document.getElementById('toggle-theme');
const toggleIcon= document.getElementById('toggle-icon');
const toggleText= document.getElementById('toggle-text');

const toggleColors= document.getElementById("toggle-colors");
const rootStyle=document.documentElement.style;



toggleTheme.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='/portfolio-youtube-inicial/assets/icons/sun.svg'
        toggleText.textContent='Light Mode'
    } else {
        toggleIcon.src='/portfolio-youtube-inicial/assets/icons/moon.svg'
        toggleText.textContent='Dark Mode'
        
    }
});

toggleColors.addEventListener("click",(e) =>{
    rootStyle.setProperty('--primary-color', e.target.dataset.color);
});