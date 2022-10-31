//Animations
const timeline = gsap.timeline( {defaults: {duration: 1}})

timeline
     .from('#introP', {x: '-100%', ease: 'sine'})
     .to('#introP', {x: '-100%', ease: 'sine', delay : '2.5'})
     .to('#intro', {x:'-100%', ease: 'power3'}, '<.3')
     .to('#main', {opacity: '1'}, '<.0')

const hiddenSections = document.getElementsByClassName('hide')

function showSections() {
     for( i=0; i< hiddenSections.length; i++){
          hiddenSections[i].style.display = 'block'
      }
}
setTimeout('showSections()', 5000)

//Date
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

//Scroll
const header = document.querySelector('header')
const scrollUpArrow = document.querySelector('.scrollUp')

window.addEventListener('scroll', function(){
     /*console.log(window.pageYOffset)*/
     scrollH = window.pageYOffset
     headerH = header.getBoundingClientRect().height
     //Change header
     if(scrollH > headerH) {
          header.classList.add('headerScroll')
     }else {
          header.classList.remove('headerScroll')
     }
     //Scroll up
     if(scrollH > 600){
          scrollUpArrow.classList.add('showScrollUp')
     }else{
          scrollUpArrow.classList.remove('showScrollUp')
     }
})

//Scroll to sections
const sections = document.querySelectorAll('.scroll')

sections.forEach( function(section) {
     section.addEventListener('click', function(e) {
          e.preventDefault()
          const id = e.currentTarget.getAttribute('href').slice(1)
          const sectionId = document.getElementById(id)
          const headerHeight = header.getBoundingClientRect().height
          let position = sectionId.offsetTop - headerHeight
          window.scrollTo({
               left: 0,
               top: position
          })
     })
})

//Slider
const sliderDiv = document.querySelectorAll('.slide')
const next = document.querySelector('.next-btn')
const previous = document.querySelector('.previous-btn')

sliderDiv.forEach(function(slide, i){
     slide.style.left = `${i * 100}%`
})
let counter = 0;
next.addEventListener("click", function () {
  counter++;
  show();
});

previous.addEventListener("click", function () {
  counter--;
  show();
});

function show() {
     if (counter < sliderDiv.length - 1) {
          next.style.display = "block";
        } else {
          next.style.display = "none";
        }
        if (counter > 0) {
          previous.style.display = "block";
        } else {
          previous.style.display = "none";
        }
        sliderDiv.forEach(function (slide) {
          slide.style.transform = `translateX(-${counter * 100}%)`;
        });
}











    
     
    

