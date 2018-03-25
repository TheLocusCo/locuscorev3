import { searchSubmit } from "../../redux/actions"

const submit = (values, dispatch, props) => {
  return dispatch(searchSubmit(values, props.history))
}

export default submit
