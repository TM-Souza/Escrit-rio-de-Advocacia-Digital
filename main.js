/*###################     open e close     ####################################*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*######################################################*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/*#################################################################################*/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: { slidesPerView: 2, setWrapperSize: true }
  }
})

/*  A ROLAGEM DE PÁGINA NÃO QUIS FUNCIONAR */
/*##################################################################################*/

const scrollReveal = scrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .cxText, #home .text, #home .button,
  #sobre .hed, #sobre .image, #sobre .text,
  #service header, #service .card,
  #depoimentos header, #depoimentos .depoimentos
  #contato .text, #contato .links
  `,
  { interval: 100 }
)
