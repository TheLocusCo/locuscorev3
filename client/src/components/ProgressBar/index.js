import React, { Component } from 'react'
import './style.css'

class ProgressBar extends Component {
  progressRenderer(progress) {
    if (progress > -1) {
      let barStyle = {}
      barStyle.width = `${progress}%`;

      let message = (<span>Uploading ...</span>);
      if (progress === 100) {
        message = (<span >Successfully uploaded, beginning post upload steps. Your upload will be fully complete when the green message appears up top.</span>);
      }

      return (
        <div>
          <div className="progress-wrapper">
            <div className="progress-bar" style={barStyle}></div>
          </div>
          <div style={{ clear: 'left' }}>
            {message}
          </div>
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      this.progressRenderer(this.props.progress)
    )
  }
}

export default ProgressBar
