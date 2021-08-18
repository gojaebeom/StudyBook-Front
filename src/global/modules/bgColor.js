const initialState = {
    id: 1,
    color: "bg-gradient-to-br from-blue-300 to-green-300"
};

const bgColors = {
    fromBlueToGreen: {
        id: 1,
        color: "bg-gradient-to-br from-blue-300 to-green-300",
    },
    fromYellowToPink:{
        id: 2,
        color: "bg-gradient-to-br from-yellow-300 via-red-300 to-pink-300",
    },
    allGray: {
        id: 3,
        color: "bg-gray-100"
    } 
};

const bgColor = (state=initialState, action ) =>{
    switch( action.type ) {
        case "BG_CHANGE" :
            const payload = action.payload;
            if(payload === 1) 
                return bgColors.fromBlueToGreen;
            else if(payload === 2)
                return bgColors.fromYellowToPink;
            else if(payload === 3)
                return bgColors.allGray;
            else 
                return bgColors.fromBlueToGreen;
        default :
            return state;
    }
}
export default bgColor;