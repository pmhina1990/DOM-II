// Your code goes here
const navBar = document.querySelector('.nav')
navBar.style.textAlign ='center'
navBar.style.whiteSpace ='nowrap'
const navOption = document.querySelectorAll('.nav .nav-link')
navOption[0].style.color = 'Red'
navOption[1].style.color = 'Red'
navOption[2].style.color = 'Red'
navOption[3].style.color = 'Red'
navOption[0].style.backgroundColor = 'Blue'
navOption[1].style.backgroundColor = 'Blue'
navOption[2].style.backgroundColor = 'Blue'
navOption[3].style.backgroundColor = 'Blue'
navOption[0].style.fontSize = '40px'
navOption[1].style.fontSize = '40px'
navOption[2].style.fontSize = '40px'
navOption[3].style.fontSize = '40px'

const newBackground = document.querySelector('body')
newBackground.style.backgroundColor = 'Yellow'
const heading = document.querySelector('.logo-heading')
heading.style.fontSize ='80px'
heading.style.textAlign = 'center'
heading.addEventListener('mouseover',function(event){
    event.target.style.color = "Red";
    heading.textContent = "Magic School Bus"
    event.target.style.backgroundColor = "Orange"
})
heading.addEventListener('mouseout',function(event){
    event.target.style.color = "White"
    heading.textContent = "NOT So Magic."
    event.target.style.backgroundColor = "Green"
})
 const headingTwo = document.querySelector('.content-destination h2')
 headingTwo.addEventListener('dblclick', function (event) {
   event.classList.toggle('large');
 });
const imageContent = document.querySelector('.img-content')
imageContent.addEventListener('click', function(event){
    event.target.style.border = "3px"
})
const iMages = document.querySelectorAll('img');


iMages[0].addEventListener('dblclick', function(event){
    iMages[0].style.borderRadius = "50%"
})
iMages[1].addEventListener('dblclick', function(event){
    iMages[1].style.borderRadius = '20%'
})
iMages[2].addEventListener('dblclick', function(event){
    iMages[2].style.borderRadius = '20%'
})
iMages[3].addEventListener('dblclick', function(event){
    iMages[3].style.borderRadius = '20%'
})
iMages[0].addEventListener('onblur', function (event){
    if(iMages[0].style.borderRadius === '50%');
})

const buttons = document.querySelector('#buttrips')
buttons.style.backgroundColor = "Crimson"
buttons.style.color = "white"
buttons.style.textAlign= "center"

buttons.addEventListener('mouseover', function(){
    event.target.alert = " Hi Yall"
})




