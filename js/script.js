"use strict"

window.addEventListener('load', windowLoad);

function windowLoad(){
    document.addEventListener('click', documentActions);
}

const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.body-main-block__arrow.swiper-button-next',
      prevEl: '.body-main-block__arrow.swiper-button-prev',
    },
  });




function documentActions(e){
    const targetElement = e.target;
    if(targetElement.hasAttribute('data-goto')){
        const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
        const headerHeight = document.querySelector(`.header`).offsetHeight;

        if(gotoElement){
            window.scrollTo({
                top: gotoElement.offsetTop - headerHeight,
                behavior: "smooth"
            });
        }

        e.preventDefault();
    }
    //Works filter'items-works__type'
    if(targetElement.classList.contains('tabs-deals__button') && !targetElement.classList.contains('active')){
        const activeElement = document.querySelector(`.tabs-deals__button.active`);
        const elements = document.querySelectorAll(`.item-tabs__item`);
        const elementType = targetElement.dataset.workType;

        activeElement.classList.remove('active');
        targetElement.classList.add('active');

        elements.forEach(element => {
            !elementType || element.dataset.workType === elementType ?
                element.hidden = false : element.hidden = true;
        });
    }
}
