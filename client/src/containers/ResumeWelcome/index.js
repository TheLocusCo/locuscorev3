import React, { Component } from 'react'
import './style.css'
//import TechSummary from '../../components/TechSummary'
import { connect } from "react-redux"
import { fetchResumeHost } from "../../redux/actions"

class ResumeWelcome extends Component {
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
            <a className="button" href={this.props.resumeHost + "/primary_resume_download"}>
              <i className="icon-download"/>
              Download My One Page Resume
            </a>
          </div>
          <dl className="timeline">
            <dt />
            <dd>
              <h4>Experienced in creating and maintaining web applications from the ground up;</h4>
              <p>Backend Development, Infrastructure (DevOps), and Frontend Development with a focus on ensuring systems are secure, reliable and scalable</p>
            </dd>
          </dl>
          <h2 className="section-heading offset-top">
            Work Experience
            <span className="helper" />
          </h2>
          <dl className="timeline">
            <dt>
              <strong>Personal Business Development </strong>
              <p>September 2017 - Current</p>
            </dt>
            <dd>
              <h4>Sole Developer</h4>
              <p className="timeline-right">Santa Clara, California</p>
              <ul>
                <li>Converted this site from Ruby on Rails and jQuery to a Ruby on Rails backend with a React-Redux Frontend.</li>
                <li>Setup Ruby on Rails microservices to handle functionality that does not yet exist in Elixir.</li>
                <li>Learned Elixir and React from scratch to what you see here in 3 months.</li>
                <li>Wrote 62+ container components and 39+ presentational components that interact with Redux.</li>
                <li>Utilized Ueberauth's Guardian for authentication and Canary for authorization of resources.</li>
                <li>Later converted the site back to a Ruby on Rails backend.</li>
              </ul>
            </dd>
            <dt>
              <strong>Politech</strong>
              <p>November 2016 - August 2017</p>
            </dt>
            <dd>
              <h4>Fullstack Engineer</h4>
              <p className="timeline-right">Remote</p>
              <ul >
                <li>Setup the majority of the model and integration Rspec test suites for the core product.</li>
                <li>Wrote several UI modules for the core application utilizing HAML and jQuery.</li>
                <li>Assisted in writing, debugging and testing some extremely difficult recursive SQL statements.</li>
              </ul>
            </dd>
            <dt>
              <strong>SocialCentiv</strong>
              <p>June 2014 - July 2016</p>
            </dt>
            <dd>
              <h4>DevOps Engineer</h4>
              <p className="timeline-right">Dallas, Texas</p>
              <ul >
                <li>Assisted SocialCentiv in migrating away from Heroku for their infrastructure.</li>
                <li>Implemented a custom DevOps infrastructure for SocialCentiv using Chef and Rackspace.</li>
                <li>Built and maintain the application infrastructure via Chef.</li>
                <li>Created Ruby Gem <a href="https://github.com/loualrid/cheftacular">Cheftacular</a>, a tool to help you interact with your Chef infrastructure</li>
                <li>Implemented a monitoring and metrics solution using <a href="http://sensuapp.org">Sensu</a> and <a href="http://graphite.wikidot.com">Graphite.</a></li>
                <li>Utilized over 80 Chef cookbooks for stacks such as Ruby, Java, Python, NodeJS, PHP, and more.</li>
                <li>Assisted in the revision of SocialCentiv's <a href="http://socialcentiv.com">marketing website.</a></li>
                <li>Recipient of the Q4 2014 to Q1 2015 President's Award for outstanding service to SocialCentiv.</li>
                <li>Created Chef Cookbook <a href="https://github.com/loualrid/thecheftacularcookbook">TheCheftacularCookbook</a>, a cookbook designed to work with Cheftacular.</li>
                <li>Assisted in development on SocialCentiv's backend API that used MVC principles and TDD.</li>
              </ul>
            </dd>
            <dt>
              <strong>Personal Business Development</strong>
              <p>July 2013 - May 2014</p>
            </dt>
            <dd>
              <h4>Sole Developer</h4>
              <p className="timeline-right">Fort Worth, Texas</p>
              <ul >
                <li>Created a Rails API with Angular.js to manage personal email accounts</li>
                <li>Converted this site from PHP to Rails</li>
                <li>Reworked the Wordpress CMS running this site to a MVC-compliant Ruby on Rails project</li>
                <li>Created Ruby Gem <a href="https://github.com/loualrid/CookieCrypt">Cookie Crypt</a>, two-factor security solution for Rails apps using <a href="https://github.com/plataformatec/devise">Devise.</a></li>
                <li>Created Ruby Gem <a href="https://github.com/loualrid/scenejs_on_rails">SceneJS On Rails</a>, 3D WebGL graphics solution for Rails utilizing <a href="https://github.com/xeolabs/scenejs">SceneJS.</a></li>
              </ul>
            </dd>
            <dt>
              <strong>Trinovus, LLC</strong>
              <p>June 2012 - June 2013</p>
            </dt>
            <dd>
              <h4>Web Application Developer</h4>
              <p className="timeline-right">Lubbock, Texas</p>
              <ul >
                <li>Migrated an existing .NET / RPG banking platform to Ruby on Rails using MVC principles.</li>
                <li>Assisted in development on <a href="https://www.trinovus.com/tricomply/">TriComply</a>. Banking Compliance Solution.</li>
              </ul>
              <br />
            </dd>
            <dt>
              <strong>Leakmaster, Inc</strong>
              <p>Fall 2011</p>
            </dt>
            <dd>
              <h4>Wordpress Web Developer</h4>
              <p className="timeline-right">Fort Worth, Texas</p>
              <ul >
                <li>Rebuilt <a href="http://coolhawaiiroof.com">Cool Hawaii Roof.</a></li>
                <li>Utilized jQuery, PHP5, and CSS3 to implement features desired by client.</li>
                <li>Integrated several <a href="http://wordpress.org/">Wordpress</a> plugins to incorporate features and address security concerns.</li>
              </ul>
              <br />
            </dd>
            <dt>
              <strong>John Peter Smith Hospital</strong>
              <p>Summer 2011</p>
            </dt>
            <dd>
              <h4>IT Intern</h4>
              <p className="timeline-right">Fort Worth, Texas</p>
              <ul >
                <li>Discussed web design concepts with web engineers at John Peter Smith Hospital.</li>
                <li>Assisted database analyst in writing queries to build reports.</li>
                <li>Imaged PCs and assisted in solving various computer-related issues around the hospital.</li>
              </ul>
              <br />
            </dd>
          </dl>
          <h2 className="section-heading">
            Technology Summary
            <span className="helper" />
          </h2>
          <dl className="timeline">
            <dt>
              <p>Technology Never Stops</p>
            </dt>
            <dd>
              <ul>
                <li>
                  <b>Languages</b>:
                  <a href='https://elixir-lang.org/'> Elixir</a>,
                  <a href='https://www.ruby-lang.org/en/'> Ruby</a>,
                  <a href='https://en.wikipedia.org/wiki/Cascading_Style_Sheets'> CSS3</a>,
                  <a href='https://en.wikipedia.org/wiki/JavaScript'> Javascript</a>,
                  <a href='https://en.wikipedia.org/wiki/ECMAScript'> ES7</a>,
                  <a href='https://en.wikipedia.org/wiki/Bash_(Unix_shell)'> Shell Programming (Bash)</a>,
                  <a href='https://en.wikipedia.org/wiki/PHP'> PHP</a>
                </li>
                <li>
                  <b>Frameworks</b>:
                  <a href='http://rubyonrails.org/'> Ruby on Rails</a>,
                  <a href='http://phoenixframework.org/'> Phoenix</a>,
                  <a href='https://www.chef.io/chef/'> Chef</a>,
                  <a href='https://www.openstack.org/'> OpenStack</a>,
                  <a href='https://angularjs.org/'> Angular.js</a>,
                  <a href='https://www.meteor.com/'> Meteor</a>,
                  <a href='https://facebook.github.io/react/'> React</a>,
                  <a href='http://redux.js.org/'> Redux</a>
                </li>
                <li>
                  <b>Development Paradigms and Methodologies</b>:
                  <a href='https://en.wikipedia.org/wiki/Agile_software_development'> Agile</a>,
                  <a href='https://en.wikipedia.org/wiki/DevOps'> DevOps</a>,
                  <a href='https://en.wikipedia.org/wiki/Lean_software_development'> Lean</a>,
                  <a href='https://en.wikipedia.org/wiki/Behavior-driven_development'> Behavior Driven Development (BDD)</a>,
                  <a href='https://en.wikipedia.org/wiki/Test-driven_development'> Test Driven Development (TDD)</a>,
                  <a href='https://en.wikipedia.org/wiki/Scrum_(software_development)'>Scrum</a>,
                  <a href='https://en.wikipedia.org/wiki/Software_configuration_management'> Configuration Management</a>,
                  <a href='https://en.wikipedia.org/wiki/Infrastructure_as_Code'> Infrastructure as Code</a>,
                  <a href='https://en.wikipedia.org/wiki/User_experience'> User Experience</a>,
                  <a href='https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller'> Model-View-Controller (MVC)</a>,
                  <a href='https://en.wikipedia.org/wiki/Representational_state_transfer'> REST</a>
                </li>
                <li>
                  <b>Software</b>:
                  <a href='https://httpd.apache.org/'> Apache2</a>,
                  <a href='https://atom.io/'> Atom</a>,
                  <a href='https://www.elastic.co/'> Elastic Search</a>,
                  <a href='https://git-scm.com/'> Git</a>,
                  <a href='http://grafana.org/'> Grafana</a>,
                  <a href='https://graphiteapp.org/'> Graphite</a>,
                  <a href='http://www.haproxy.org/'> HAProxy</a>,
                  <a href='https://en.wikipedia.org/wiki/Iptables'> iptables</a>,
                  <a href='https://jquery.com/'> JQuery</a>,
                  <a href='https://www.elastic.co/products/kibana'> Kibana</a>,
                  <a href='https://www.elastic.co/products/logstash'> Logstash</a>,
                  <a href='https://www.nginx.com/resources/wiki/'> Nginx</a>,
                  <a href='https://nodejs.org/en/'> Node.js</a>,
                  <a href='https://www.openssl.org/'> OpenSSL</a>,
                  <a href='https://github.com/prawnpdf/prawn'> Prawn</a>,
                  <a href='http://processingjs.org/'> Processing.js</a>,
                  <a href='http://puma.io/'> Puma</a>,
                  <a href='https://www.rabbitmq.com/'> RabbitMQ</a>,
                  <a href='http://scenejs.org/'> SceneJS</a>,
                  <a href='https://sensuapp.org/'> Sensu</a>,
                  <a href='https://www.sublimetext.com/'> Sublime Text</a>,
                  <a href='https://travis-ci.org/'> TravisCI</a>,
                  <a href='https://uchiwa.io/'> Uchiwa</a>,
                  <a href='https://unicorn.bogomips.org/'> Unicorn</a>,
                  <a href='https://wordpress.com/'> Wordpress</a>
                </li>
                <li>
                  <b>Systems</b>: Linux
                  (<a href='https://www.debian.org/'>Debian</a>,
                  <a href='http://www.ubuntu.com/'> Ubuntu</a>),
                  <a href='https://en.wikipedia.org/wiki/Microsoft_Windows'> Windows</a>,
                  <a href='https://en.wikipedia.org/wiki/MacOS'>MacOS</a>,
                  Cloud-based Infrastructure
                  ( <a href='https://www.rackspace.com/en-us'>Rackspace</a>,
                  <a href='https://www.digitalocean.com/'> DigitalOcean</a>,
                  <a href='https://aws.amazon.com/'> AWS</a>,
                  <a href='https://www.cloudflare.com/'> Cloudflare</a>,
                  <a href='https://dnsimple.com/'> DNSimple</a>,
                  <a href='https://www.heroku.com/'>Heroku</a>)
                </li>
                <li>
                  <b>Databases</b>:
                  <a href='https://www.mongodb.com/'> MongoDB</a>,
                  <a href='https://www.mysql.com/'> MySQL</a>,
                  <a href='https://www.postgresql.org/'> PostgreSQL</a>,
                  <a href='http://redis.io/'> Redis</a>
                </li>
              </ul>
            </dd>
          </dl>
          <h2 className="section-heading">
            Education
            <span className="helper" />
          </h2>
          <dl className="timeline">
            <dt>
              <p>2008 - 2012</p>
            </dt>
            <dd>
              <h4>B.S. Computer Science</h4>
              <p className="timeline-right">Texas Tech University</p>
              <p className="timeline-right" style={{ marginTop: "0px" }}>Lubbock, Texas</p>
              <h4>Related Coursework</h4>
              <p>
                Assembly Programming, Computer Architecture, Concepts of Database Systems, Data Structures,
                Design and Analysis of Algorithms, Human Computer Interaction, Introduction to Systems Programming,
                Operating Systems, Programming Principles, Senior Project Design, Software Engineering,
                Special Topics in Artificial Intelligence
              </p>
            </dd>
          </dl>
          <h2 className="section-heading offset-top">
            Certifications
            <span className="helper" />
          </h2>
          <dl className="timeline">
            <dt>
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
          <h2 className="section-heading offset-top">Activities<span className="helper" /></h2>
          <dl className="timeline">
            <dt>
            <strong>Activities</strong>
            </dt>
            <dd>
              <ul >
                <li>Avid reader of <a href="https://news.ycombinator.com/news">Hacker News</a>, <a href="http://arstechnica.com/">Ars Technica</a>, and <a href="http://slashdot.org/">Slashdot</a></li>
                <li>
                  Follower of
                  <a href="https://www.schneier.com/"> Schneier on Security</a>,
                  <a href="http://www.codinghorror.com/blog/"> Coding Horror</a>,
                  <a href="https://www.eff.org/"> Electronic Frontier Foundation</a>,
                  <a href="http://www.ribbonfarm.com/"> Ribbonfarm</a>,
                  <a href="http://www.ted.com/"> TED Talks</a>,
                  <a href="http://continuousdelivery.com"> Continuous Delivery</a>,
                  <a href="http://krebsonsecurity.com/"> KrebsOnSecurity</a>, and
                  <a href="http://breakingsmart.com"> BreakingSmart</a>
                </li>
                <li>Reader of many Japanese mangas, ability to read and write in Japanese and speak it a basic level</li>
                <li>Biking, Gaming, Fantasy Novels, World Conceptualization and Renaissance Faires</li>
              </ul>
            </dd>
            <dt>
              <strong>Association of Computing Machinery</strong>
              <p>Texas Tech University</p>
              <p>Fall 2011 - Spring 2012</p>
            </dt>
            <dd>
              <h4>Webmaster Officer</h4>
              <p className="timeline-right">Lubbock, Texas</p>
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

export default connect(mapStateToProps)(ResumeWelcome)
