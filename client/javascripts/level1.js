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
          //Ok c'est le corrigé mais j'ai pas le temps de protéger mieux que ca
          setInstructionsText('Félicitations !!! Tu as sauvé ce pauvre enfant de la noyade !!<br/>Voici ce qu\'aurait fait <strong class="text-danger">Czsctce</strong> dans la vraie vie (admire son bronzage et ses muscles) : <br/><video controls="controls"><source src="/videos/corrige.mp4" type="video/mp4"></video>')
          setInstructionsButton('Niveau 2', () => {
            window.location = '/levels/level2'
          })
          $('#instructions-button').attr('style', 'margin-top:0px;')
          showInstructions()
        }
      })
    })

    $('#videoBox').on('ended', () => {
      setInstructionsText('Oh noooon, tu n\'as pas été assez rapide, et la personne s\'est noyée. Tu as le droit de recommencer, car il est évident que personne ne peut égaler <strong class="text-danger">Czsctzce</strong>.')
      setInstructionsButton('Recommencer', () => {
        hideInstructions()
        startLevel1()
      })
      showInstructions()
    })

    $('#videoBox').get(0).play()

  }

  setInstructionsText('<div>Bienvenue aventurière, dans la chasse au trésor de <strong class="text-danger">Czsctzce</strong>. <br/> Accomplis tous les niveaux pour prouver que tu es digne d\'obtenir le trésor de <strong class="text-danger">Czsctzce</strong>!<br/></div>')
  setInstructionsButton('A l\'aventure!', () => {
    setInstructionsButton('C\'est parti', () => {
      hideInstructions()
      startLevel1()
    })
    setInstructionsText('<strong class="text-danger">Czsctzce</strong> a l\'oeil d\'un faucon, et les réflexes d\'un cougar. Prouve que tu peux égaler ses compétences en maître nageuse en cliquant sur la personne sur le point de se noyer!')
  })
  showInstructions()

})
