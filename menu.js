const navbar = document.querySelector('.nav');
window.addEventListener('scroll',function(){
    nav.classList.toggle('avtive', window.scrollY > 0)
});