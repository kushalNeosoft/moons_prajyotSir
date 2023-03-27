import {
    NEW_USER,

} from '../actionTypes';


const initialState = {
    firsttime: false,
};



const Loginreducer = (state = initialState, action: {
    data: any; type: any;
}) => {
    switch (action.type) {
        case NEW_USER:
            return {
                ...state,
                firsttime: action.data.firsttime,
            };


        default:
            return state;
    }
};

export default Loginreducer
