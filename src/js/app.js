import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav.js';
import Home from './pages/home.js';
import Main from './pages/main.js';
import poems from './components/poems.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: undefined,
      count: false,
      view: 'past lines',
      line: undefined,
      usedLines: []
    }
  }

  setMode(event) {
    var mode = event.target.innerHTML;
    console.log(mode);
    this.setState({
      mode: mode
    })
  }

  setCount(event) {
    console.log('click');
    var count = event.target.innerHTML;
    this.setState({
      count: count
    })
  }

  countDown() {
    var count = this.state.count;
    count--;
    this.setState({count: count});
  }

  nextPoem() {
    if(this.state.count == 0) {

    }
  }

  randomLines() {
    var index = Math.floor(Math.random()*poems.length);
    var usedLines = this.state.usedLines
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

  toggleTab() {
    var text = this.state.view == 'past lines' ? 'back' : 'past lines';
    this.setState({
      view: text
    })
  }

  submit() {
    console.log('submit');
  }

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
    } else {
      return (home)
    }
  }

  renderMain() {
    var main = <Main
      text={this.state.view}
      toggleTab={this.toggleTab.bind(this)}
      mode={this.state.mode}
      submit={this.submit.bind(this)}
      randomLines={this.randomLines.bind(this)}
      lines={this.state.line}
      countDown={this.countDown.bind(this)}
    />

    if(this.state.mode == 'zen mode') {
      return (main);

    } else if(this.state.mode == 'gut mode' && this.state.count != 0) {
      return (main);
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <Nav mode={this.state.mode}/>
        {this.renderHome()}
        {this.renderMain()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
