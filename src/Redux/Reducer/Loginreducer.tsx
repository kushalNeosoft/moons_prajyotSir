import {
    NEW_USER,
    ADD_FONT,
    DEC_FONT,
    IMAGE_CAPTURE,

} from '../actionTypes';


const initialState = {
    firsttime: false,
    counter: 15,
    imgstore: '',
};



const Loginreducer = (state = initialState, action: {
    data: any; type: any;
}) => {
    console.log('action',action);
    
    switch (action.type) {
        case NEW_USER:
            return {
                ...state,
                firsttime: action.data.firsttime,
            };

        case ADD_FONT:
            return {
                ...state,
                counter: action.data.counter,
            };
        case DEC_FONT:
            return {
                ...state,
                counter: action.data.counter,
            };
        case IMAGE_CAPTURE:
            return {
                ...state,
                imgstore: action.data.imgstore,
            };




        default:
            return state;
    }
};

export default Loginreducer
