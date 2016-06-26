/*
 * Sticky component
*/

export const sticky = ($el) => {

  const $elId = document.getElementById($el);

  if(!$elId) return;

  const $elTop = $elId.offsetTop;

  console.log($elId, $elTop);

  const checkScroll = () => {
    const scrollTop = window.pageYOffset;

    if(scrollTop >= $elTop) {
      $elId.classList.add('is-sticky');
    }
    else {
      $elId.classList.remove('is-sticky');
    }
  };

  window.addEventListener('scroll', checkScroll);

}
