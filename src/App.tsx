import React from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import MyTextInput from "./components/MyTextInput";
import MyButton from "./components/MyButton";

const { width, height } = Dimensions.get('screen');


const App = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }}>
                <View style={styles.container}>
                <View style={styles.secondContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.header}>Login Form</Text>
                    </View>
                    <View style={styles.textInputsContainer}>
                        <View style={styles.textInputContainer}>
                            <Text>Enter User Name: </Text>
                            <MyTextInput
                                value={username}
                                setValue={setUsername}
                                placeholder="abc@gmail.com"
                            />
                        </View>

                        <View style={styles.textInputContainer}>
                            <Text>Enter Password: </Text>

                            <MyTextInput
                                value={password}
                                setValue={setPassword}
                                placeholder="Enter Password"
                                isSecureTextEntry={true}
                            />
                        </View>
                        <View style={styles.forgotContainer}>
                            <TouchableOpacity onPress={() => {
                                console.log("Forgot Password Pressed")
                            }}>
                                <Text style={styles.forgotText}>Forgot Password?</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.btnContainer}>
                        <MyButton
                            text="Login" 
                        />
                    </View>
                </View>
                <View style={styles.registerContainer}>
                    <Text>Already have account </Text>
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>SignUp?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    registerContainer: {
        position: 'absolute',
        bottom: 10,
        paddingVertical: 20,
        flexDirection: 'row'
    },
    forgotContainer: {
        width: '80%',
        alignItems: 'flex-end',
        marginVertical: 10,

    },
    textInputsContainer: {
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
        // height: 200,
        // backgroundColor: '#332d2dff'
        // flex: 1,

    },
    textInputContainer: {
        // flex: 1,
        width: '80%',
        // alignItems: 'center',
        // backgroundColor: '#a07b7bff'

    },
    headingContainer: {
        width: '100%',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fcfcfcff",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#6d5b89ff",
        marginBottom: 30,
    },
    secondContainer: {
        // backgroundColor: '#e1b8b8ff',
        width: '100%',
        paddingVertical: 10,
        paddingBottom: height * 0.1,
        alignItems: 'center'

    },
    btnContainer: {
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
    },
    forgotText: {
        color: '#548ae7ff',
    }


});