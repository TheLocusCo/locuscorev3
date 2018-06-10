import React from 'react'
import { Link } from 'react-router-dom'

export const SliderMediaImage = props => {
  return (
    <div key={props.id}>
      <Link to={`/media/${props.id}/show_image`}>
        <img src={props.image[props.sliderSize]} alt={props.name} />
      </Link>
    </div>
  )
}

export default SliderMediaImage
