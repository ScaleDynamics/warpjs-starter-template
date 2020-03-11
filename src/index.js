'use strict'

// import WarpJS
import { defaultWarper as warp } from '@warpjs/warp'
import engine from '@warpjs/engine'

// init WarpJS
engine.init()

// back-end warp function
const hello = (name) => {
  // warp directive
  'warp +server -client'

  return `Hello ${name} from Node.js ${process.version}`
}

// on web page load
window.addEventListener('DOMContentLoaded', async () => {
  // call back-end function
  const response = await warp.call(hello, 'World')
  // show result in browser
  document.getElementById('result').innerHTML = response
})
