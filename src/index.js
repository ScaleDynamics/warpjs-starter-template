'use strict'

// import WarpJS
import { defaultWarper as warper } from '@warpjs/warp'
import engine from '@warpjs/engine'

// init WarpJS
engine.init()

// warp function
const hello = name => {
  // warp directive
  'warp +server -client'

  return `Hello ${name} from Node.js ${process.version}`
}

// on load
window.addEventListener('DOMContentLoaded', async () => {
  // call function with WarpJS
  const response = await warper.call(hello, 'World')
  document.getElementById('result').innerHTML = response
})
