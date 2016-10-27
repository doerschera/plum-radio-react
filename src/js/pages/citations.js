import React from 'react';
import poems from '../components/poems.js'

export default class Citations extends React.Component {
  render() {
    const cite = poems.map((obj, i) =>
      <ul key={i} class='col s6'>
        <li>{obj.poem}</li>
        <li>{obj.poet}</li>
        <li>{obj.book}</li>
        <li>{obj.publisher}</li>
      </ul>
    )
    return (
      <div class='row'>
        <div class='col s8 offset-s2'>
          {cite}
        </div>
      </div>
    )
  }
}
