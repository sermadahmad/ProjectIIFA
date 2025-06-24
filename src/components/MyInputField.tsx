import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get("window");

interface MyInputFieldProps {
    inputValue: string;
    setInputValue: (value: string) => void;
    placeholder: string;
}

const MyInputField = ({inputValue, setInputValue, placeholder}: MyInputFieldProps) => {
    return (
        <View>
            <TextInput
                style={{
                    borderColor: '#0070C0',
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 16,
                    fontFamily: 'Montserrat',
                    fontSize: 16,
                    width: width - 20,
                    textAlign: 'center',
                }}
                placeholder={placeholder}
                onChangeText={setInputValue}
                value={inputValue}
            />

        </View>
    )
}

export default MyInputField

const styles = StyleSheet.create({});