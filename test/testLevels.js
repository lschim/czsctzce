import chai from 'chai'
chai.should()
import {testLevel1} from '../routes/levels'

describe('Level1', function () {
  it('Can succeed level1 by sending 11 128 110', function () {
    testLevel1(11, 128, 110).should.be.true
  })

  it('Can succeed level1 by sending 11 138 120', function () {
    testLevel1(11, 138, 120).should.be.true
  })

  it('Can succeed level1 by sending 12 128 128', function () {
    testLevel1(12, 128, 128).should.be.true
  })

  it('Can succeed level1 by sending 12 138 118', function () {
    testLevel1(12, 138, 118).should.be.true
  })

  it('Can succeed level1 by sending 13 130 123', function () {
    testLevel1(13, 130, 123).should.be.true
  })

  it('Can succeed level1 by sending 13 132 125', function () {
    testLevel1(13, 132, 125).should.be.true
  })

  it('Can succeed level1 by sending 14 135 113', function () {
    testLevel1(14, 135, 113).should.be.true
  })

  it('Can succeed level1 by sending 14 125 123', function () {
    testLevel1(14, 125, 123).should.be.true
  })

})
