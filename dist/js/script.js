// Scroll header & top
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop
    const top = document.querySelector('#top')
    if(window.scrollY > fixedNav){
        header.classList.add('navbar-fixed');
        top.classList.remove('hidden');
        top.classList.add('flex')
    }
    else{
        header.classList.remove('navbar-fixed')
        top.classList.remove('flex');
        top.classList.add('hidden')
    }
};


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});


// Klik luar hamburger
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden')
    }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme='dark';
    }
    else{
        html.classList.remove('dark')
        localStorage.theme='light';
    }
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    darkToggle.checked=true
  } else {
    document.documentElement.classList.remove('dark')
  }
  