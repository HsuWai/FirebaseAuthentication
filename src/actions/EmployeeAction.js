import {
    EMPLOYEE_UDPATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETE
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export const employeeUpdate = (text) => {
    return{
        type: EMPLOYEE_UDPATE,
        payload: text
    };
};


export const employeeCreate = ({ name, phone, shift}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) =>{
        firebase.database().ref('/users/'+currentUser.uid+'/employees')
            .push({ name, phone, shift })
            .then(() => {
                
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeList({ type: 'reset' })
            });
    }
};


export const employeesFetch = () => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref('/users/'+currentUser.uid+'/employees')
            .on('value', snapshot => {
                dispatch ({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref('/users/'+currentUser.uid+'/employees/'+uid)
        .set({ name, phone, shift})
        .then( () => {
             
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
            Actions.employeeList({ type: 'reset' })
           
        });
    };
    
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref('/users/'+currentUser.uid+'/employees/'+uid)
            .remove()
            .then( () => {
                
                dispatch({ type: EMPLOYEE_DELETE });
                Actions.employeeList({type: 'reset'});
                
            });
    }
};