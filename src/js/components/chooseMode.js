import React from 'react';

export default class ChooseMode extends React.Component {
  constructor(props) {
    super(props);
  }

  showOptions() {
    return (
      <ul>
        <li><button onClick={this.props.setCount}>5</button></li>
        <li><button onClick={this.props.setCount}>10</button></li>
      </ul>
    )
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <h3>To get started choose a mode: </h3>
        <a onClick={this.props.setMode}>gut mode</a>
          {this.props.mode == 'gut mode' ? this.showOptions() : null}
        <a onClick={this.props.setMode}>zen mode</a>
      </div>
    )
  }
}
