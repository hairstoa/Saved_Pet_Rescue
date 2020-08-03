/* CITATION - This carousel code was inspired by:
Powell, Kevin(2019)."How to code a carousel with HTML, CSS and JavaScript - from scratch".
[YouTube video].https://www.youtube.com/watch?v=gBzsE0oieio.
*/
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const nav = document.querySelector('.carousel-nav');
const dots = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const toggleArrowHidden = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0){
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
  else if (targetIndex === slides.length-1){
    nextButton.classList.add('is-hidden');
    prevButton.classList.remove('is-hidden');
  }
  else{
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}
// Move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = nav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);
  // Move to the previous slide
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  toggleArrowHidden(slides, prevButton, nextButton, prevIndex);
});
// Move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = nav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    // Move to the next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    toggleArrowHidden(slides, prevButton, nextButton, nextIndex);
});
// Swap slides by bottom buttons
nav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
// If the click was not close to a button, return
  if (!targetDot) return;
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = nav.querySelector('.current-slide')
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);

  updateDots(currentDot, targetDot);
  toggleArrowHidden(slides, prevButton, nextButton, targetIndex);

});
document.onload = setInterval(() =>{
  const currentSlide = track.querySelector('.current-slide');
  var nextSlide = currentSlide.nextElementSibling;
  const currentDot = nav.querySelector('.current-slide');
  var nextDot = currentDot.nextElementSibling;
  var nextIndex = slides.findIndex(slide => slide === nextSlide);
  if (nextSlide == null){
    nextIndex = 0;
    nextSlide = slides[0];
    nextDot = dots[0];
  }
  // Move to the next slide
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  toggleArrowHidden(slides, prevButton, nextButton, nextIndex);
}, 5000);
