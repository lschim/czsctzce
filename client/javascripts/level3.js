$(function () {

  let nbrLetters
  const nbrLettersInit = 10
  let timeoutLettersValue // Add letters every x ms
  let timeoutLetters // Returned by setInterval
  const timeoutLettersValueInit = 1000
  let timeoutTick // Returned by setInterval
  let timeoutTickValue
  const timeoutTickValueInit = 100


  function resetLevel3 () {
    $('#correctLetters').html('____ _\'______________!')
    nbrLetters = nbrLettersInit
    timeoutLettersValue = timeoutLettersValueInit
    timeoutTickValue = timeoutTickValueInit
    $('.letter').each((index, element) => {
      $(element).remove()
    })
  }

  function startLevel3 () {
    timeoutLetters = setInterval(addLetters, timeoutLettersValue)
    timeoutTick = setInterval(moveLetters, timeoutTickValue)
  }

  function stopLevel3 () {
    clearInterval(timeoutLetters)
    clearInterval(timeoutTick)
  }

  function moveLetters () {
    const width = $('#letters').width()
    const height = $('#letters').height()
    const offsetParent = $('#letters').offset()

    $('.letter').each((index, element) => {
      let test = $(element)
      let offset = test.offset()
      let position = {top: offset.top - offsetParent.top, left: offset.left - offsetParent.left}
      let newPosition = {top: position.top + parseInt(test.attr('data-diry')), left: position.left + parseInt(test.attr('data-dirx'))}
      let newOffset = {top: newPosition.top + offsetParent.top, left: newPosition.left + offsetParent.left}
      test.offset(newOffset)
      if (newPosition.top < 0 || newPosition.top > height || newPosition.left < 0 || newPosition.left > width) {
        test.remove()
      }
    })
  }

  function addLetters () {
    for (let i = 0; i < nbrLetters; i++) {
      generateLetter()
    }
  }

  function generateLetter () {
    let dirx = getRandDir()
    let diry = getRandDir()
    let offsetParent = $('#letters').offset()
    while (dirx === 0 && diry === 0) {
      dirx = getRandDir()
      diry = getRandDir()
    }
    let char = getAsciiCodeOfLetter()

    let newLetter = $('<div class="letter" data-dirx="' + dirx + '" ' + 'data-diry=' + diry + '">' + String.fromCharCode(char) + '</div>')
    newLetter.on('click', clickOnLetter)
    $('#letters').append(newLetter)
    let position = generateStartingPosition(dirx, diry)
    newLetter.offset({top: position.top + offsetParent.top, left: position.left + offsetParent.left})
  }

  function clickOnLetter (e) {
    $(e.target).remove()
    $.post('/levels/level3/letter',
        {letter: $(e.target).html()},
        function (data, textStatus, jqXHR) {
          if (data.finished) {
            // CEST GAGNNEEEEEEEE
            stopLevel3()
            setInstructionsText('OUIIIIIII BRAVOOOO !!!<br/> Tu as prouvé ta valeur, digne d\'une vraie <strong class="text-danger">Czsctzce</strong><br/>')
            setInstructionsButton('Merci', () => {
              $.get('/levels/password', function (data, textStatus, jqXHR) {
                setInstructionsText('Voici les indices te permettant de récupérer ton trésor : <br/>'+data.password)
                setInstructionsButton('Je sais exactement ce qu\'il faut que je fasse', () => {
                  window.location('/')
                  hideInstructions()
                })
                $('#instructions-button').attr('style', 'left:20%;') //Dirty... sorry :)
              })
            })
            showInstructions()
          } else {

            if (data.res) {
              // It was a correct letter !!
              nbrLetters += 2
              clearInterval(timeoutLetters)
              // timeoutLettersValue -= 200
              timeoutLetters = setInterval(addLetters, timeoutLettersValue)
              clearInterval(timeoutTick)
              timeoutTickValue /= 1.1
              timeoutTick = setInterval(moveLetters, timeoutTickValue)
              $('#correctLetters').html(data.state)
            } else {
              stopLevel3()
              // C'est raté
              setInstructionsText('Les règles de ce pendu sont dégeulasses.<br/> Une seule erreur et il faut tout recommencer.<br/>')
              setInstructionsButton('Je déteste ce jeu', () => {
                resetLevel3()
                hideInstructions()
                startLevel3()
              })
              showInstructions()
            }
          }
        },
        'json'
      )
  }

  function generateStartingPosition (dirx, diry) {
    const width = $('#letters').width()
    const height = $('#letters').height()
    if (dirx === 0) {
      if (diry < 0) {
        // It goes up
        return {top: height, left: getRandPx(width)}
      } else {
        // It goes down
        return {top: 0, left: getRandPx(width)}
      }
    }

    if (diry === 0) {
      if (dirx < 0) {
        // It goes left
        return {top: getRandPx(height), left: width}
      } else {
        // It goes right
        return {top: getRandPx(height), left: 0}
      }
    }

    let corner = getRandPx(1)
    if (dirx < 0) {
      if (diry < 0) {
        // It goes up and left
        return {top: height - (corner * getRandPx(height)), left: width - ((1 - corner) * getRandPx(width))}
      } else {
        // It goes down and left
        return {top: corner * getRandPx(height), left: width - ((1 - corner) * getRandPx(width))}
      }
    } else {
      if (diry < 0) {
        // It goes up and right
        return {top: height - (corner * getRandPx(height)), left: (1 - corner) * getRandPx(width)}
      } else {
        // It goes down and right
        return {top: corner * getRandPx(height), left: (1 - corner) * getRandPx(width)}
      }
    }
  }

  function getRandPx (max) {
    return Math.floor(Math.random() * max + 1) // Between 0 and max
  }

  function getRandDir () {
    let val = (Math.floor(Math.random() * 11) - 5) // Between -5 and 5
    if (val < 0) {
      return val - 4
    } else if (val > 0) {
      return val + 4
    }
    return val
  }


  function getAsciiCodeOfLetter () {
    return Math.floor(Math.random() * 26) + 97 // Between 97 and 122
  }

  setInstructionsText('Félicitations ! Bienvenue au 3ème niveau.<br/> <strong class="text-danger">Czsctzce</strong> sait faire marcher sa tête, et son corps. Prouve que tu peux en faire autant en résolvant le pendu de la caverne secrète !!')
  setInstructionsButton('Je peux le faire', () => {
    hideInstructions()
    startLevel3()
  })
  resetLevel3()
  showInstructions()
})
