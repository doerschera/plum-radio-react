import React from 'react';

export default class Textarea extends React.Component {

  render() {
    return (
      <div class='form-group col s10 offset-s1'>
        <textarea id='input' rows='15' cols='40' type='text'></textarea>
      </div>
    )
  }
}
