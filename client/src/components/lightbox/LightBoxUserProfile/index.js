import React from 'react'
import './style.css'
import AuthedContentFooter from '../../../containers/AuthedContentFooter'

export const LightBoxUserProfile = props => {
  return (
    <article className="portfolio-item">
      <h1 className="section-heading larger">{props.name}</h1>
      <div className="box-dark">
        <table className="show-table">
          <tbody>
            <tr>
              <td>Username</td>
              <td>{props.username}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{props.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{props.email}</td>
            </tr>
            <tr>
              <td>Sign In Count</td>
              <td>{props.sign_in_count}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{props.created_at}</td>
            </tr>
            <tr>
              <td>Last Update</td>
              <td>{props.updated_at}</td>
            </tr>
            <tr>
              <td>Failed Login Attempts</td>
              <td>{props.failed_attempts}</td>
            </tr>
            <tr>
              <td>Used Ips</td>
              <td>{props.ip_list.join(", ")}</td>
            </tr>
            <tr>
              <td>Current IP</td>
              <td>{props.current_sign_in_ip}</td>
            </tr>
            <tr>
              <td>Current Role</td>
              <td>{props.role}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <AuthedContentFooter location={props.location} />
    </article>
  )
}

export default LightBoxUserProfile
