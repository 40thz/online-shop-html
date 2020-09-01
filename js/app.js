$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: [],
        loop: true
    });
});


const formelement = document.querySelector('.header__panel__search');
const btnCategory = document.querySelector('.category-item');

let textitemcategory = '';

function btnCategryToggle() {
    formelement.querySelector('.header__panel__search__category__dropdown').classList.toggle('block');
}

function toggleelem(e){
    if(event.target.classList.contains('dropdown-item')){
        let targetText = e.target.textContent;
        textitemcategory = targetText;
        btnCategory.querySelector('span').textContent = textitemcategory;
        formelement.querySelector('.header__panel__search__category__dropdown').classList.remove('block')
    }
}


btnCategory.addEventListener('click', btnCategryToggle);
formelement.addEventListener('click', toggleelem);

