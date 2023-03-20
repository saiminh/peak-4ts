window.addEventListener('load', function() {
  initFourTs();
})

const initFourTs = function(){
  const fourts = Array.from(document.querySelectorAll('.peak-four-ts'));
  
  fourts.forEach(fourt => {

    // observer the first span for intersection
    let observer = new IntersectionObserver(callback, options);
    let target = fourt.querySelector('.peak-four-ts-title span:first-child');
    observer.observe(target);

    //delay of the animation per letter
    fourt.querySelectorAll('.peak-four-ts-title span:not(:first-child)').forEach((span, index) => {
      span.style.transitionDelay = index * .02 + 's';
    })

    const toggle = fourt.querySelector('.peak-four-ts-title'),
          content = fourt.querySelector('.peak-four-ts-content-inner'),
          contentHeight = content.offsetHeight;
    let isOpen = false;

    toggle.addEventListener('click', function() {
      content.parentElement.style.transition = 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      fourt.classList.toggle('peak-four-ts-open');
      
      if ( !isOpen ) {
        content.parentElement.style.height = contentHeight+'px';
      } else {
        content.parentElement.style.height = 0;
      }
      isOpen = !isOpen;
    })

    window.addEventListener('resize', function() {
      observer.unobserve(target);
    })

  })
}

let options = {
  root: document.body,
  rootMargin: '250px 0px 0px 250px',
  threshold: 1.0
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.parentElement.classList.add('intersecting');
    } else {
      entry.target.parentElement.classList.remove('intersecting');
    }
  })
}

window.addEventListener('resize', function() {
  initFourTs();
})