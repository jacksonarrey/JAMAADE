let preveiwContainer = document.querySelector('.product-preview');
let preveiwBox = preveiwContainer.querySelectorAll('.preview');

  document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick = () =>{
      preveiwContainer.computedStyleMap.display= 'flex';
      let name = product.getAttribute('data-name');
      previewBox.forEach(preview =>{
       let target = preview.getAttribute('data-target');
        if(name == target){
          preview.classList.add('active');
        }


      });
    };
  });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });