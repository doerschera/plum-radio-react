import React from 'react';

export default class ChooseMode extends React.Component {
  constructor(props) {
    super(props);
  }

  showOptions() {
    return (
      <ul class='white-box no-padding' id='options'>
        <li>how long?</li>
        <li><button class='circleButton' onClick={this.props.setCount}>5</button></li>
        <li><button class='circleButton' onClick={this.props.setCount}>10</button></li>
      </ul>
    )
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <h3 class='white-box lines'>To get started choose a mode: </h3>
        <ul class='white-box' id='mode'>
          <li><a onClick={this.props.setMode}>gut mode</a></li>
            {this.props.mode == 'gut mode' ? this.showOptions() : null}
          <li><a onClick={this.props.setMode}>zen mode</a></li>
        </ul>
      </div>
    )
  }
}
