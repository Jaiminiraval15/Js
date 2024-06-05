
const slide = document.querySelector('.slides');
 const img = document.getElementById('img');
 const prev = document.querySelector('prev');
 const next = document.querySelector('next');
 let images = [];
 let currentSlide = 0;document.addEventListener('DOMContentLoaded', function() {
    createImage();
    display(currentSlide);
})
 
 img.addEventListener('change', function(e) {
    images = Array.from(e.target.files);
    createImage();
    display(currentSlide);
 })
function createImage(){
    slide.innerHTML = '';
    images.forEach(image => {
        const img = new Image();
        img.src = URL.createObjectURL(image);
        slide.appendChild(img);
    });
}
function display(slideIndex){
    currentSlide = slideIndex;
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
}
prev.addEventListener('click', function(){ 
    if(currentSlide > 0){
        display(currentSlide - 1);
    }
});
next.addEventListener('click', function(){
    if(currentSlide < images.length - 1){
        display(currentSlide + 1);
    }
});