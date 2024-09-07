  const navigation = document.querySelector('.navigation');
  const stickyTrigger = document.querySelector('.sticky-trigger');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > stickyTrigger.offsetTop) {
      navigation.classList.add('sticky');
    } else {
      navigation.classList.remove('sticky');
    }
  });