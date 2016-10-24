import React from 'react';

export default class ChooseMode extends React.Component {
  showOptions() {
    return (
      <ul>
        <li><button>5</button></li>
        <li><button>10</button></li>
      </ul>
    )
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <h3>To get started choose a mode: </h3>
        <a onClick={this.props.setMode}>gut mode</a>
          {this.props.mode == 'gut' ? this.showOptions() : null}
        <a>zen mode</a>
      </div>
    )
  }
}
