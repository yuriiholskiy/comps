function cb(event, el, color = '#111') {
  el.style.overflow = 'hidden';

  // init "ripple" element
  const pulseDiv = document.createElement('div');
  pulseDiv.classList.add('pulse');
  pulseDiv.style.backgroundColor = color;

  const maxVal = Math.max(el.clientWidth, el.clientHeight);
  const imRect = el.getBoundingClientRect();

  // add coords and width
  pulseDiv.style.width = pulseDiv.style.height =
    maxVal + 'px';
  pulseDiv.style.left =
    event.clientX - imRect.left - maxVal / 2 + 'px';
  pulseDiv.style.top =
    event.clientY - imRect.top - maxVal / 2 + 'px';

  // appending and add animation
  el.appendChild(pulseDiv);
  pulseDiv.classList.add('anim');
  pulseDiv.addEventListener('animationend', () => {
    // remove element on animation end
    pulseDiv.classList.remove('anim');
    el.removeChild(pulseDiv);
  });
}

export default {
  bind(el, bindings) {
    el.addEventListener('click', (event) => {
      event.stopPropagation();
      // if(bindings.modifiers.self) {
      // 	if(el !== event.target) return;
      // }
      cb(event, el, bindings.value);
    });
  },
  unbind(el) {
    el.removeEventListener('click', cb);
    el.style.overflow = 'visible';
  },
};
