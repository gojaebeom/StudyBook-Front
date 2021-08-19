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
    sweety: {
        id: 3,
        color: "bg-gradient-to-br from-purple-300 via-pink-300 to-red-300"
    },
    allGray: {
        id: 4,
        color: "bg-gray-100"
    },
    moonLight: {
        id: 5,
        color: "bg-gradient-to-br from-gray-700 to-gray-500"
    },
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
                return bgColors.sweety;
            else if(payload === 4)
                return bgColors.allGray;
            else if(payload === 5)
                return bgColors.moonLight;
            else 
                return bgColors.fromBlueToGreen;
        default :
            return state;
    }
}
export default bgColor;