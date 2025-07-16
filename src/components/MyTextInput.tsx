import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

type MyTextInputProps = {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    isSecureTextEntry?: boolean;
};

const MyTextInput: React.FC<MyTextInputProps> = ({value, setValue, placeholder, isSecureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={{
                    borderColor: "purple",
                    borderWidth: 2,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    width: "100%",
                    marginVertical: 6,
                }}
                placeholder={placeholder || "Enter text"}
                value={value}
                onChangeText={setValue}
                secureTextEntry={isSecureTextEntry || false}
            />
        </View>
    )
}

export default MyTextInput

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
});