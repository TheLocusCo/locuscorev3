import React from 'react'
import AuthedContentFooter from 'containers/AuthedContentFooter'

export const LightBoxRoleContent = props => {
  const actionTypes = (props) => {
    return (Object.keys(props).filter(word => word.includes('pf_')))
  }

  const can = (props, actionType, method) => {
    if(props[actionType].includes(method)) {
      return (<i className="icon-check" />)
    } else {
      return (<i className="icon-cancel" />)
    }
  }

  const humanize = (text) => {
    let newText = text.replace(/pf_/gi, '')
    return (newText.charAt(0).toUpperCase() + newText.slice(1).replace(/_/gi, ' '))
  }

  const renderActionRows = (props) => {
    var count = 0
    return actionTypes(props).map(actionType => {
      count++
      return (
        <tr key={count}>
          <td>{humanize(actionType)}</td>
          <td className="centered">{can(props, actionType, 'c')}</td>
          <td className="centered">{can(props, actionType, 'r')}</td>
          <td className="centered">{can(props, actionType, 'u')}</td>
          <td className="centered">{can(props, actionType, 'd')}</td>
        </tr>
      )}
    )
  }

  return (
    <article className="portfolio-item">
      <h1 className="section-heading larger">{props.name}</h1>
      <h4 className="centered" style={{marginBottom: "15px"}}>{props.description}</h4>
      <div className="box-dark">
        <table>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Can Create?</th>
              <th>Can View?</th>
              <th>Can Edit?</th>
              <th>Can Delete?</th>
            </tr>
            {renderActionRows(props)}
          </tbody>
        </table>
      </div>
      <AuthedContentFooter location={props.location} />
    </article>
  )
}

export default LightBoxRoleContent
