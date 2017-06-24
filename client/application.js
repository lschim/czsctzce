
window.showInstructions = function showInstructions () {
  $('#instructions').show()
}

window.hideInstructions = function hideInstructions () {
  $('#instructions').hide()
}

window.setInstructionsButton = function setInstructionsButton (text, f) {
  $('#instructions-button').html(text)
  $('#instructions-button').off()
  $('#instructions-button').on('click', f)
}

window.setInstructionsText = function setInstructionsText (text) {
  $('#instructions-text').html('')
  $('#instructions-text').append(text)
}
