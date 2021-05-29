import TYPES from '../types';

const streamReducer = (state = {}, action) => {
    switch (action.types) {
        case TYPES.FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case TYPES.CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case TYPES.CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case TYPES.EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};

export default streamReducer;