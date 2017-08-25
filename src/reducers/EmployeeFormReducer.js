import {
    EMPLOYEE_UDPATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log("from employeelist");
    switch(action.type){
        case EMPLOYEE_UDPATE:
            return {...state, [action.payload.prop] : action.payload.value}

        case EMPLOYEE_CREATE:
            return INITIAL_STATE;

        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;

        case EMPLOYEE_DELETE:
            return INITIAL_STATE;
            
        default:
            return state;
    }
};