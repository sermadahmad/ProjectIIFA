import React from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import MyTextInput from "./components/MyTextInput";
import MyButton from "./components/MyButton";

const App = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>Simple Form</Text>
                    <MyTextInput
                        value={username}
                        setValue={setUsername}
                        placeholder="Enter your name"
                    />
                    <MyTextInput
                        value={email}
                        setValue={setEmail}
                        placeholder="Enter your email"
                    />
                    <MyTextInput
                        value={password}
                        setValue={setPassword}
                        placeholder="Enter Password"
                        isSecureTextEntry={true}
                    />
                    <View style={styles.btnContainer1}>
                        <MyButton />
                        <MyButton />
                        <MyButton />
                    </View>
                    <View>
                        <MyButton/>
                        <MyButton/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fcfcfcff",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    btnContainer1: {
        flexDirection: "row",
        gap: 10,
    },

});