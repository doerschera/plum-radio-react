import React from 'react';

export default class GutEnd extends React.Component {
  render() {
    const pastLines = this.props.pastLines.map((lines, i) => <p key={i}>{lines}</p>)
    const title = "here's what you've written:";

    return (
      <div>
        <div class='row'>
          <div class='col s8 offset-s2'>
            <h4 class='white-box lines'>{title}</h4>
          </div>
        </div>
        <div class='row'>
          <div class='col s8 offset-s2'>
            <div class='content-area'>
              {pastLines}
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='no-padding col offset-s8'>
            <button class='button'
            onClick={this.props.restart}>five more minutes?</button>
          </div>
        </div>
      </div>
    )
  }
}
