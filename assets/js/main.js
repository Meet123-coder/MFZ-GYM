/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// SHOW MENU
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// REMOVE MENU MOBILE
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// REMOVE MENU ON LINK CLICK
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to a tag with the header tag
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass?.classList.add('active-link');
        } else {
            sectionsClass?.classList.remove('active-link');
        }                                                    
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher on the Y axis, the scroll-up class is added to a tag with the scrollup class
    if(this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
});

sr.reveal('.home__data', {origin: 'left'});
sr.reveal('.home__img', {origin: 'right'});
sr.reveal('.home__buttons', {origin: 'bottom'});
sr.reveal('.home__stats', {origin: 'bottom'});
sr.reveal('.motivation__content', {origin: 'bottom', delay: 200});
sr.reveal('.gallery__card', {interval: 100});
sr.reveal('.logos__img', {interval: 100});
sr.reveal('.program__card', {interval: 100});
sr.reveal('.choose__content', {origin: 'left'});
sr.reveal('.choose__img, .calculate__img', {origin: 'right'});
sr.reveal('.testimonials__card', {interval: 100});
sr.reveal('.pricing__card', {interval: 100});
sr.reveal('.footer__content', {interval: 100});

/*=============== CALCULATE JS ===============*/
const calculateButton = document.querySelector('.calculate__button'),
      calculateMessage = document.getElementById('calculate-message');

calculateButton.addEventListener('click', () => {
    const height = document.getElementById('height').value,
          weight = document.getElementById('weight').value;

    // Check if the fields have a value
    if(height === '' || weight === '') {
        // Add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        // Show message
        calculateMessage.textContent = 'Fill in the Height and Weight';

        // Remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000);
    } else {
        // BMI Formula
        const bmi = Math.round((weight / (height * height)) * 10000) / 100;

        // Show your health status
        let health = '';

        if(bmi < 18.5) {
            health = 'skinny';
        } else if(bmi < 25) {
            health = 'healthy';
        } else {
            health = 'overweight';
        }

        // Add color and display message
        calculateMessage.classList.add('color-green');
        calculateMessage.classList.remove('color-red');
        calculateMessage.textContent = `Your BMI is ${bmi} and you are ${health}`;

        // To clear the input field
        document.getElementById('height').value = '';
        document.getElementById('weight').value = '';

        // Remove message four seconds
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000);
    }
});

/*=============== EMAIL JS ===============*/
document.addEventListener('DOMContentLoaded', () => {

  const footerForm = document.getElementById('footer-form');
  const footerMessage = document.getElementById('footer-message');

  emailjs.init('0Z_w3n-HUCdaO2KyY');

  footerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !phone || !email) {
      footerMessage.classList.add('color-red');
      footerMessage.textContent = 'Please fill all fields';

      setTimeout(() => footerMessage.textContent = '', 3000);
      return;
    }

    emailjs.send(
      'service_7zpjp4c',
      'template_uw6eyi9',
      {
        user_name: name,
        user_phone: phone,
        user_email: email
      }
    )
    .then(() => {
      footerMessage.classList.remove('color-red');
      footerMessage.classList.add('color-green');
      footerMessage.textContent = 'You registered successfully ✓';

      footerForm.reset();

      setTimeout(() => footerMessage.textContent = '', 3000);
    })
    .catch((error) => {
      console.error(error);
      footerMessage.classList.add('color-red');
      footerMessage.textContent = 'Something went wrong!';
    });
  });

});

