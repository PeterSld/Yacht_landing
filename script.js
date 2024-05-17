const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx)=>{
    slide.style.transform = `translateX(${indx*100}%)`;
})
let curSlide = 0;
let maxSlide = slides.length - 1;
const nextSlide = document.querySelector(".btn-next");
nextSlide.addEventListener("click",function(){
    if (window.innerWidth <601){
        if (curSlide === maxSlide){
            curSlide=0;
        } else {
            curSlide++;
        }
    } else {
        if (curSlide === maxSlide-2){
            curSlide=0;
        } else {
            curSlide++;
        }
    }
    slides.forEach((slide,indx)=>{
        slide.style.transform = `translateX(${100*(indx-curSlide)}%)`;
    });
});
const prevSlide = document.querySelector(".btn-prev");
prevSlide.addEventListener("click",function(){
    if (window.innerWidth <601){
        if (curSlide === 0){
            curSlide=maxSlide;
        } else {
            curSlide--;
        }
    } else {
        if (curSlide === 0){
            curSlide=maxSlide-2;
        } else {
            curSlide--;
        }
    }

    slides.forEach((slide,indx)=>{
        slide.style.transform = `translateX(${100*(indx-curSlide)}%)`;
    });
});

const gallerybtn = document.getElementById("galleryOpen");
const galleryContent = document.querySelector(".galleryContent");
const gallery = document.querySelector(".gallery");
const galleryClose = document.getElementById("galleryClose")
gallerybtn.addEventListener("click", function(){
    galleryContent.classList.remove("hide");
    galleryClose.classList.remove("hide");
    gallerybtn.classList.add("hide");
})
galleryClose.addEventListener("click", function(){
    galleryContent.classList.add("hide");
    galleryClose.classList.add("hide");
    gallerybtn.classList.remove("hide");
})