const test = require('tape')
const UI = require('../ui').UI

class FakeInteractor {
  constructor (inputs) {
    this.inputs = inputs
    this.messages = []
  }

  readInput () {
    return this.inputs.shift()
  }

  printMessage (message) {
    this.messages.push(message)
  }
}

test('main loop', (t) => {
  /* Given the following inputs:
    - hello
    - oto
    - quit

    Check that the following messages are printed:
    - olleh
    - oto
    - That was a palindrome!
   */

  const interactor = new FakeInteractor(['hello', 'oto', 'quit'])
  const ui = new UI(interactor)
  ui.mainLoop()

  t.deepEqual(interactor.messages, ['olleh', 'oto', 'That was a palindrome!'])
  t.end()
})
