import ActionCreator from "./ActionCreator";
import {
  MOCK_ACTION,
  TEXTBOX_ONCHANGE,
  SEARCH,
  BASE_URL
} from "../../constants/action_constants";
import { WebAPI } from "../../lib/callers";
import { API_KEY } from "../../keys/apiKey";

const mockAction = (event, name) => {
  return dispatch => {
    const type = MOCK_ACTION;
    const data = name;
    console.log(`${data} was clicked`);
    const mockActionObj = new ActionCreator(type, data);
    dispatch(mockActionObj.returnAction());
  };
};

const textboxOnChange = (event, name) => {
  return dispatch => {
    const type = TEXTBOX_ONCHANGE;
    const target = name;
    const data = {
      key: target,
      value: event.target.value
    };
    const textboxOnChangeObj = new ActionCreator(type, data);
    dispatch(textboxOnChangeObj.returnAction());
  };
};

const search = () => {
  return (dispatch, getState) => {
    const type = SEARCH;
    const data = getState().Search.searchField;
    // make api call to youtube
    console.log("searching for ", data);
    WebAPI("GET", API_KEY, data, BASE_URL);
    const searchObj = new ActionCreator(type, data);
    dispatch(searchObj.returnAction());
  };
};

export { mockAction, textboxOnChange, search };
