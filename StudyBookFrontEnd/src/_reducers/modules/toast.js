const toastState = {
    mode: false,
    content: "hello studybook!",
    type: "SUCCESS", // SUCCESS, INFO, WARNING, ERROR 
};

export default function toast(state=toastState, action){
    switch( action.type ) {
        case "SET_TOAST" :
            return {mode: true, ...action.payload};
        case "CLOSE_TOAST":
            return {...toastState};
        default :
            return state;
    }
}