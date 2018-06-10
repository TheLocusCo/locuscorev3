import React, { Component } from 'react'

import './style.css'
import ShortcutsItem from 'components/ShortcutsItem'

class ShortcutsBlock extends Component {
  renderRows(props) {
    if (props.content.length > 0) {
      var currentContentRowIndex = 0
      var rows = []
      var count = 0
      for (var contentIndex=1; contentIndex < props.content.length + 1; contentIndex++) {
        if (contentIndex & 1) { // is contentIndex odd? 0 if true 1 if false
          rows.push([])
          rows[currentContentRowIndex].push(ShortcutsItem(props.content[contentIndex-1]))
          if (props.content[contentIndex] != null) {
            rows[currentContentRowIndex].push(ShortcutsItem(props.content[contentIndex]))
          }
          currentContentRowIndex++
        }
      }

      return rows.map(row => {
        count++
        return (
          <div className={window.innerWidth > 980 ? 'row' : ''} key={count}>
            {row}
          </div>
        )}
      )

    } else {
      return null
    }
  }

  render() {
    return (
      <div className="shortcuts">
        { this.renderRows(this.props) }
      </div>
    )
  }
}

export default ShortcutsBlock
