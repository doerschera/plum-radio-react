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
      time: null,
      view: 'past lines'
    }
  }

  setMode(event) {
    var mode = event.target.innerHTML;
    console.log(mode);
    this.setState({
      mode: mode
    })
  }

  setTime(event) {
    console.log('click');
    var time = event.target.innerHTML;
    this.setState({
      time: time
    })
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

  renderMain() {
    var main = <Main
      text={this.state.view}
      toggleTab={this.toggleTab.bind(this)}
      mode={this.state.mode}
      submit={this.submit.bind(this)}
    />

    if(this.state.mode == 'zen mode') {
      return (main);

    } else if(this.state.mode == 'gut mode' & this.state.time != null) {
      return (main);
    }
  }

  render() {
    return (
      <div>
        <Nav mode={this.state.mode}/>
        <Home
          setMode={this.setMode.bind(this)}
          setTime={this.setTime.bind(this)}
          mode={this.state.mode}
        />
        {this.renderMain()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
