class Stopwatch extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>
      <Display />
    </div>
  }
}

class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      running: false,
      currentTime: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    }
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
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
  }

  toZero() {
    this.state.currentTime = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }

  reset() {
    this.stop();
    this.toZero();
    this.setState({
      currentTime: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    })

  }

  calculate() {
    const tempTime = this.state.currentTime;
    tempTime.miliseconds++;
    if (tempTime.miliseconds >= 100) {
      tempTime.seconds++;
      tempTime.miliseconds = 0;
    }
    if (tempTime.seconds >= 60) {
      tempTime.minutes++;
      tempTime.seconds = 0;
    }
    this.setState({ currentTime: tempTime })
  }


  render() {
    return <div className='stopwatch'>
      <div id={'timer'}>{format(this.state.currentTime)}</div>
      <Controls onStart={this.start} onStop={this.stop} onReset={this.reset} />
    </div>
  }
}

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <nav className={'controls'}>
      <StartBtn onStart={this.props.onStart} />
      <StopBtn onStop={this.props.onStop} />
      <ResetBtn onReset={this.props.onReset} />
    </nav>
  }
}

class StartBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <a href={'#'} className={'button'} onClick={this.props.onStart} id={'start'}>►</a>
  }
}

class StopBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <a href={'#'} className={'button'} onClick={this.props.onStop} id={'stop'}>| |</a>
  }
}

class ResetBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <a href={'#'} className={'button'} onClick={this.props.onReset} id={'reset'}>■</a>
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

const stopwatch = <Stopwatch />
ReactDOM.render(stopwatch, document.getElementById('app'));