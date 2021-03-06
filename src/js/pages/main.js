import React from 'react';
import Textarea from '../components/textarea.js';
import PastLines from '../components/pastLines.js';
import Timer from '../components/timer.js';
import GutContainer from '../components/gutLinesContainer.js';
import Lines from '../components/lines.js'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60,
    }
    this.timeDown = this.timeDown.bind(this)
  }

  // sets timer to 60 and generates random lines
  componentWillMount() {
    this.setTimer()
    this.props.randomLines()
  }

  handleClick() {
    console.log('click');
  }

  // sets timer to state
  setTimer() {
    if(this.props.count > 0) {
      this.setState({time: 60})
    }
  }

  // decrements timer and clears interval, saves text at zero
  timeDown() {
    var time = this.state.time;
    time--;
    this.setState({time: time});
    if(time == 0) {
      clearInterval(this.timer);
      this.nextPoem();
      this.setState({time: 60});
    }
  }

  // generates new lines when timer reaches zero
  nextPoem() {
    this.props.savePastLines();
    this.props.randomLines();
    this.props.countDown();
  }

  // renders timer if gut mode is active
  renderTimer() {
    if(this.props.mode == 'gut mode') {
      return <Timer time={this.state.time} />
    }
  }

  // renders submit button is zen mode is active
  renderSubmitButton() {
    return (
      <div class='row'>
        <div class='col offset-s9'>
          <button class='button' onClick={this.props.submit}>Submit</button>
        </div>
      </div>
    )
  }

  // if gut mode renders lines with setInterval in willMount
  renderLines() {

    if(this.props.mode == 'gut mode') {
      return (
        <GutContainer lines={this.props.lines}
          timeDown={this.timeDown.bind(this)}
        />
      );
    } else if(this.props.mode == 'zen mode') {
      return <Lines lines={this.props.lines} />;
    }
  }

  renderTextArea() {
    if(this.props.text == 'past lines') {
      return (
        <Textarea
          inputValue={this.props.inputValue}
          inputOnChange={this.props.inputOnChange}
        />
      )
    } else {
      return(
        <PastLines pastLines={this.props.pastLines}/>
      )
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderLines()}
        <div class='tab row'>
          <div class='col offset-s2'>
            <button class='button' onClick={this.props.toggleTab}>{this.props.text}</button>
          </div>
          {this.renderTimer()}
        </div>
        <div class='row'>
          {this.renderTextArea()}
        </div>
        <div class='row'>
          {this.props.mode=='zen mode' ? this.renderSubmitButton() : null}
        </div>
      </div>
    )
  }
}
