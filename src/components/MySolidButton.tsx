import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

type MySolidButtonProps = {
    text: string;
    handlePress: () => void
};

const MySolidButton: React.FC<MySolidButtonProps> = ({ text, handlePress }) => {
    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.btnText}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default MySolidButton;

const styles = StyleSheet.create({
        btnText: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#0070C0',
        width: 398,
        padding: 16,
        borderRadius: 10,
        // marginTop: 24,
    },

});