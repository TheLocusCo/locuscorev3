import React, { Component } from 'react'
import './style.css'
//import { { connect } } from "react-redux"

class TechSummary extends Component {
  render() {
    return (
      <div id="skills_box">
        <div className="box-light">
          <h2 className="box-heading">Technology Summary</h2>
          <h3>Languages</h3>
          <ul className="bold plain">
            <li>
              <a href="https://www.ruby-lang.org/en/">Ruby</a>
              <div className="progress-bar">
                <div style={ { width: "161px" } }/>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">CSS3</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
              </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/JavaScript">Javascript</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)">Shell Programming (Bash)</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/PHP">PHP</a>
              <div className="progress-bar">
                <div style={ { width: "125px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.python.org/">Python</a>
              <div className="progress-bar">
                <div style={ { width: "116px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Java_(programming_language)">Java</a>
              <div className="progress-bar">
                <div style={ { width: "81px" } }></div>
              </div>
            </li>
          </ul>
          <h3>Frameworks</h3>
          <ul className="bold plain">
            <li>
              <a href="http://rubyonrails.org/">Ruby on Rails</a>
              <div className="progress-bar">
                <div style={ { width: "161px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.chef.io/chef/">Chef</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.openstack.org/">OpenStack</a>
              <div className="progress-bar">
                <div style={ { width: "116px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://angularjs.org/">Angular.js</a>
              <div className="progress-bar">
                <div style={ { width: "107px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.meteor.com/">Meteor</a>
              <div className="progress-bar">
                <div style={ { width: "107px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://facebook.github.io/react/">React</a>
              <div className="progress-bar">
                <div style={ { width: "81px" } }></div>
              </div>
            </li>
          </ul>
          <h3>Development Paradigms and Methodologies</h3>
          <ul className="bold plain">
            <li>
              <a href="https://en.wikipedia.org/wiki/Agile_software_development">Agile</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/DevOps">DevOps</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Infrastructure_as_Code">Infrastructure as Code</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Software_configuration_management">Configuration Management</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">Model-View-Controller (MVC)</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/User_experience">User Experience</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Lean_software_development">Lean</a>
              <div className="progress-bar">
                <div style={ { width: "125px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Scrum_(software_development)">Scrum</a>
              <div className="progress-bar">
                <div style={ { width: "116px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Behavior-driven_development">Behavior Driven Development (BDD)</a>
              <div className="progress-bar">
                <div style={ { width: "116px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Test-driven_development">Test Driven Development (TDD)</a>
              <div className="progress-bar">
                <div style={ { width: "107px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Service-oriented_architecture">Service Oriented Architecture (SOA)</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
          </ul>
          <h3>Software</h3>
          <ul className="bold plain">
            <li>
              <a href="https://httpd.apache.org/">Apache2</a>
              <div className="progress-bar">
                <div style={ { width: "107px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.elastic.co/">ElasticSearch</a>
              <div className="progress-bar">
                <div style={ { width: "116px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://git-scm.com/">Git</a>
              <div className="progress-bar">
                <div style={ { width: "152px" } }></div>
              </div>
            </li>
            <li>
              <a href="http://grafana.org/">Grafana</a>
              <div className="progress-bar">
                <div style={ { width: "152px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://graphiteapp.org/">Graphite</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="http://www.haproxy.org/">HAProxy</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Iptables">iptables</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://jquery.com/">jQuery</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.elastic.co/products/kibana">Kibana</a>
              <div className="progress-bar">
                <div style={ { width: "116px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.elastic.co/products/logstash">Logstash</a>
              <div className="progress-bar">
                <div style={ { width: "116px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.nginx.com/resources/wiki/">Nginx</a>
              <div className="progress-bar">
                <div style={ { width: "152px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://nodejs.org/en/">Node.js</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.openssl.org/">OpenSSL</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://github.com/prawnpdf/prawn">Prawn</a>
              <div className="progress-bar">
                <div style={ { width: "152px" } }></div>
              </div>
            </li>
            <li>
              <a href="http://processingjs.org/">Processing.js</a>
              <div className="progress-bar">
                <div style={ { width: "125px" } }></div>
              </div>
            </li>
            <li>
              <a href="http://puma.io/">Puma</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.rabbitmq.com/">RabbitMQ</a>
              <div className="progress-bar">
                <div style={ { width: "107px" } }></div>
              </div>
            </li>
            <li>
              <a href="http://scenejs.org/">SceneJS</a>
              <div className="progress-bar">
                <div style={ { width: "116px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://sensuapp.org/">Sensu</a>
              <div className="progress-bar">
                <div style={ { width: "152px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.sublimetext.com/">Sublime Text</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://uchiwa.io/">Uchiwa</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://unicorn.bogomips.org/">Unicorn</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://wordpress.com/">Wordpress</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
          </ul>
          <h3>Systems</h3>
          <ul className="bold plain">
            <li>
              <a href="https://www.debian.org/">Linux (Debian)</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="http://www.ubuntu.com/">Ubuntu</a>
              <div className="progress-bar">
                <div style={ { width: "152px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Microsoft_Windows">Windows</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.rackspace.com/en-us">Rackspace</a>
              <div className="progress-bar">
                <div style={ { width: "152px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.digitalocean.com/">DigitalOcean</a>
              <div className="progress-bar">
                <div style={ { width: "134px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://aws.amazon.com/">AWS</a>
              <div className="progress-bar">
                <div style={ { width: "89px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.cloudflare.com/">Cloudflare</a>
              <div className="progress-bar">
                <div style={ { width: "125px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://dnsimple.com/">DNSimple</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.heroku.com/">Heroku</a>
              <div className="progress-bar">
                <div style={ { width: "143px" } }></div>
              </div>
            </li>
            </ul>
            <h3>Networking</h3>
            <ul className="bold plain">
              <li>
                <a href="https://en.wikipedia.org/wiki/Internet_protocol_suite">TCP/IP</a>
                <div className="progress-bar">
                  <div style={ { width: "143px" } }></div>
                </div>
              </li>
            </ul>
          <h3>Databases</h3>
          <ul className="bold plain">
            <li>
              <a href="https://www.mongodb.com/">MongoDB</a>
              <div className="progress-bar">
                <div style={ { width: "116px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.mysql.com/">MySQL</a>
              <div className="progress-bar">
                <div style={ { width: "116px" } }></div>
              </div>
            </li>
            <li>
              <a href="https://www.postgresql.org/">PostgreSQL</a>
              <div className="progress-bar">
                <div style={ { width: "152px" } }></div>
              </div>
            </li>
            <li>
              <a href="http://redis.io/">Redis</a>
              <div className="progress-bar">
                <div style={ { width: "107px" } }></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TechSummary
