import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { humanizeGraphNames } from 'utils/string'

const {arrayOf, shape, string, func, number} = PropTypes

const List = styled.ul`
  list-style-type: none;
  text-align: right;
  vertical-align: center;
  position: absolute;
  right: 0px;
  top: ${({index}) => index * 20}px;
`

const ColorSquare = styled.li`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 5px;
  cursor: pointer;
`

const PalletLabel = styled.li`
  display: inline-block;
  position: relative;
  top: -2px;
  margin-right: 5px;
`

class Pallet extends React.Component {
  handleColorPicked = (scope, color) => e => {
    this.props.pickColor(scope, color)
  }

  render() {
    const {colors, scope, index, customPalletNameObj} = this.props
    return (
      <List className="not-standard" index={index}>
        <PalletLabel>
          {humanizeGraphNames(scope, customPalletNameObj)}
        </PalletLabel>
        {colors.map(color => (
          <ColorSquare
            key={color.name}
            style={{backgroundColor: color.value}}
            onClick={this.handleColorPicked(scope, color.name)}
          />
        ))}
      </List>
    )
  }
}

Pallet.propTypes = {
  colors: arrayOf(
    shape({
      name: string,
      value: string
    })
  ),
  index: number,
  scope: string,
  pickColor: func
}

export default Pallet
