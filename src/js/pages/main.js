import React from 'react';
import Textarea from '../components/textarea.js';
import Button from '../components/button.js'

export default class Main extends React.Component {
  submitButton() {
    return <Button text='submit' />
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div class='row'>
          <Button text={this.props.text} />
        </div>
        <div class='row'>
          <Textarea />
        </div>
        <div class='row'>
          {this.props.mode=='zen mode' ? this.submitButton() : null}
        </div>
      </div>
    )
  }
}
