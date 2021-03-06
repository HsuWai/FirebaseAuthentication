import React, {Component} from 'react';
import {Text,View, TextInput, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
}

const styles = {
    spinnerStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    }

};
export {Spinner};