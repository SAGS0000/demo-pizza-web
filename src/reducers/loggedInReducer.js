const INITIAL_STATE = false;

const loggedInReducer = (INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return !INITIAL_STATE;
        default:
            return INITIAL_STATE;
    }
};
export default loggedInReducer;