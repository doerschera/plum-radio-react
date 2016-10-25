import React from 'react';
import Textarea from '../components/textarea.js';
import Timer from '../components/timer.js'

export default class Main extends React.Component {
  renderTimer() {
    if(this.props.time != undefined) {
      return <Timer time={this.props.time} />
    }
  }

  renderSubmitButton() {
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

  componentWillMount() {
    this.props.setTimer()
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderTimer()}
        <div class='row'>
          <div class='col offset-s1'>
            <button onClick={this.props.toggleTab}>{this.props.text}</button>
          </div>
        </div>
        <div class='row'>
          <Textarea />
        </div>
        <div class='row'>
          {this.props.mode=='zen mode' ? this.renderSubmitButton() : null}
        </div>
      </div>
    )
  }
}
