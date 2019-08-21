class Stopwatch {
  constructor(display) {
    this.running = false;
    this.display = display;
    this.toZero();
    this.print(this.times);
  }

  toZero() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }

  print() {
    this.display.innerText = this.format(this.times);
  }

  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }

  reset() {
    this.stop();
    this.toZero();
    this.print();
  }

  calculate() {
    this.times.miliseconds += 1;
    if (this.times.miliseconds >= 100) {
      this.times.seconds += 1;
      this.times.miliseconds = 0;
    }
    if (this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
    }
  }

  stop() {
    this.running = false;
    clearInterval(this.watch);
  }

  memory() {
    return this.format(this.times);
  }
}

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

const startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = '0' + result;
  }
  return result;
}

const memoryList = document.querySelector('.memory-times ul');

const memoryButton = document.getElementById('memory');
memoryButton.addEventListener('click', () => {
  let liElement = document.createElement('li')
  liElement.innerText = stopwatch.memory();
  memoryList.appendChild(liElement);
});

const clearListButton = document.getElementById('clear-list');
clearListButton.addEventListener('click', () => {
  memoryList.querySelectorAll('li').forEach(element => {
    element.remove();
  });
});

const onOffButton = document.getElementById('on-off');
onOffButton.addEventListener('click', () => {
  stopwatch.reset();
  document.querySelector('.stopwatch').classList.toggle('power-off');
});