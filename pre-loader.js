
const section_loader =  document.querySelector('.loader');

setTimeout(()=>{
    section_loader.style.cssText =`
    opacity:0;
    top:-100%;
    transition:2s;`
    // section_loader.remove()
},1500);


const nav = document.querySelector('.nav-links')
const icon = document.querySelector('.close-icon');

const hideMenu =()=>{
    nav.style.cssText =`right:-200px`

}
const showMenu =()=>{
    nav.style.cssText =`right:0`

}

// nav.addEventListener('click',hideMenu)
