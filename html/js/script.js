
//faq toggle
const faqButtons = document.querySelectorAll('.js-faq-toggle');

faqButtons.forEach((button) => {

   button.addEventListener('click', () => {

      const faqItem = button.closest('.faq__item');

      const isOpen = faqItem.dataset.open === 'true';

      faqItem.dataset.open = isOpen ? 'false' : 'true';

   });

});

//スクロール
const fadeItems = document.querySelectorAll('.js-fade');

const fadeObserver = new IntersectionObserver((entries) => {

   entries.forEach((entry) => {

      if(entry.isIntersecting){

         entry.target.classList.add('is-active');

      }

   });

},{
   threshold: 0.2
});

fadeItems.forEach((item) => {
   fadeObserver.observe(item);
});