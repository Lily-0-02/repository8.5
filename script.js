const swiper = new Swiper('.brands', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
const showAllButton = document.querySelector('.show-all');
const brands = document.querySelector('.brands');

showAllButton.addEventListener('click', function() {
    brands.classList.toggle('brands--expanded');
    
       const isExpanded = brands.classList.contains('brands--expanded');
    showAllButton.classList.toggle ('show-all--expanded', isExpanded);
    showAllButton.childNodes[2].textContent = isExpanded ? 'Скрыть' : 'Показать все';
});