var assert        = require('assert')
  , wagnerFischer = require('../lib/wagner-fischer')

it('should compute edit distance correctly', function () {

  // shamelessly copied from http://ntz-develop.blogspot.com.br/2011/03/fuzzy-string-search.html

  assert.equal(wagnerFischer('honey', 'monkey'), 2)

  assert.equal(wagnerFischer('mockery', 'monkey'), 2)
  assert.equal(wagnerFischer('mockery', 'honey'),  4)

  assert.equal(wagnerFischer('hockey', 'monkey'), 2)
  assert.equal(wagnerFischer('hockey', 'honey'),  2)

  assert.equal(wagnerFischer('turkey', 'monkey'), 3)
  assert.equal(wagnerFischer('turkey', 'corky'),  3)

  assert.equal(wagnerFischer('socket', 'monkey'), 3)
  assert.equal(wagnerFischer('socket', 'corky'),  4)
})

it('should compute no distance', function () {
  assert.equal(wagnerFischer('',    ''),    0)
  assert.equal(wagnerFischer('foo', 'foo'), 0)
  assert.equal(wagnerFischer('B@®', 'B@®'), 0)
  assert.equal(wagnerFischer('here goes a somewhat long input', 'here goes a somewhat long input'), 0)
})

it('should raise an error', function () {
  var msg = /Pass two strings!/

  assert.throws(function () { wagnerFischer()                  }, msg)
  assert.throws(function () { wagnerFischer('foo')             }, msg)
  assert.throws(function () { wagnerFischer(1)                 }, msg)
  assert.throws(function () { wagnerFischer(1, 2)              }, msg)
  assert.throws(function () { wagnerFischer('foo', 1337)       }, msg)
  assert.throws(function () { wagnerFischer('', null)          }, msg)
  assert.throws(function () { wagnerFischer(/lol/, new Date()) }, msg)
})

