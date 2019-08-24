class Stopwatch extends React.Component {
    constructor() {
        super();
        this.state = {
          running : false,
          currentTime: {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
          }
        }
        this.empty = this.empty.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.memory = this.memory.bind(this);
        this.reset = this.reset.bind(this);
        this.printTime = this.printTime.bind(this);
        this.toZero = this.toZero.bind(this)
      }

      empty() {
        console.log('empty')
      }

     printTime() {
        document.getElementById('timer').innerText = format(this.state.currentTime);
      }

      
      start() {
        if (!this.state.running) {
          this.state.running = true;
          this.watch = setInterval(() => this.updateTime(), 10);
        }
      }
          
      stop() {
        this.state.running = false;
        clearInterval(this.watch);
      }

      updateTime() {    
        if (!this.state.running) return;
        this.calculate();
        this.printTime();
      }

      toZero() {
        console.log('toZero')
        this.state.currentTime = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
          };
      }
    
      reset() {
        this.stop();
        this.toZero();
        this.printTime()
      }
    
      calculate() {
        this.state.currentTime.miliseconds += 1;
        if (this.state.currentTime.miliseconds >= 100) {
          this.state.currentTime.seconds += 1;
          this.state.currentTime.miliseconds = 0;
        }
        if (this.state.currentTime.seconds >= 60) {
          this.state.currentTime.minutes += 1;
          this.state.currentTime.seconds = 0;
        }
      }
    
      memory() {
        return format(this.state.currentTime);
      }


      render() {
        return <div className='stopwatch'>
          <div id={'timer'}>00:00:00</div>
          <nav className={'controls'}>
            <a href={'#'} className={'button'} onClick={this.start}id={'start'}>►</a>
            <a href={'#'} className={'button'} onClick={this.stop}id={'stop'}>| |</a>
            <a href={'#'} className={'button'} onClick={this.reset}id={'reset'}>■</a>
            <a href={'#'} className={'button'} onClick={this.memory}id={'memory'}>M+</a>
            <a href={'#'} className={'button'} onClick={this.empty}id={'clear-list'}>CL</a>
            <a href={'#'} className={'button'} onClick={this.empty}id={'on-off'}>◙</a>
        </nav>      
        </div>
    }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = '0' + result;
  }
  return result;
}
function format(time) {
  return `${pad0(time.minutes)}:${pad0(time.seconds)}:${pad0(Math.floor(time.miliseconds))}`;
}

/*
const clearListButton = document.getElementById('clear-list');
clearListButton.addEventListener('click', () => {
  memoryList.querySelectorAll('li').forEach(element => {
    element.remove();
  });
});

const onOffButton = document.getElementById('on-off');
onOffButton.addEventListener('click', () => {
  if (!stopwatchElem.classList.contains('power-off')) {
    stopwatchElem.classList.toggle('power-off');
    stopwatch.reset();  
    startButton.removeEventListener('click', startClickHandler)
  }
  else {
    stopwatchElem.classList.toggle('power-off');
    startButton.addEventListener('click', startClickHandler)
  }
});*/

const stopwatch = <Stopwatch />
ReactDOM.render(stopwatch, document.getElementById('app'));