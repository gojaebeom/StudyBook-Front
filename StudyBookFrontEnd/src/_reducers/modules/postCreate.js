const postCreateState = {
    writerId: "",
    title: "",
    tagString:"",
    tags: [],
    content: "",
    publish: false
}

export default function postCreate(state=postCreateState, action){
    switch( action.type ) {
        case "POST_CREATE_STATE_CHANGE" :
            return action.payload;
        case "POST_CREATE_MODAL_TOGGLE" :
            return {...state, open: !state.open};
        default :
            return state;
    }
}