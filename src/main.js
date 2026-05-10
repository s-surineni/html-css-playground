import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>


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
    <div class="card progressbar-card">
      <h2>📊 Progress Bar</h2>
      <p>Interactive progress bar demonstrations and examples</p>
      <a href="/src/progressbar/progressbar.html" class="progressbar-link">View Progress Bars →</a>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
