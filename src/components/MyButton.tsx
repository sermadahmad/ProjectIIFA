import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type MyButtonProps = {
    text?: string;
    onPress?: () => void;
};

const MyButton: React.FC<MyButtonProps> = ({text, onPress}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress || (() => Alert.alert("Button Pressed"))}>
            <Text style={styles.text}>{text || "Button"}</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default MyButton

const styles = StyleSheet.create({
    container: {
        // width: "100%",
    },
    button: {
        backgroundColor: "#6d5b89ff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 10,
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
});