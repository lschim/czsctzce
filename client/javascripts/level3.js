$(function () {

  let nbrLetters = 4
  let intervalTimer = 5000 // Add letters every x ms
  let timeCross = 2000 // ms to cross screen
  let timeoutLetters // Returned by setInterval
  let timeoutTick


  function resetLevel3 () {
    $('#letters').html('____ _\'______________!')
    nbrLetters = 4
    intervalTimer = 5000
    timeCross = 2000
  }

  function startLevel3 () {
    timeoutLetters = setInterval(addLetters, intervalTimer)
    timeoutTick = setInterval(moveLetters, 10)
  }

  function moveLetters () {
    const width = $('#letters').width
    const length = $('#letters').length
    $('.letter').each((index) => {
      let offset = $(this).offset()
      let newOffset = {top: offset.top + parseInt($(this).attr('data-diry')), left: offset.left + parseInt($(this).attr('data-dirx'))}
      $(this).offset(newOffset)
      if (newOffset.top < 0 || newOffset.top > length || newOffset.left < 0 || newOffset.left > width) {
        $(this).remove()
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
    while (dirx === 0 && diry === 0) {
      dirx = getRandDir()
      diry = getRandDir()
    }
    let char = getAsciiCodeOfLetter()

    let newLetter = $('<div class="letter" data-dirx="' + dirx + '" ' + 'data-diry=' + diry + '">' + String.fromCharCode(char) + '</div>')
    $('#letters').append(newLetter)
    newLetter.offset = generateStartingOffset(dirx, diry)
  }

  function generateStartingOffset (dirx, diry) {
    const width = $('#letters').width
    const length = $('#letters').length
    if (dirx === 0) {
      if (diry < 0) {
        // It goes up
        return {top: length, left: getRandPx(width)}
      } else {
        // It goes down
        return {top: 0, left: getRandPx(width)}
      }
    }

    if (diry === 0) {
      if (dirx < 0) {
        // It goes left
        return {top: getRandPx(length), left: width}
      } else {
        // It goes right
        return {top: getRandPx(length), left: 0}
      }
    }

    let corner = getRandPx(1)
    if (dirx < 0) {
      if (diry < 0) {
        // It goes up and left
        return {top: length - (corner * getRandPx(length)), left: width - ((1 - corner) * getRandPx(width))}
      } else {
        // It goes down and left
        return {top: corner * getRandPx(length), left: width - ((1 - corner) * getRandPx(width))}
      }
    } else {
      if (diry < 0) {
        // It goes up and right
        return {top: length - (corner * getRandPx(length)), left: (1 - corner) * getRandPx(width)}
      } else {
        // It goes down and right
        return {top: corner * getRandPx(length), left: (1 - corner) * getRandPx(width)}
      }
    }
  }

  function getRandPx (max) {
    return Math.floor(Math.random() * max + 1) // Between 0 and max
  }

  function getRandDir () {
    return Math.floor(Math.random() * 5) - 2 // Between -2 and 2
  }

  function getAsciiCodeOfLetter () {
    return Math.floor(Math.random() * 26) + 97 // Between 97 and 122
  }

  setInstructionsText('Félicitations ! Bienvenue au 3ème niveau.<br/> Czsctzce sait faire marcher sa tête, et son corps. Prouve que tu peux en faire autant en résolvant le pendu de la caverne secrète !!')
  setInstructionsButton('Je peux le faire', () => {
    hideInstructions()
    startLevel3()
  })
  resetLevel3()
  showInstructions()
})
