let express = require('express')
let router = express.Router()
const RADIUS = 10
const RESPONSE = [
{t: 11, x: 133, y: 115},
{t: 12, x: 133, y: 123},
{t: 13, x: 135, y: 123},
{t: 14, x: 130, y: 118}]
let currentLvl = 1
const defaultStateLvl3 = '____ _\'______________!'

let currentStateLvl3 = defaultStateLvl3
const lettersDefault = {
  'n': {pos: [0, 16, 17, 19], played: false},
  'o': {pos: [1, 15, 18], played: false},
  'u': {pos: [2], played: false},
  's': {pos: [3, 12, 13, 20], played: false},
  'm': {pos: [5, 8], played: false},
  'i': {pos: [7, 14], played: false},
  'p': {pos: [9], played: false},
  'r': {pos: [10], played: false},
  'e': {pos: [11], played: false}
 }
let lettersState = JSON.parse(JSON.stringify(lettersDefault)) // Dirty :D

function getVariablesToDisplay () {
  return {title: 'Czsctzce',
    lvl: currentLvl
    }
}
/* GET users listing. */
router.get('/level1', function (req, res, next) {
  res.render('level1', getVariablesToDisplay())
})

function inRange (x, target) {
  return ((x >= target - RADIUS) && (x <= target + RADIUS))
}

export function testLevel1 (t, x, y) {
  let correct = false
  RESPONSE.forEach((e) => {
    if (e.t === t && inRange(x, e.x) && inRange(y, e.y)) {
      correct = true
    }
  })
  return correct
}

router.post('/level1', function (req, res, next) {
  let achieved = testLevel1(parseInt(req.body.t), parseInt(req.body.x), parseInt(req.body.y))
  if (achieved) {
    currentLvl = 2
  }
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ achieved: achieved }))
})

router.get('/level2', function (req, res, next) {
  if (currentLvl < 2) {
    res.render('level' + currentLvl, getVariablesToDisplay())
  } else {
    res.render('level2', getVariablesToDisplay())
  }
})

function testLevel2 (selected) {
  if (!selected) {
    return false
  }
  for (let i = 0; i < 5; i++) {
    if (selected.indexOf(i.toString()) < 0) {
      return false
    }
  }
  return true
}

router.post('/level2', function (req, res, next) {
  let achieved
  if (currentLvl < 2) {
    achieved = false
  } else {
    achieved = testLevel2(req.body['selected[]'])
  }
  if (achieved) {
    currentLvl = 3
  }
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({achieved: achieved}))
})

router.get('/level3', function (req, res, next) {
  if (currentLvl < 3) {
    res.render('level' + currentLvl, getVariablesToDisplay())
  } else {
    resetLvl3()
    res.render('level3', getVariablesToDisplay())
  }
})

router.post('/level3/reset', function (req, res, next) {
  resetLvl3()
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({result: 'ok'}))
})

router.get('/level3/state', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({state: currentStateLvl3}))
})

router.post('/level3/letter', function (req, res, next) {
  let result = testLetter(req.body.letter)
  if (result) {
    let isFinished = checkFinishedLvl3()
    if (isFinished) {
      currentLvl = 4
    }
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({res: true, state: currentStateLvl3, finished: isFinished}))
  } else {
    resetLvl3()
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({res: false, state: currentStateLvl3, finished: false}))
  }
})

function checkFinishedLvl3 () {
  for (let l in lettersState) {
    if (!lettersState[l].played) {
      return false
    }
  }
  return true
}

function testLetter (char) {
  if (lettersState[char] && lettersState[char].played === false) {
    // Letter is valid !!
    let letter = lettersState[char]
    for (let i = 0; i < letter.pos.length; i++) {
      currentStateLvl3 = setCharAt(currentStateLvl3, letter.pos[i], char)
    }
    lettersState[char].played = true
    return true
  }
  return false
}

function resetLvl3 () {
  currentStateLvl3 = defaultStateLvl3
  lettersState = JSON.parse(JSON.stringify(lettersDefault))
}

// Replace char at index index in string with replacement
function setCharAt (string, index, replacement) {
  return string.substr(0, index) + replacement + string.substr(index + 1)
}

router.get('/password', function (req, res, next) {
  if (currentLvl < 4) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({password: 'RETOURNE FAIRE LES NIVEAU FLEMASSE, TU CROIS QUE JE ME SUIS CASSE LE CUL POUR RIEN ???'}))
  } else {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({password: 'La caverne c\'est mon tapis, et le mot de passe à indiquer au gardien est <br/> \"Garde le cadeau, je n\'en veux pas\"'}))
  }
})

export default router
