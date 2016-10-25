import React from 'react';
import Textarea from '../components/textarea.js';
import Button from '../components/button.js'

export default class Main extends React.Component {
  submitButton() {
    return (
      <div class='row'>
        <div class='col offset-s10'>
          <button onClick={this.props.submit}>Submit</button>
        </div>
      </div>
    )
  }

  handleClick() {
    console.log('click');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div class='row'>
          <div class='col offset-s1'>
            <button onClick={this.props.toggleTab}>{this.props.text}</button>
          </div>
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
