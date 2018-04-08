import React from 'react'
import AuthedContentFooter from '../../containers/AuthedContentFooter'

export const LightBoxVisitContent = props => {
  return (
    <article className="portfolio-item">
      <h1 className="section-heading larger">{props.meta_title}</h1>
      <div className="box-dark">
        <table className="show-table">
          <tbody>
            <tr>
              <td>Matched User</td>
              <td>{props.parsed_user}</td>
            </tr>
            <tr>
              <td>IP Address</td>
              <td>{props.ip}</td>
            </tr>
            <tr>
              <td>User Agent</td>
              <td>{props.user_agent}</td>
            </tr>
            <tr>
              <td>Referrer</td>
              <td>{props.referrer}</td>
            </tr>
            <tr>
              <td>Referring Domain</td>
              <td>{props.referring_domain}</td>
            </tr>
            <tr>
              <td>Search Keyword</td>
              <td>{props.search_keyword}</td>
            </tr>
            <tr>
              <td>Landing Page</td>
              <td>{props.landing_page}</td>
            </tr>
            <tr>
              <td>Browser</td>
              <td>{props.browser}</td>
            </tr>
            <tr>
              <td>Operating System</td>
              <td>{props.os}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{props.country}</td>
            </tr>
            <tr>
              <td>Region</td>
              <td>{props.region}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{props.city}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <AuthedContentFooter location={props.location} />
    </article>
  )
}

export default LightBoxVisitContent
