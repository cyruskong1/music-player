import {
  MOCK_ACTION,
  TEXTBOX_ONCHANGE
} from "../../constants/action_constants";
import initialModel from "../../model/initialState";

export default function reducer(initialState = initialModel, action) {
  switch (action.type) {
    case MOCK_ACTION:
      return initialState;

    case TEXTBOX_ONCHANGE:
      return {
        ...initialState,
        ...action.data
      };
    default:
      return initialState;
  }
}
