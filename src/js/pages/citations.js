import React from 'react';
import poems from '../components/poems.js'

export default class Citations extends React.Component {
  render() {
    const cite = poems.map((obj, i) =>
      <ul key={i} class='citations-list col s6'>
        <div>
          <li class='citations'>{obj.poem}</li>
        </div>
        <div>
          <li class='citations'>{obj.poet}</li>
        </div>
        <div>
          <li class='citations'><em>{obj.book}</em></li>
        </div>
        <div>
          <li class='citations'>{obj.publisher}</li>
        </div>
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
