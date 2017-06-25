$(function () {

  function getSelectedElements () {
    let selected = []
    if(window.getSelection().rangeCount < 1){
      return selected
    }
    for (let i = 0; i < 5; i++) {
      if ($('#'+i).get(0) && window.getSelection().getRangeAt(0).intersectsNode($('#' + i).get(0))) {
        selected.push(i)
      }
    }
    return selected
  }

  $('body').on('mouseup', (e) => {
    if (!$.contains($('#navbar').get(0), e.target) && !$.contains($('#instructions').get(0), e.target)) {
      $.post('/levels/level2',
        {selected: getSelectedElements()},
        function (data, textStatus, jqXHR) {
          console.log('Is level succeeded ?' + data.achieved)
          if (data.achieved) {
            setInstructionsText('En effet !!! Czsctzce est tellement belle que chaque photo de Czsctzce est la plus belle !!')
            setInstructionsButton('Niveau 3', () => {
              hideInstructions()
              window.location = '/levels/level3'
            })
            showInstructions()
          }
        },
        'json'
      )
    }
  })

  $('.img-fluid').on('click', () => {
    setInstructionsText('Effectivement, cette photo de Czsctzce est magnifique. Mais je trouve qu\'il y en a une autre qui est la plus belle photo de Czsctzce.<br/> Sélectionne la plus belle photo de Czsctsce!')
    setInstructionsButton('Je suis d\'accord', () => {
      hideInstructions()
    })
    showInstructions()
  })

  // Display instructions for level 2
  setInstructionsText('Czsctzce est une belle personne. Sélectionne la plus belle photo de Czsctzce!')
  setInstructionsButton('Facile!', () => {
    hideInstructions()
  })
  showInstructions()
})

