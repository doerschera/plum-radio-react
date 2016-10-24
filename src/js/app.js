import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav.js';
import Home from './pages/home.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'zen',
      time: null
    }
  }

  setMode() {
    this.setState({
      mode: 'gut'
    })
  }

  timeButtonClick(event) {
    console.log('click');
    var time = event.target.innerHTML;
    this.setState({
      time: time
    }, function() {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div>
        <Nav mode={this.state.mode}/>
        <Home
          setMode={this.setMode.bind(this)}
          mode={this.state.mode}
          time={this.timeButtonClick.bind(this)}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
