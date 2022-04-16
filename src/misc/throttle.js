class Throttler {
  prevTime = 0

  fire(cb, delay = 800) {
    const current = Date.now()
    if (current - this.prevTime > delay) {
      cb()
      this.prevTime = current
    }
  }
}

const throttler = new Throttler()
export default throttler
