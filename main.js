const burger = document.getElementById('burger');
const navUl = document.getElementById('navUl');

burger.addEventListener('click', ()=> {
      burger.classList.toggle('show')
      navUl.classList.toggle('show')
});

navUl.addEventListener('click', ()=> {
      navUl.classList.remove('show');
      burger.classList.remove('show');
});