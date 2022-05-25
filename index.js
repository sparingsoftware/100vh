/**
 * Check if device is mobile
 *
 * @returns {Boolean}
 */
function isMobile() {
  let check = false
  ;(function (a) {
    if (/(android|webOS|ip(hone|ad|od)|blackberry|windows phone)/i.test(a)) check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}

/**
 * Resize handler
 *
 * @arg cb {Event}
 */
function onResize(cb) {
  // Create resize handler
  function handler(e) {
    return cb(window.innerWidth, window.innerHeight, e)
  }

  // Add resize listeners
  window.addEventListener('resize', handler)
  if (screen.orientation) {
    screen.orientation.addEventListener('change', handler)
  } else {
    window.addEventListener('orientationchange', handler)
  }
  // Immediately execute the resize handler
  handler()
}

/**
 * Main execution function
 *
 * @void
 */
function main(width, height, e) {
  requestAnimationFrame(function () {
    const changedOrientation = e && (e.type === 'orientationchange' || e.type === 'change')
    if (!isMobile() || changedOrientation || changedOrientation === undefined) {
      const calculatedHeight = window.matchMedia('(orientation: portrait)')
        .matches
        ? Math.max(width, height)
        : Math.min(width, height)
      document.documentElement.style.setProperty('--vh', `${calculatedHeight}px`)
      window.vh = calculatedHeight
    }
  })
}

// Fire main function with resize listeners
function init() {
  onResize(main)
}

export default { init }
