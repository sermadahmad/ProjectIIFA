import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const { width } = Dimensions.get("window");

type MyButtonProps = {
    IconComponent?: React.ReactNode;
    text: string;
};

const MyButton: React.FC<MyButtonProps> = ({ IconComponent, text }) => {
    return (
        <View >
            <TouchableOpacity onPress={() => console.log('Button Pressed')}>
                <View style={styles.container}>
            {IconComponent}
            
            <Text style={styles.text}>{text}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default MyButton

const styles = StyleSheet.create({
    container: {
        width: width - 20,
        flexDirection: 'row',
        borderColor: '#0070C0',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 16,
        fontFamily: 'Montserrat',
        fontSize: 16,
    }

});