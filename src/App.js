import React, {Component} from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import {Header} from './components/common';
import Router from './Router';

class App extends Component {

componentWillMount(){
    const config = {
        apiKey: "AIzaSyDI6v4qoYbdzYDdB04JqeUksBDbEQR3_gk",
        authDomain: "manager-2beee.firebaseapp.com",
        databaseURL: "https://manager-2beee.firebaseio.com",
        projectId: "manager-2beee",
        storageBucket: "manager-2beee.appspot.com",
        messagingSenderId: "465488712950"
    };
    firebase.initializeApp(config);
}
render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    );
    };
};
export default App;
