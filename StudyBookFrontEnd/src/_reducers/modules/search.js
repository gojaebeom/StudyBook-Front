const searchState = {
    mode: false,
}

export default function posts(state=searchState, action){
    switch( action.type ) {
        case "SEARCH_TOGGLE" :
            return {...searchState,  mode:!state.mode};
        default :
            return state;
    }
}