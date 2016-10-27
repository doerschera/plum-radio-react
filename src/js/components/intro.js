import React from 'react';

export default class Intro extends React.Component {

  render() {
    return (
      <div>
        <h2 class='title white-box' id='homeTitle'>Plum Radio</h2>
        <h3 class='white-box lines'>a tool to help writers get tuned in</h3>
        <div>
          <p class='white-box'>random poem fragments provide a starting point for freewriting. gut mode is timed: 60 seconds to get words flowing. zen mode is untimed, take as long as you want. you can change mode any time in the top bar. click the "past lines" tab to see what you have written for each fragment.</p>
        </div>
      </div>
    )
  }
}
