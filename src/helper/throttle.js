class Throttler {
  prevTime = 0
  timer = null
  fire(cb, delay = 500) {
    const current = Date.now()
    if (current - this.prevTime > delay) {
      cb()
      this.prevTime = current
    } else {
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => cb(), delay)
    }
  }
}

const throttler = new Throttler()
export default throttler
