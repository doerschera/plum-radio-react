import React from 'react';
import Textarea from '../components/textarea.js';
import Timer from '../components/timer.js';
import GutContainer from '../components/gutLinesContainer.js';
import Lines from '../components/lines.js'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 10,
    }
    this.timeDown = this.timeDown.bind(this)
  }

  renderTimer() {
    if(this.props.mode == 'gut mode') {
      return <Timer time={this.state.time} />
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
    this.setTimer()
    this.props.randomLines()
  }

  setTimer() {
    if(this.props.count > 0) {
      this.setState({time: 10})
    }
  }

  timeDown() {
    var time = this.state.time;
    time--;
    this.setState({time: time});
    if(time == 0) {
      clearInterval(this.timer);
      this.nextPoem();
      this.setState({time: 10});
    }
    if(this.props.count == 0) {
      return false;
    }
  }

  nextPoem() {
    this.props.randomLines();
    this.props.countDown();
  }

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

  render() {
    return (
      <div>
        {this.renderLines()}
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
