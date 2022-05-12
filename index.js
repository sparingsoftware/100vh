/**
 * Check if device is mobile
 *
 * @returns {Boolean}
 */
function isMobile () {
  var check = false;
  (function (a) {
    if (/(android|webOS|ip(hone|ad|od)|blackberry|windows phone)/i.test(a)) check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}

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
  screen.orientation.addEventListener('change', handler)

  // Immediately execute the resize handler
  handler()
}


/**
 * Main execution function
 *
 * @void
 */
function main (width, height, e) {
  requestAnimationFrame(function () {
    var changedOrientation = e && e.type === 'change'

    if (!isMobile() || changedOrientation || changedOrientation === undefined) {
      var calculatedHeight = changedOrientation ? width : height
      document.documentElement.style.setProperty('--vh', `${calculatedHeight}px`)
      window.vh = calculatedHeight
    }
  })
}

// Fire main function with resize listeners
function init () {
  onResize(main)
}

export default { init }

