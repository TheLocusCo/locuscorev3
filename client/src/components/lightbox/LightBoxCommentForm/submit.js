import { createComment, previewComment } from "redux/actions"

export const submit = (values, dispatch, props) => {
  return dispatch(createComment(values, props.resourceType, props.resourceId))
}

export const previewSubmit = (values, dispatch, props) => {
  return dispatch(previewComment(values))
}
