import React from 'react'
import AuthedContentFooter from 'containers/AuthedContentFooter'
import { resumeHost } from 'utils/http'

export const LightBoxResumeContent = props => {
  const generateResumeLink = (props, type) => {
    return(resumeHost() + props.href + "?" + type + "=true")
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
              <td>{props.updated_at}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{props.created_at}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{props.length}</td>
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
