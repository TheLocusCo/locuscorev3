
import React from 'react'
import { loadSrc } from 'ScriptCache'

const withScriptCache = (scripts) => (Component) => {
  wrapperComponent extends Component { 
    componentWillMount: function() {
      this.scriptCache = loadSrc(scripts);
    },
    onLoad: function(cb, reject) {
      this.scriptCache.onLoad(cb, reject)
    },
    render: function() {
      return (
        <Component
          {...this.props}
          onLoad={this.onLoad} />
      )
    }
  });
  return wrapperComponent;
}

export default withScriptCache
