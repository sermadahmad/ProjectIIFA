import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

type MySolidButtonProps = {
    text: string;
    handlePress: () => void
};

const MySolidButton: React.FC<MySolidButtonProps> = ({ text, handlePress }) => {
    return (
        <View style={styles.container}>
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
        // width: 398,
        // width: '100%',
        padding: 16,
        borderRadius: 10,
        // marginTop: 24,
    },
    container: {
        width: width,
        padding: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#0070C0',
        // borderColor: '#0070C0',
        // borderWidth: 1,
        // borderRadius: 10,
        // height: 50,
    }

});