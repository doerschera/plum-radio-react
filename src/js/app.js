import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav.js';
import Home from './pages/home.js';
import Main from './pages/main.js';
import GutEnd from './pages/gutEnd.js';
import poems from './components/poems.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: undefined,
      count: false,
      view: 'past lines',
      line: undefined,
      usedLines: [],
      pastLines: [],
      inputValue: ''
    }
  }

  // set mode to gut or zen
  setMode(event) {
    var mode = event.target.innerHTML;
    console.log(mode);
    this.setState({
      mode: mode
    })
  }

  // if gut mode set count to either 5 or 10
  setCount(event) {
    console.log('click');
    var count = event.target.innerHTML;
    this.setState({
      count: count
    })
  }

  // decrement count when timer reaches zero
  countDown() {
    console.log('count down');
    var count = this.state.count;
    count--;
    this.setState({
      count: count,
      inputValue: ''
    });
    if(this.state.count==0) {
      this.setState({mode: 'gut end'})
    }
  }

  // pull random lines from poems array
  randomLines() {
    var index = Math.floor(Math.random()*poems.length);
    var usedLines = this.state.usedLines

    if(usedLines.length == poems.length) {
      this.setState({usedLines: []});
    }

    if(usedLines.indexOf(index) == -1) {
      var line = poems[index].lines
      usedLines.push(line)
      this.setState({
        line: line,
        usedLines: usedLines
      })
    } else {
      this.randomLines();
    }
  }

  // tracks changes to textarea
  inputOnChange() {
    var value = document.getElementById('input').value;
    this.setState({inputValue: value})
  }

  // save users text to state in array
  savePastLines() {
    var text = this.state.inputValue;
    var pastLines = this.state.pastLines;
    pastLines.push(text);
    this.setState({pastLines: pastLines})
  }

  // toggle between past line view and textarea
  toggleTab() {
    var text = this.state.view == 'past lines' ? 'back' : 'past lines';
    this.setState({
      view: text
    })
  }

  // handles submit event, saves user text, repopulates lines, clears textarea
  submit() {
    this.savePastLines()
    this.randomLines()
    this.setState({inputValue: ''});
  }

  restartGutMode() {
    this.setState({
      mode: 'gut mode',
      count: 5,
      view: 'past lines',
      inputValue: ''
    });
    this.randomLines();
  }

  // renders home component when no mode is active
  renderHome() {
    var home = <Home
      setMode={this.setMode.bind(this)}
      setCount={this.setCount.bind(this)}
      mode={this.state.mode}
    />

    if(this.state.mode == 'zen mode') {
      return null;
    } else if(this.state.mode == 'gut mode' && this.state.count != 0) {
      return null;
    } else if(this.state.mode == 'gut end') {
      return null;
    }else {
      return (home)
    }
  }

  // renders main when gut or zen mode is active
  renderMain() {
    var main = <Main
      text={this.state.view}
      toggleTab={this.toggleTab.bind(this)}
      mode={this.state.mode}
      submit={this.submit.bind(this)}
      randomLines={this.randomLines.bind(this)}
      lines={this.state.line}
      countDown={this.countDown.bind(this)}
      count={this.state.count}
      savePastLines={this.savePastLines.bind(this)}
      pastLines={this.state.pastLines}
      inputValue={this.state.inputValue}
      inputOnChange={this.inputOnChange.bind(this)}
    />

    if(this.state.mode == 'zen mode') {
      return (main);

    } else if(this.state.mode == 'gut mode' && this.state.count != 0) {
      return (main);
    } else {
      return null;
    }
  }

  // renders once gut mode count reaches zero
  renderGutEnd() {
    if(this.state.mode == 'gut end') {
      return (
        <GutEnd
          pastLines={this.state.pastLines}
          restart={this.restartGutMode.bind(this)}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <Nav mode={this.state.mode}/>
        {this.renderHome()}
        {this.renderMain()}
        {this.renderGutEnd()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
