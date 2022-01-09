const page = document.querySelector('.container');
const nav = document.querySelector('nav');
const testimonialWidth = document.querySelector('#testimonials .inner-container');
const carouselContainer = document.querySelector('.carousel');
const testimonials = document.querySelectorAll('.testimonial');
const testimonialBtnLeft = document.querySelector('.prev');
const testimonialBtnRight = document.querySelector('.next');
const formSubmitButton = document.querySelector('.form-submit');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputMessage = document.querySelector('#message');
const footerYear = document.querySelector('.year');


window.addEventListener('scroll', function(e) {
    const target = e.target.scrollingElement.scrollTop;

    if(target > 350) {
        nav.classList.add('show-nav');
    } else {
        nav.classList.remove('show-nav');
    }
})

// set copyright year 
const date = new Date().getFullYear();
footerYear.textContent = date;

// set message when user submit form
formSubmitButton.addEventListener('click', function(e) {

    if(inputName.value !== '' && inputEmail.value !== '' && inputMessage.value !== '' && inputPhone.value !== '') {

        const mask = document.createElement('div');
        mask.setAttribute('class', 'mask');
        page.appendChild(mask);

        const p = document.createElement('p');
        p.textContent = "Poruka je poslata.";
        p.setAttribute('class', 'message');
        page.appendChild(p);
    
        setTimeout(function() {
            mask.style.display = 'none';
            p.style.display = 'none';
        },3000)
    }


    e.preventDefault();
})

// carousel testimonials 
// variable carouselContainer i testimonials 

let index = 0;
let interval = setInterval(run, 5000);

function run() {
    index++;

    if(index > testimonials.length - 1) {
        index = 0
    } else if(index < 0) {
        index = testimonials.length - 1;
    }

    let width = testimonialWidth.offsetWidth;
    carouselContainer.style.transform = `translateX(-${index * width}px)`;
}

testimonialBtnLeft.addEventListener('click', function(e) {
    index--;
    
    if(index < 0) {
        index = testimonials.length - 1;
    }
    let width = testimonialWidth.offsetWidth;
    carouselContainer.style.transform = `translateX(-${index * width}px)`;

    clearInterval(interval);
    interval = setInterval(run, 5000);
})

testimonialBtnRight.addEventListener('click', function(e) {
    index++;
    
    if(index > testimonials.length - 1) {
        index = 0;
    }
    let width = testimonialWidth.offsetWidth;
    carouselContainer.style.transform = `translateX(-${index * width}px)`;

    clearInterval(interval);
    interval = setInterval(run, 5000);
})

// style label when input is in focus state

inputName.addEventListener('focus', () => {
    const label = document.querySelector('label[for="name"]');
    label.style.color = 'rgb(50, 50, 50)';
    label.style.fontSize = '12px';
})

inputEmail.addEventListener('focus', () => {
    const label = document.querySelector('label[for="email"]');
    label.style.color = 'rgb(50, 50, 50)';
    label.style.fontSize = '12px';
})

inputPhone.addEventListener('focus', () => {
    const label = document.querySelector('label[for="phone"]');
    label.style.color = 'rgb(50, 50, 50)';
    label.style.fontSize = '12px';
})

inputMessage.addEventListener('focus', () => {
    const label = document.querySelector('label[for="message"]');
    label.style.color = 'rgb(50, 50, 50)';
    label.style.fontSize = '12px';
})


