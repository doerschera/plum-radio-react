import React from 'react';

export default class Nav extends React.Component {

  render() {
    var mode = this.props.mode == 'zen mode' ? 'gut mode' : 'zen mode';
    console.log(this.props);
    return(
      <div class='row'>
        <div class='col s12'>
          <h1 class='col s5'>Plum Radio</h1>
          <ul class='col s6'>
            <li><a id='mode' onClick={this.props.changeMode} href='#'>{mode}</a></li>
            <li><a onClick={this.props.viewCitations} href='#'>poets + poems</a></li>
            <li><a onClick={this.props.setMode} href='#'>about</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
