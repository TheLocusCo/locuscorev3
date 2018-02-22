import { resourceNew } from "../../redux/actions"

const submit = (values, dispatch, props) => {
  return dispatch(resourceNew(values, props.history))
}

export default submit
