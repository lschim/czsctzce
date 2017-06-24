$(function () {
  function getMousePosition (event) {
    return {
      x: event.pageX,
      y: event.pageY
    }
  }

  function getPosition (element) {
    let top = 0
    let left = 0
    do {
      top += element.offsetTop
      left += element.offsetLeft
    } while (element = element.offsetParent)
    return {x: left, y: top}
  }

  $('#videoBox').on('click', (e) => {
    let mouse = getMousePosition(e)
    let parent = getPosition(e.target)
    $.post('/levels/level1',
      {t: $('#videoBox').get(0).currentTime, x: mouse.x - parent.x, y: mouse.y - parent.y},
      function (data, textStatus, jqXHR) {
        console.log('Is level succeeded ?' + data.achieved)
      })
  })

  // ======== FOR DEBUG ===========
  $('#videoBox').on('mousemove', (e) => {
    const parent = getPosition(e.target)
    const mouse = getMousePosition(e)
    $('#x').text(mouse.x - parent.x)
    $('#y').text(mouse.y - parent.y)
  })

  // $('#videoBox').on('click', (e) => {
  //   const parent = getPosition(e.target)
  //   const mouse = getMousePosition(e)
  //   alert('Position x ' + (mouse.x - parent.x) + ' Position y ' + (mouse.y - parent.y))
  // })

  document.onkeypress =
  (e) => {
    if (e.which === 32) {
      let video = $('#videoBox').get(0)
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    }
  }
  // ========================
})
