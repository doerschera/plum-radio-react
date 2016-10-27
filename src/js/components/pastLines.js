import React from 'react';

export default class PastLines extends React.Component {

  render() {
    const pastLines = this.props.pastLines.map((lines, i) => <p key={i}>{lines}</p>);

    return(
      <div class='content-area col s8 offset-s2'>
        <div>
          {pastLines}
        </div>
      </div>
    )
  }
}
