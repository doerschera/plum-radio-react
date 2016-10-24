import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'zen'
    }
  }

  render() {
    return (
      <Nav mode={this.state.mode}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
