const initialState = {
    mode: false,
    content: "hello studybook!",
    type: "SUCCESS", // SUCCESS, INFO, WARNING, ERROR 
};

const toast = (state=initialState, action) => {
    switch( action.type ) {
        case "SET_TOAST" :
            return {mode: true, ...action.payload};
        case "CLOSE_TOAST":
            return {...initialState};
        default :
            return state;
    }
}
export default toast;