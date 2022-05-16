import { combineReducers } from "redux";
import recipeReducer from "./recipe/recipeReducer";
import reviewReducer from './review/reviewReducer';

/** All reducers shall be imported and placed
 * within the brackets */
export default combineReducers({
    reviewReducer,
    recipeReducer
});
