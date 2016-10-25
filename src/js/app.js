import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav.js';
import Home from './pages/home.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: undefined,
      time: null
    }
  }

  setMode(event) {
    var mode = event.target.innerHTML;
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

  render() {
    return (
      <div>
        <Nav mode={this.state.mode}/>
        <Home
          setMode={this.setMode.bind(this)}
          setTime={this.setTime.bind(this)}
          mode={this.state.mode}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
