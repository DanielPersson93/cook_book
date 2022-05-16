import { Action } from "../interfaces/action.model";

export enum ReviewActionType {
    SetReviews = "SetReviews",
    AddReview = "AddReview"
}

const initialState = {
    reviews: []
}

export default function articleReducer(
    state = initialState,
    action: Action<any, ReviewActionType>
) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case ReviewActionType.SetReviews:
            return {
                ...state,
                reviews: [
                    ...action.payload,
                ],
            };
        case ReviewActionType.AddReview:
            return {
                ...state,
                reviews: [
                    ...state.reviews,
                    action.payload,
                ],
            };
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
}
