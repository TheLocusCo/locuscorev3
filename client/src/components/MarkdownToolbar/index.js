import React from 'react'
import ReactTooltip from 'react-tooltip'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export const MarkdownToolbar = props => {
  return (
    <table style={{marginTop: "25px"}} className="centered show-table">
      <ReactTooltip />
      <tbody>
        <tr>
          <th style={{width: "102px"}}>Links</th>
          <th><i>Italic</i></th>
          <th><u>Under</u></th>
          <th><b>Bold</b></th>
          <th><i><strong>Strong</strong></i></th>
          <th>Sub<sub>script</sub></th>
          <th>Super<sup>script</sup></th>
          <th data-tip="To put items in an unordered list, just type * before each one">List</th>
          <th data-tip="To put items in a number list, just type a number then a peroid (1., 2., etc) before each one">Num List</th>
          <th>Blockquote</th>
          <th data-tip='![alt text](link "secondary link text")'>Image</th>
        </tr>
        <tr>
          <td>[word](URL)</td>
          <td>_word_ or *word*</td>
          <td>__word__</td>
          <td>**word**</td>
          <td>**_word_**</td>
          <td>~word~</td>
          <td>^word^</td>
          <td>
            <i className="icon-info" data-tip="To put items in an unordered list, just type * before each one"/>
            *
          </td>
          <td>
            <i className="icon-info" data-tip="To put items in an unordered list, just type a number with a period before each one (ex: 1. This is great!)"/>
            1.
          </td>
          <td>&gt; Words</td>
          <td><i className="icon-info" data-tip='![alt text](link "secondary link text")'/></td>
        </tr>
      </tbody>
    </table>
  )
}

export default MarkdownToolbar
