const button = document.querySelector(".add-btn");
const wrapper = document.querySelector(".wrapper");
const MAX_LIMIT = 3;
button.addEventListener("click", handleButtonClick)
const que = [];
let activeCount = 0;

function handleButtonClick() {
    const bar = createProgressBarUI();
    que.push(() => startTrans(bar))
    processQueue();
}
function processQueue() {
    if (activeCount < MAX_LIMIT && que.length > 0) {
        activeCount++;
        const startTrans = que.shift();
        startTrans();
    }

}

function startTrans(bar) {
      requestAnimationFrame(() => {
    bar.style.width = '100%';
  });

    bar.addEventListener('transitionend', () => {
    activeCount--;
    processQueue(); // Slot opened up! Check the queue.
  }, { once: true });
}
function createProgressBarUI() {
    const progressContainer = document.createElement('div');
    progressContainer.className= "progress-container";

    const progressFill = document.createElement('div');
    progressFill.className= "progress-fill";

    wrapper.appendChild(progressContainer);
    progressContainer.appendChild(progressFill);
    return progressFill;
}