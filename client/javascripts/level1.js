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



  function startLevel1() {

    $('#videoBox').off()

    $('#videoBox').on('click', (e) => {
    let mouse = getMousePosition(e)
    let parent = getPosition(e.target)
    $.post('/levels/level1',
      {t: $('#videoBox').get(0).currentTime, x: mouse.x - parent.x, y: mouse.y - parent.y},
      function (data, textStatus, jqXHR) {
        console.log('Is level succeeded ?' + data.achieved)
        if(data.achieved) {
          $('#videoBox').get(0).pause()
          setInstructionsText('Félicitations !!! Tu as sauvé ce pauvre enfant de la noyade !!')
          setInstructionsButton('Niveau 2', () => {
            window.location = '/levels/level2'
          })
          showInstructions()
        }
      })
    })

    $('#videoBox').on('ended', () => {
      setInstructionsText('Oh noooon, tu n\'as pas été assez rapide, et la personne s\'est noyée. Tu as le droit de recommencer, car il est évident que personne ne peut égaler Czsctzce.')
      setInstructionsButton('Recommencer', () => {
        hideInstructions()
        startLevel1()
      })
      showInstructions()
    })

    $('#videoBox').get(0).play()

  }

  setInstructionsText('<div>Bienvenue aventurière, dans la chasse au trésor de Czsctzce. <br/> Accompli tous les niveaux pour prouver que tu es digne d\'obtenir le trésor de Czsctzce!<br/></div>')
  setInstructionsButton('A l\'aventure!', () => {
    setInstructionsButton('C\'est parti', () => {
      hideInstructions()
      startLevel1()
    })
    setInstructionsText('Czsctzce a l\'oeil d\'un faucon, et les réflexes d\'un cougar. Prouve que tu peux égaler ses compétences en maître nageuse en cliquant sur la personne sur le point de se noyer!')
  })
  showInstructions()

})
