import React from 'react'
import './style.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'

export const TabsItem = props => {
  const renderContent = (props) => {
    switch (props.buttonContent) {
      case "Frontend Development":
        return (
          <div>
            <p>Front End Technologies I am skilled with:</p>
            <ol>
              <li>HTML, HAML, ERB</li>
              <li>CSS, SASS</li>
              <li>Javascript, Coffeescript, ES6, React, Redux</li>
              <li>Image Editing and Creation (GIMP / Photoshop)</li>
              <li>3D Scene Generation and Construction (WebGL, blender)</li>
              <li>See portfolio for additional projects</li>
            </ol>
          </div>
        )
      case "Backend Development":
        return (
          <div>
            <p>Server/Back-End Technologies I am skilled with</p>
            <ol>
              <li>
                Ruby
                <ol>
                  <li>The resume generator for this website is a rails microservice (Elixir has no equivalent to prawn)</li>
                  <li>See portfolio for ruby projects</li>
                </ol>
              </li>
              <li>
                Elixir
                <ol>
                  <li>This website's backend is done in Elixir</li>
                </ol>
              </li>
              <li>NodeJS</li>
            </ol>
          </div>
        )
      case "User Experience":
        return (
          <div>
            <p>
              What does the user want?<br/>
              What do they need to be efficient?<br/>
              What improvements would help THEIR workflow?<br/>
              <br/>
              A good developer must always consider the users or else they will have an excellent application that only they alone know how to use.
            </p>
          </div>
        )
      case "Web Frameworks":
        return (
          <div>
            <p>
               I've spent alot of time pouring through ruby code embedded into various gems.<br/><br/>
               I like seeing code that pushes the boundaries of what we think a system is capable of.<br/><br/>
               While Rails has many gems that cover a plethora of use cases, it could still use many more.<br/><br/>
               Ideas like <a href="http://www.discourse.org/">Discourse</a> are a step in the right direction.<br/><br/>
               <br/>
               Unfortunately, Elixir has this problem but much worse.<br/><br/>
               Elixir desperately needs more developers working on libraries that provide tooling for unique use cases.<br/><br/>
               I would love to focus on giving Elixir the tooling it needs.
            </p>
          </div>
        )
      case "DevOps":
        return (
          <div>
            <p>
              I am very proficient with Chef.<br/><br/>
              Working with it has taught me that the sysadmin guy who manages servers for a company is a dying breed.
              Automation of all processes regarding deployment is the future (as long as your DevOps people have time to do the development in DevOps and not purely just operations).<br/><br/>
              Those interested in my chef exploits should check my Cheftacular project built for SocialCentiv as a ruby OSS gem.
            </p>
          </div>
        )
      default: return null
    }
  }

  return (
    <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>
      <div key={props.id}>
        { renderContent(props) }
      </div>
    </ReactCSSTransitionGroup>
  )
}

export default TabsItem
