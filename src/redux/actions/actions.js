import ActionCreator from "./ActionCreator";
import MOCK_ACTION from "../../constants/action_constants";

function mockAction(event) {
  return (dispatch, getState) => {
    const type = MOCK_ACTION;
    const data = console.log(`${event.target} was clicked`);
    const mockActionObj = new ActionCreator(type, data);
    dispatch(mockActionObj.returnAction());
  };
}
