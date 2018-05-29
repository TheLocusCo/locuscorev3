import React, { Component } from 'react'
import './style.css'
//import TechSummary from '../../components/TechSummary'
import { connect } from "react-redux"
import { fetchResumeHost } from "../../redux/actions"

class WebResume extends Component {
  componentDidMount() {
    this.props.dispatch(fetchResumeHost())
  }

  render() {
    return (
      <div className="row">
        <div className="span12">
          <h2 className="section-heading offset-top">
            Full Stack Engineer (specializing in Ruby, Elixir, React)
            <span className="helper" />
          </h2>
          <div style={ { marginBottom: "20px" } } className="centered">
            <a className="button" href={this.props.resumeHost + "/api/primary_resume_download"}>
              <i className="icon-download"/>
              Download My Two Page Resume
            </a>
          </div>
          <h2 className="section-heading offset-top">
            Career Highlights
            <span className="helper" />
          </h2>
          <dl className="timeline">
            <dt />
            <dd>
              <ul>
                <li>Over 5 years of experience in web application development performing roles such as Full Stack Developer and DevOps Engineer.</li>
                <li>Experience in Web, Backend Development, Infrastructure (DevOps) and Frontend Development that includes Analysis, Design, Coding, Testing and Implementation using programming skills in Ruby and Javascript.</li>
                <li>Experience in developing Ruby on Rails APIs / applications using technologies such as Elastic Search, Git, PostgreSQL, Prawn, Puma, RabbitMQ, Redis, Solr and Unicorn.</li>
                <li>Experience in developing rich Javascript applications with frameworks such as Angular.js, jQuery,  Meteor, ReactJS and Redux.</li>
                <li>Experience in implementing and maintaining Infrastructure as Code solutions such as Apache2, Chef, Grafana, Graphite, HAProxy, Kibana, Logstash, Nginx, Node.js, Sensu and Uchiwa.</li>
                <li>Experience in implementing TDD / BDD for Ruby on Rails and Javascript using testing frameworks such as Cucumber, Rspec and Karma.</li>
                <li>Professional Experience with Elixir, Ruby, CSS3, Javascript, ES7, Bash Scripting and PHP.</li>
                <li>Highly professional communication skills honed through working with other developers and internal-to-company stakeholders.</li>
              </ul>
            </dd>
          </dl>
          <h2 className="section-heading offset-top">
            Work Experience
            <span className="helper" />
          </h2>
          <dl className="timeline">
            <dt className="bold">
              <strong>Personal Business Development (TheLocusCo)</strong>
              <p>September 2017 - April 2018</p>
              <p>Santa Clara, CA</p>
            </dt>
            <dd>
              <ul>
                <li>Spent 3 months learning Elixir and React and their surrounding ecosystems.</li>
                <li>Converted <a href='https://thelocus.co'>this site</a> from Rails to a React frontend with an Elixir backend.</li>
                <li>Setup Ruby on Rails microservices to handle functionality that does not yet exist in Elixir.</li>
                <li>Wrote 62+ container components and 39+ presentational components that interact with Redux.</li>
                <li>Worked with 2 other developers to discuss and prototype a Steam API service that would give gamers greater visibility into the statistics Steam games are keeping on them.</li>
                <li>Discontinued steam project due to the early 2018 privacy changes around much of the web and the Steam service in particular.</li>
                <li>Converted <a href='https://thelocus.co'>this site</a> back from a Elixir-Phoenix backend to a Ruby on Rails backend.</li>
                <li>Open-sourced the repository running thelocus.co at <a href='https://github.com/TheLocusCo/locuscorev3'>https://github.com/TheLocusCo/locuscorev3</a>.</li>
                <li>Built <a href='https://thelocus.co/site_stats'>my site analytics page</a> with D3.js and React.</li>
              </ul>
              <h4 className="bold">
                Skills and technologies I used at TheLocusCo
              </h4>
              <p>Elixir, Phoenix, Javascript, React 16, Redux, PostgreSQL 9, Rspec, Karma, Ruby on Rails 5, Atom, Github, ES7, JSX, ERB, JBuilder, CSS3, HTML 5, Steam API, Processing.js, D3.js, YML</p>
              <br/>
            </dd>
            <dt className="bold">
              <strong>Politech</strong>
              <p>November 2016 - August 2017</p>
              <p>Remote</p>
            </dt>
            <dd>
              <p>Politech creates digital products and delivers technology solutions that help political organizations, issue advocacy campaigns, and nonprofits thrive in a digitally driven world.</p>
              <br/>
              <h4 className="bold">Project Description</h4>
              <p>Ruby on Rails Application Enhancements</p>
              <br/>
              <h4 className="bold">Fullstack Engineer</h4>
              <br/>
              <ul>
                <li>Worked on change and feature requests submitted by the CEO or Customer Experience Team.</li>
                <li>Attend weekly scrum meetings to discuss blockers and relay progress on various open requests.</li>
                <li>Worked with Customer Experience Team to translate design documents into a list of required behaviors for the module. Implement a prototype that meets the behaviors.</li>
                <li>Worked with Customer Experience Team to iterate on the prototype module, connect the module to a test environment's data and verify interactions perform as expected.</li>
                <li>Update feature requests with their current status and expected time to completion daily.</li>
                <li>Participate in pair programming with other developers.</li>
                <li>Review push requests as features were to be pushed to staging for stakeholder testing.</li>
                <li>Provide live support during deployment of changes to production.</li>
                <li>Assisted in the upgrade and maintenance of production servers.</li>
                <li>Review technical interviews and take-home projects of applicants to the company.</li>
                <li>Wrote 45 integration and 150 unit tests using RSpec for the core Ruby on Rails application.</li>
                <li>Wrote 3 user-facing modules for the core application utilizing HAML and jQuery.</li>
                <li>Assisted in writing, debugging and testing some extremely challenging recursive SQL statements.</li>
              </ul>
              <br/>
              <h4 className="bold">
                Skills and technologies I used at Politech
              </h4>
              <p>Javascript, jQuery, PostgreSQL, Rspec, Ruby on Rails 5, Sublime Text 3, Github, HAML, CSS3, HTML 5, Basecamp, Redis, YML</p>
              <br/>
            </dd>
            <dt className="bold">
              <strong>SocialCentiv</strong>
              <p>June 2014 - July 2016</p>
              <p>Dallas, Texas</p>
            </dt>
            <dd>
              <p>SocialCentiv is a technology company focusing on organic ways to grow brand awareness using social media platforms.</p>
              <br/>
              <h4 className="bold">Project Description</h4>
              <p>Maintain and Improve the Infrastructure</p>
              <br/>
              <h4 className="bold">DevOps Engineer</h4>
              <ul>
                <li>Worked with Rightscale to plan out a migration from Heroku to Rackspace hosted servers.</li>
                <li>Took ownership of migration after Rightscale contract looked to be too expensive in the long run.</li>
                <li>Implemented a <a href='https://github.com/SocialCentivPublic/TheCheftacularCookbook'>custom DevOps infrastructure</a> for SocialCentiv using Chef and Rackspace Cloud.</li>
                <li>Worked with Backend and Frontend Developers to build a CLI that would give them a similar level of control to the Heroku CLI. This was open-sourced and is called <a href='https://github.com/SocialCentivPublic/cheftacular'>Cheftacular</a>.</li>
                <li>Worked with the rest of the engineering team to plan infrastructure upgrades and add new A-B testing environments. Incorporated these upgrades and tools into <a href='https://github.com/SocialCentivPublic/cheftacular'>Cheftacular</a>.</li>
                <li>Worked with Business Intelligence (BI) to setup a Data Warehouse.</li>
                <li>Implemented dashboards to give employees greater visibility into key company metrics.</li>
                <li>Implemented infrastructure remediation using Sensu to fix problems automatically.</li>
                <li>Utilized over 80 Chef cookbooks for stacks such as Ruby, Java, Python, NodeJS, PHP, and more.</li>
                <li>Recipient of the Q4 2014 to Q1 2015 President's Award for outstanding service to SocialCentiv.</li>
                <li>Assisted in development on SocialCentiv's backend API that used MVC principles and TDD.</li>
              </ul>
              <h4 className="bold">
                Skills and technologies I used at SocialCentiv
              </h4>
              <p>Javascript, jQuery, PostgreSQL, Rspec, Ruby on Rails 4, Sublime Text 3, Github, HAML, CSS3, HTML 5, Meteor, Wordpress, Sensu, Graphite, Grafana, Uchiwa, Node.js, HAProxy, iptables, Kibana, Logstash, Nginx, Redis, Puma, Unicorn, Slack, YML</p>
              <br/>
            </dd>
            <dt className="bold">
              <strong>Personal Business Development (TheLocusCo)</strong>
              <p>July 2013 - May 2014</p>
              <p>Fort Worth, Texas</p>
            </dt>
            <dd>
              <ul>
                <li>Created a Rails API with Angular.js to manage personal email accounts.</li>
                <li>Converted this site from PHP to Rails.</li>
                <li>Reworked the Wordpress CMS running this site to a MVC-compliant Ruby on Rails project.</li>
                <li>Created Ruby Gem <a href="https://github.com/loualrid/CookieCrypt">Cookie Crypt</a>, two-factor security solution for Rails apps using <a href="https://github.com/plataformatec/devise">Devise.</a></li>
                <li>Created Ruby Gem <a href="https://github.com/loualrid/scenejs_on_rails">SceneJS On Rails</a>, 3D WebGL graphics solution for Rails utilizing <a href="https://github.com/xeolabs/scenejs">SceneJS.</a></li>
              </ul>
              <h4 className="bold">
                Skills and technologies I used at TheLocusCo
              </h4>
              <p>Javascript, jQuery, PostgreSQL, Rspec, Ruby on Rails 3, Sublime Text 2, Github, HAML, CSS3, HTML 5, YML</p>
              <br/>
            </dd>
            <dt className="bold">
              <strong>Trinovus, LLC</strong>
              <p>June 2012 - June 2013</p>
              <p>Lubbock, Texas</p>
            </dt>
            <dd>
              <p>TriNovus offers financial processing services based on its own software, including ancillary services such as statement rendering and check processing.</p>
              <br/>
              <h4 className="bold">Project Description</h4>
              <p>Ruby on Rails Application Enhancements</p>
              <br/>
              <h4 className="bold">Web Application Developer</h4>
              <br/>
              <ul>
                <li>Migrated an existing .NET / RPG banking platform to Ruby on Rails using MVC principles.</li>
                <li>Assisted in development on <a href="https://www.trinovus.com/tricomply/">TriComply</a>. Banking Compliance Solution.</li>
              </ul>
              <h4 className="bold">
                Skills and technologies I used at Trinvous
              </h4>
              <p>Javascript, jQuery, PostgreSQL, Rspec, Ruby on Rails 3, Sublime Text 2, Github, HAML, CSS3, HTML 5, YML, .NET</p>
              <br/>
            </dd>
            <dt className="bold">
              <strong>John Peter Smith Hospital</strong>
              <p>Summer 2011</p>
              <p>Fort Worth, Texas</p>
            </dt>
            <dd>
              <p>Transforming healthcare delivery for the communities we serve.</p>
              <br/>
              <h4>IT Intern</h4>
              <br/>
              <ul >
                <li>Discussed web design concepts with web engineers at John Peter Smith Hospital.</li>
                <li>Assisted database analyst in writing queries to build reports.</li>
                <li>Imaged PCs and assisted in solving various computer-related issues around the hospital.</li>
              </ul>
            </dd>
          </dl>
          <h2 className="section-heading">
            Education
            <span className="helper" />
          </h2>
          <dl className="timeline bold">
            <dt>
              <p>2008 - 2012</p>
            </dt>
            <dd>
              <h4>B.S. Computer Science</h4>
              <p className="timeline-right">Texas Tech University</p>
              <p className="timeline-right" style={{ marginTop: "0px" }}>Lubbock, Texas</p>
            </dd>
          </dl>
          <h2 className="section-heading offset-top">
            Certifications
            <span className="helper" />
          </h2>
          <dl className="timeline">
            <dt className="bold">
              <strong>Neilsen Norman Group</strong>
              <p>April 2015 - Present</p>
            </dt>
            <dd>
            <ul >
              <li>Certificate in User Experience (UX) for completing 30 hours of UX training and passing related exams.</li>
              <li>Certificate viewing available upon request.</li>
            </ul>
            </dd>
          </dl>
          <h2 className="section-heading offset-top">Notable Activities<span className="helper" /></h2>
          <dl className="timeline">
            <dt className="bold">
              <strong>Association of Computing Machinery</strong>
              <p>Texas Tech University</p>
              <p>Fall 2011 - Spring 2012</p>
            </dt>
            <dd>
              <h4 className="bold">Webmaster Officer</h4>
              <p className="timeline-right bold">Lubbock, Texas</p>
              <br/>
              <ul>
                <li>Built http://acmttu.org/, however the site is no longer available. Referenced in portfolio.</li>
                <li>Incorporated jQuery, PHP5, CSS3, and Wordpress to build a website for the organization.</li>
                <li>Discussed website features with members during meetings.</li>
                <li>Interviewed members interested in assisting with development on the site.</li>
                <li>Assisted with planning events for ACM and incorporating said events into the website.</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  resumeHost: state.resumeHost.host
})

export default connect(mapStateToProps)(WebResume)
