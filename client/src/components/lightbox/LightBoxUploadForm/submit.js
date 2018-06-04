import { resourceUpload } from "redux/actions"

const submit = (values, dispatch, props) => {
  return dispatch(resourceUpload(values))
}

export default submit
