import React from 'react'
import './style.css'
import AuthedContentFooter from '../../containers/AuthedContentFooter'

export const LightBoxResumeContent = props => {
  const generateResumeLink = (props, type) => {
    return(props.resumeHost + "/resumes/" + props.id + "?" + type + "=true")
  }

  return (
    <article className="portfolio-item">
      <h1 className="section-heading larger">{props.title}</h1>
      <div className="box-dark">
        <table className="show-table">
          <tbody>
            <tr>
              <td>Title</td>
              <td>{props.title}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>{props.company}</td>
            </tr>
            <tr>
              <td>Last Updated At</td>
              <td>{props.inserted_at}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{props.inserted_at}</td>
            </tr>
            <tr>
              <td>Lines</td>
              <td>{props.lines}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="box-dark centered">
        <h1 className="section-heading">Actions</h1>
        <a className="button" href={generateResumeLink(props, 'download')}>
          <i class="icon-download"/>
          Download This Resume
        </a>
        <a className="button" target="_blank" href={generateResumeLink(props, 'preview')}>
          <i class="icon-download"/>
          Stream This Resume
        </a>
      </div>
      <AuthedContentFooter location={props.location} />
    </article>
  )
}

export default LightBoxResumeContent