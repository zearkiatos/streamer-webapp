import { omit } from 'lodash';
import TYPES from '../types';

const streamReducer = (state = {}, action) => {
    switch (action.types) {
        case TYPES.FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case TYPES.FETCH_STREAMS:
            return { ...state, [action.payload.id]: action.payload };
        case TYPES.CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case TYPES.EDIT_STREAM:
            return omit(state, action.payload);
        default:
            return state;
    }
};

export default streamReducer;