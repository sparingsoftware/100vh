/**
 * Check if device is mobile
 *
 * @returns {Boolean}
 */

/**
 * Resize handler
 *
 * @arg cb {Event}
 */
 function onResize (cb) {
  // Create resize handler
  function handler (e) {
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
  handler(null)
}


/**
 * Main execution function
 *
 * @void
 */
function main (width, height) {
  requestAnimationFrame(function () {
    const calculatedHeight = window.matchMedia('(orientation: portrait)')
      .matches
      ? Math.max(width, height)
      : Math.min(width, height)
    document.documentElement.style.setProperty('--vh', `${calculatedHeight}px`)
    window.vh = calculatedHeight
  })
}

// Fire main function with resize listeners
function init () {
  onResize(main)
}

export default { init }

