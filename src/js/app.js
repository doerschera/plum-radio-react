import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav.js';
import Home from './pages/home.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'zen'
    }
  }

  render() {
    return (
      <div>
        <Nav mode={this.state.mode}/>
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
