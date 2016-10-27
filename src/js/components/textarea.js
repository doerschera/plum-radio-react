import React from 'react';

export default class Textarea extends React.Component {

  render() {
    return (
      <div class='form-group col s8 offset-s2'>
        <textarea class='content-area'
          id='input'
          rows='15'
          cols='40'
          type='text'
          value={this.props.inputValue}
          onChange={this.props.inputOnChange}
          ></textarea>
      </div>
    )
  }
}
