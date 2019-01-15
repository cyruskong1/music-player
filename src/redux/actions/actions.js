import ActionCreator from "./ActionCreator";
import {
  MOCK_ACTION,
  TEXTBOX_ONCHANGE
} from "../../constants/action_constants";

const mockAction = function(event, name) {
  return dispatch => {
    const type = MOCK_ACTION;
    const data = name;
    console.log(`${data} was clicked`);
    const mockActionObj = new ActionCreator(type, data);
    dispatch(mockActionObj.returnAction());
  };
};

const textboxOnChange = function(event, name) {
  console.log("event in action", event);
  return dispatch => {
    const target = name;
    const type = TEXTBOX_ONCHANGE;
    const data = {
      key: target,
      value: event.target.value
    };
    const textboxOnChangeObj = new ActionCreator(type, data);
    dispatch(textboxOnChangeObj.returnAction());
  };
};

export { mockAction, textboxOnChange };
