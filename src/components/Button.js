import React from 'react';
import { StyleSheet, Text, Dimensions,TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        fontWeight: 'bold',
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#fff',
        
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#ffa500',
    },
    buttonDuble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }

})

export default props => {
    const stylesButton = [styles.button]
    if(props.double) stylesButton.push(styles.buttonDuble);
    if(props.triple) stylesButton.push(styles.buttonTriple);
    if(props.operation) stylesButton.push(styles.operationButton);
    
    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}