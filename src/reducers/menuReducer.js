import { CREATE_MENU_SUCCESSFULLY } from "../actions/actionTypes";

const INITIAL_STATE = {
  menus: []
}
const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_MENU_SUCCESSFULLY:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default menuReducer;
