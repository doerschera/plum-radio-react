import React from 'react';
import Intro from '../components/intro.js';
import ChooseMode from '../components/chooseMode.js'

export default class Home extends React.Component {

  render() {
    return(
      <div class='container'>
        <Intro />
        <ChooseMode
          setMode={this.props.setMode}
          setTime={this.props.setTime}
          mode={this.props.mode}
        />
      </div>
    )
  }
}
