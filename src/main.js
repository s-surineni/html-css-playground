import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card grid-card">
      <h2>🎯 Learn CSS Grid</h2>
      <p>Master CSS Grid Layout with interactive examples and practice exercises</p>
      <a href="/grid.html" class="grid-link">Start Learning Grid →</a>
    </div>
    <div class="card animation-card">
      <h2>✨ Height Animations</h2>
      <p>Explore components with smooth height transitions - accordions, dropdowns, and more</p>
      <a href="/height-animation.html" class="animation-link">View Animations →</a>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
