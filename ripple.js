    document.querySelector('.targetBtn').onclick = function(e) {
      let x = e.offsetX
      let y = e.offsetY
      let ripple = document.createElement('div')
      let style = document.createElement('style')
      let times =
        e.target.clientHeight > e.target.clientWidth
          ? e.target.clientHeight
          : e.target.clientWidth
      if (window.getComputedStyle(this, null).position === 'static') {
        this.style.position = 'relative'
      }
      this.style.overflow = 'hidden'
      style.setAttribute('type', 'text/css')
      style.innerHTML = `
      @keyframes ripple-bright {
        100% {
          background-color:rgba(255,255,255,0);
          transform: scale(${times});
        }
      }`
      ripple.style.cssText = `position: absolute;
	left:${x}px;
	top:${y}px;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color:rgba(255,255,255,0.8);
        animation: ripple-bright 1s ease-out;
        transform-origin: 50% 50%;
        pointer-events: none;`
      document.head.appendChild(style)
      e.target.appendChild(ripple)
      setTimeout(() => {
        document.head.removeChild(style)
        e.target.removeChild(ripple)
      }, 1000)
    }
