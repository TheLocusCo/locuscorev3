import { resourceEdit } from "../../redux/actions"

const submit = (values, dispatch, props) => {
  return dispatch(resourceEdit(values, props.history))
}

export default submit
