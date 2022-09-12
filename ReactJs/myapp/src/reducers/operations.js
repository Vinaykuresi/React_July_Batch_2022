import issueConstants from "./constant";

const initState = {
    count: 0
}

const countReducer = (state = initState, action) => {
    console.log("Action : ", action, state)
    var currentState = state.count;
    switch (action.type) {
        case issueConstants.INCREAMENT:
            return Object.assign({}, state,
                { count: currentState + parseInt(action.step) });
        case issueConstants.DECREAMENT:
            return Object.assign({}, state,
                { count: currentState - parseInt(action.step) });
        default:
            return state;
    }
}


export { countReducer };

