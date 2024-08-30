const btn=document.getElementById('navIcon')
const navState=document.getElementById('responsiveNav')
console.log(btn)
btn.addEventListener('click',()=>{
navState.classList.toggle('hidden')
})