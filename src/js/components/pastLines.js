import React from 'react';

export default class PastLines extends React.Component {

  render() {
    const pastLines = this.props.pastLines.map((lines, i) => <p key={i}>{lines}</p>);

    return(
      <div class='col s10 offset-s1'>
        <div>
          {pastLines}
        </div>
      </div>
    )
  }
}
