import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type MyButtonProps = {
    text: string;
    onPress: () => void;
    backgroundColor: string;
    color: string;
};

const MyButton: React.FC<MyButtonProps> = ({text, onPress, backgroundColor, color}) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={[styles.signInBtnContainer, {backgroundColor}]}>
                <Text style={[styles.signInText, {color}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyButton

const styles = StyleSheet.create({
        signInBtnContainer: {
        width: '100%',
        // paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: '#FF7F27',
        borderRadius: 13,
    },
    signInText: {
        fontFamily: 'roboto',
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 18,
        letterSpacing: 0,
        color: '#FFFFFF',
        textAlign: 'center',

    },


});