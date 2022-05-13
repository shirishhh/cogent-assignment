const authReducer = (state = [], action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, ...action.payload }
        case "LOGIN_FAIL":
            return action.payload
        case "LOGOUT":
            return state;

        default:
            return state;
    }
}
export default authReducer