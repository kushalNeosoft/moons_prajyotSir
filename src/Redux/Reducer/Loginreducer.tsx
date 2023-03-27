import {
    NEW_USER,
    ADD_FONT,
    DEC_FONT,

} from '../actionTypes';


const initialState = {
    firsttime: false,
    counter: 15
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

        case ADD_FONT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DEC_FONT:
            return {
                ...state,
                counter: state.counter - 1,
            };


        default:
            return state;
    }
};

export default Loginreducer
