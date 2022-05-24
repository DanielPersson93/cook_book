import { Action } from "../interfaces/action.model";

export enum RecipeActionType {
    SetRecipes = "SET_RECIPES",
}

const initialState = {
    recipes: []
}

export default function recipeReducer(
    state = initialState,
    action: Action<any, RecipeActionType>
) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case RecipeActionType.SetRecipes:
            return {
                ...state,
                recipes: [
                    ...action.payload,
                ],
            };
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
}
