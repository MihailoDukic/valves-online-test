
import Swiper from 'swiper/swiper-bundle';

window.onscroll = function () { stickyDesktop() };

// Desktop Header Sticky  

const stickyHeader = document.querySelector('#sticky-desktop-header');
const iconScroll = document.querySelector('#hamburger-scroll');
const sticky = stickyHeader.offsetTop;
const showIcon = iconScroll.offsetTop;


function stickyDesktop() {
    if (window.pageYOffset > sticky && window.pageYOffset > showIcon) {
        stickyHeader.classList.add('sticky-desktop');
        iconScroll.classList.add('hamburger-icon-show');
        menuDesktopF.classList.remove('show-static-menu');

    } else {
        stickyHeader.classList.remove('sticky-desktop');
        iconScroll.classList.remove('hamburger-icon-show');
        menuDesktopF.classList.remove('show-fixed-menu');
    }
};


// Swiper Init 

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 60,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: true,

    breakpoints: {

        // when window width is <= 499px
        50: {
            slidesPerView: 1,
            spaceBetweenSlides: 0,
            autoplay: true,
        },

        620: {
            slidesPerView: 1.5,
            spaceBetweenSlides: 0,
            loop: true,
        },

        680: {
            slidesPerView: 2.5,
            spaceBetweenSlides: 0,
            loop: true,
        },
        // when window width is <= 999px
        1024: {
            slidesPerView: 4,
            spaceBetweenSlides: 0,
        },

        1300: {
            slidesPerView: 6,
            spaceBetweenSlides: 0,
            loop: true,
        }
    }

});

// Open Close Desktop Menu 

const menuDesktopToggleF = document.querySelector('#hamburger-scroll');
const menuDesktopToggle = document.querySelector('#hamburger-static-toggle');
const menuDesktopF = document.querySelector('#desktop-menu');
menuDesktopToggleF.addEventListener('click', () => {
    menuDesktopF.classList.toggle('show-fixed-menu');
});

menuDesktopToggle.addEventListener('click', () => {
    menuDesktopF.classList.toggle('show-static-menu');
});




// Open Close Mobile Menu 
const mobileNav = document.querySelector('#mobile-nav');
const openMobileNav = document.querySelector('#open-mobile-menu');
const closeMobileNav = document.querySelector('#close-mobile-menu');
// Open Close Inner Mobile Menu 
const innerToggleOne = document.querySelector('#inner-m-toggle-one');
const innerToggleTwo = document.querySelector('#inner-m-toggle-two');
const innerToggleThree = document.querySelector('#inner-m-toggle-three');
const innerMenuOne = document.querySelector('#inner-m-one');
const innerMenuTwo = document.querySelector('#inner-m-two');
const innerMenuThree = document.querySelector('#inner-m-three');
const arrowMOne = document.querySelector('#arrow-m-one');
const arrowMTwo = document.querySelector('#arrow-m-two');
const arrowMThree = document.querySelector('#arrow-m-three');
// Open Close Mobile Menu 
openMobileNav.addEventListener('click', () => {
    mobileNav.style.display = 'block';
});

closeMobileNav.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    innerMenuTwo.classList.remove('showInnerMobile');
    innerMenuOne.classList.remove('showInnerMobile');
    arrowMTwo.classList.remove('arrow-down');
    arrowMOne.classList.remove('arrow-down');
    innerMenuThree.classList.remove('showInnerMobile');
    arrowMThree.classList.remove('arrow-down');
});

// Open Close Inner Mobile Menu 

innerToggleOne.addEventListener('click', () => {
    innerMenuOne.classList.toggle('showInnerMobile');
    innerMenuTwo.classList.remove('showInnerMobile');
    arrowMOne.classList.toggle('arrow-down');
    arrowMTwo.classList.remove('arrow-down');
    innerMenuThree.classList.remove('showInnerMobile');
    arrowMThree.classList.remove('arrow-down');
});
innerToggleTwo.addEventListener('click', () => {
    innerMenuTwo.classList.toggle('showInnerMobile');
    innerMenuOne.classList.remove('showInnerMobile');
    arrowMTwo.classList.toggle('arrow-down');
    arrowMOne.classList.remove('arrow-down');
    innerMenuThree.classList.remove('showInnerMobile');
    arrowMThree.classList.remove('arrow-down');
});

innerToggleThree.addEventListener('click', () => {
    innerMenuThree.classList.toggle('showInnerMobile');
    arrowMThree.classList.toggle('arrow-down');
});


// Search Overlay Toggle

const searchToggle = document.querySelector('#search-toggle');
const searchInput = document.querySelector('#search-overlay-input');

searchToggle.addEventListener('click', () => {
    searchInput.classList.toggle('show-searchbar-mobile');
    cart.classList.remove('show-cart-mobile');
});

const cartToggle = document.querySelector('#cart-toggle');
const cart = document.querySelector('#cart-overlay');

cartToggle.addEventListener('click', () => {
    cart.classList.toggle('show-cart-mobile');
    searchInput.classList.remove('show-searchbar-mobile');
});

// Products List toggles 
const productsInfo = document.querySelectorAll('#prod-info');
productsInfo.forEach(box => {
    box.addEventListener('click', () => {
        if (document.body.clientWidth <= 680) {
            const prodContent = box.querySelector('#prod-content');
            const prodArrow = box.querySelector('#prod-arrow');

            prodContent.classList.toggle('active-content');
            prodArrow.classList.toggle('active-arrow');
        
        }
    });
});



// Footer list toggles 


const fBoxes = document.querySelectorAll('#content');
fBoxes.forEach(box => {
    box.addEventListener('click', () => {
        if (document.body.clientWidth <= 980) {
            const fList = box.querySelector('#link-list');
            const fToggle = box.querySelector("#toggle-list");
            const fArrow = box.querySelector('#arrow-footer');
            fList.classList.toggle('active-footer');
            fArrow.classList.toggle('active-arrow')
            fToggle.classList.toggle('remove-border');
        }
    });
});












