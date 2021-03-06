import { fromJS } from "immutable";
import { GET_SOFTWARE } from "../actionTypes";

const defaultState = fromJS({
    result: [

    ]
});

export default (state = defaultState, action) => {
    if (action.type === GET_SOFTWARE) {
        return state.merge({
            result: action.result
        });
    }
    return state;
};
