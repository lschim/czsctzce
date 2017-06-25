var express = require('express')
var router = express.Router()
const RADIUS = 10
const RESPONSE = [
{t: 11, x: 133, y: 115},
{t: 12, x: 133, y: 123},
{t: 13, x: 135, y: 123},
{t: 14, x: 130, y: 118}]

/* GET users listing. */
router.get('/level1', function (req, res, next) {
  res.render('level1')
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
  // TODO : unlock lvl 2
  console.log('Level 2 unlocked !!')
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ achieved: achieved }))
})

router.get('/level2', function (req, res, next) {
  res.render('level2')
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
  let achieved = testLevel2(req.body['selected[]'])
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({achieved: achieved}))
})

router.get('/level3', function (req, res, next) {
  res.render('level3')
})

export default router
