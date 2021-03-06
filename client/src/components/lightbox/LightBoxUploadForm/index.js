import React from 'react'
import ReactTooltip from 'react-tooltip'
import { Uploader, UploadField } from '@navjobs/upload'
import { connect } from 'react-redux'

import { humanize } from 'utils/string'
import ProgressBar from 'components/ProgressBar'
import { receiveResource, successMessage } from "redux/actions"
import { apiUrl } from 'utils/http'

let LightBoxUploadForm = props => {
  const renderFields = (props) => {
    var count = 0
    return Object.entries(props.field_meta).map(indivField => {
      count++
      switch (indivField[1]) {
        case "upload":
          return (
            <div className="form-field" key={count}>
              <Uploader
                request={{
                  fileName: 'file',
                  url: `${apiUrl()}/authed/${props.field_meta.resource_plural}/${props.id}/upload_${indivField[0]}`,
                  method: 'PATCH',
                  headers: {// Can't send "Content-Type": "application/json", or it will bork the multipart send
                    Accept: "application/json",
                    "access-token": localStorage.accessToken || "",
                    "token-type":   "Bearer",
                    "client":       localStorage.tokenClient || "",
                    "expiry":       localStorage.tokenExpiry || "",
                    "uid":          localStorage.uid || ""
                  },
                  // use credentials for cross-site requests
                  withCredentials: false,
                }}
                onComplete={({ response, status }) => {
                  if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
                    console.log('successful upload, in oncomplete')
                    props.dispatch(receiveResource(props.field_meta.resource_type, response))
                    props.dispatch(successMessage("Successfully uploaded data for " + props.field_meta.resource_type + " \"" + props.meta_title + "\""))
                  } else {
                    // dispatch(sync.editResourceFailure(response))
                  }
                }}
                uploadOnSelection={true}
              >
                {({ onFiles, progress, complete }) => (
                  <div className="centered" style={{marginBottom: '10px'}}>
                    <UploadField onFiles={onFiles}>
                      <div className="form-button" style={{display: 'inline-block'}}>
                        <button className="button" data-tip={props.field_meta.tooltips[indivField[0]]}>Select a file for {indivField[0]} upload</button>
                      </div>
                    </UploadField>
                    <ProgressBar progress={progress}/>
                  </div>
                )}
              </Uploader>
            </div>
          )
        default:
          return null
      }
    })
  }

  return (
    <div className="box-dark">
      <ReactTooltip />
      <h1 className="section-heading larger">Upload Content to this {humanize(props.field_meta.resource_type)}</h1>
      {renderFields(props)}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}


export default connect(mapDispatchToProps)(LightBoxUploadForm)
