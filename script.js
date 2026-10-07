let swiper;

const showAllButton = document.querySelector('.show-all');
const brands = document.querySelector('.brands');

function initSwiper() {
    if (window.innerWidth < 768 && !swiper) {
        swiper = new Swiper('.brands', {
            spaceBetween: 16,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (window.innerWidth >= 768 && swiper) {
        swiper.destroy(true, true);
        swiper = null;
    }
}

initSwiper();

window.addEventListener('resize', initSwiper);

showAllButton.addEventListener('click', function () {
    brands.classList.toggle('brands--expanded');

    const isExpanded = brands.classList.contains('brands--expanded');

    showAllButton.classList.toggle('show-all--expanded', isExpanded);

    if (isExpanded) {
        showAllButton.lastChild.textContent = ' Скрыть';
    } else {
        showAllButton.lastChild.textContent = ' Показать все';
    }
});