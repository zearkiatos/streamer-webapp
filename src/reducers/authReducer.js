import TYPE from '../types';
const INITIAL_STATE = {
    isSignedIn: null
};
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TYPE.SIGN_IN:
            return {...state, isSignedIn: true };
        case TYPE.SIGN_OUT:
            return {...state, isSignedIn: false };
        default:
            return state;
    }
};