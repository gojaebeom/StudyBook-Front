const postFilterState = {
    sort:"POPULAR"
};

export default function postFilter(state=postFilterState, action){
    switch( action.type ) {
        case "CHANGE_FILTER" :
            return action.payload;
        default :
            return state;
    }
}