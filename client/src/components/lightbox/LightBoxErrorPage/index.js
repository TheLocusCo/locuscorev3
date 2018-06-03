import React from 'react'
import ErrorBlock from '../../../containers/ErrorBlock'

export const LightBoxErrorPage = props => {
  return (
    <article style={{paddingTop: "22.5%"}} className="portfolio-item">
      <ErrorBlock content={props.errorContent} />
    </article>
  )
}

export default LightBoxErrorPage
