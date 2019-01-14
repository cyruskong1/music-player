import { MOCK_ACTION } from "../../constants/action_constants";

export default function reducer(initialState = {}, action) {
  switch (action.type) {
    case MOCK_ACTION:
      break;

    default:
      return initialState;
  }
}
