const test = require('tape')
const Greeter = require('../greeter').Greeter

class FakeClock {
  constructor (hour) {
    this.hour = hour
  }

  currentHour () {
    return this.hour
  }
}

test('should say "good night" at midnight', (t) => {
  const greeter = new Greeter(new FakeClock(0))
  t.equal(greeter.greet(), 'Good night')
  t.end()
})

test('should never return undefined', (t) => {
  for (let i = 0; i < 24; i++) {
    const greeter = new Greeter(new FakeClock(i))
    t.notEqual(greeter.greet(), undefined)
  }
  t.end()
})
