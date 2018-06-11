import React from 'react'
import { animated } from 'react-spring'

import { updateCurrentSearchFieldData } from 'redux/actions'

let SearchFieldButton = props => {
  const { ability, currentSearch, dispatch, change, index, styles } = props

  return (
    <animated.div
      style={styles}
      key={index}
      onClick={() => dispatch(updateCurrentSearchFieldData(currentSearch.model, ability[0], ability[1].type, ability[1].nested_action, change))}
      title={ability[1].logical}
      className="button almost-full-width-button"
    >
      <i className={"icon-" + ability[1].icon}/>{ability[1].logical}
    </animated.div>
  )
}

export default SearchFieldButton
