import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BootSplash from "react-native-bootsplash";
import Header from "../components/Header";
import { Dimensions } from "react-native";
import MyButton from "../components/MyButton";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MyInputField from "../components/MyInputField";
import MySolidButton from "../components/MySolidButton";

const { width } = Dimensions.get("window");
const LoginScreen = () => {


    // const heading = "Welcome Back!";
    // const paragraph = "Log in to unlock personalized AI insights and take your social media to the next level."

    const [heading, setHeading] = React.useState("Welcome Back!");
    const [paragraph, setParagraph] = React.useState("Log in to unlock personalized AI insights and take your social media to the next level.");

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const [activeTab, setActiveTab] = React.useState("login");

    const handleLoginPress = () => {
        setActiveTab("login");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHeading("Welcome Back!");
        setParagraph("Log in to unlock personalized AI insights and take your social media to the next level.");

    };

    const handleSignupPress = () => {
        setActiveTab("signup");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHeading("Join the Revolution");
        setParagraph("Sign up and let AI help you create content that connects, engages, and inspires.");

    };

    return (
        <View style={styles.container}>
            <Header heading={heading} paragraph={paragraph} />
            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={handleLoginPress}>
                    <Text style={activeTab === "login" ? styles.activetabBar : styles.inactiveTabBar}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignupPress}>
                    <Text style={activeTab === "signup" ? styles.activetabBar : styles.inactiveTabBar}>Signup</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.underlineContainer}>
                <View style={activeTab === "login" ? styles.activeLine : styles.inactiveLine} />
                <View style={activeTab === "signup" ? styles.activeLine : styles.inactiveLine} />
            </View>

            {
                activeTab === "signup" && (
                    <View style={styles.btnContainer}>




                        <MyInputField
                            inputValue={name}
                            setInputValue={setName}
                            placeholder={"Your Name"}
                        />

                        <MyInputField
                            inputValue={email}
                            setInputValue={setEmail}
                            placeholder={"Enter your Email"}
                        />

                        <MyInputField
                            inputValue={password}
                            setInputValue={setPassword}
                            placeholder={"Enter your Password"}
                        />

                        <MyInputField
                            inputValue={confirmPassword}
                            setInputValue={setConfirmPassword}
                            placeholder={"Confirm your Password"}
                        />

                        <View style={styles.signupbtnContainer}>
                            <MySolidButton
                                text={"Signup"}
                                handlePress={()=>{}}
                            />
                        </View>



                    </View>
                )
            }



            {
                activeTab === "login" && (
                    <View style={styles.btnContainer}>

                        <MyButton
                            IconComponent={
                                <FontAwesome
                                    name="apple"
                                    size={24}
                                    color="#000000"
                                />
                            }
                            text={"Login with Apple"}
                        />

                        <MyButton
                            IconComponent={
                                <AntDesign
                                    name="google"
                                    size={24}
                                    color="#000000"
                                />
                            }
                            text={"Login with Google"}
                        />

                        <Text style={styles.orText}>Or Continue with email address</Text>

                        <MyInputField inputValue={email} setInputValue={setEmail} placeholder={"Enter your Email"} />
                        <MyInputField inputValue={password} setInputValue={setPassword} placeholder={"Enter your Password"} />

                        <Text style={styles.forgotPassword}>Forgot Password?</Text>

                        <View style={styles.loginbtnContainer}>
                            <MySolidButton text={"Login"} handlePress={()=>{}}/>

                            <Text style={styles.bysigninginText}>
                                By signing up, you agree to our Term & Condition and Privacy policy
                            </Text>
                        </View>


                    </View>

                )

            }



        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({

    signupbtnContainer: {
        marginTop: 120,

    },

    loginbtnContainer: {
        marginTop: 44,
        gap: 12,
    },
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: "column",
        // backgroundColor: 'gray',
    },
    tabContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    activetabBar: {
        width: width / 2,
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "center",
        color: "#0E538C",
    },
    inactiveTabBar: {
        width: width / 2,
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "center",
        color: "#DADADA",
    },
    underlineContainer: {
        flexDirection: "row",
        marginTop: 2,
    },
    activeLine: {
        width: width / 2,
        height: 2,
        backgroundColor: "#0E538C",
    },
    inactiveLine: {
        width: width / 2,
        height: 2,
        backgroundColor: "#DADADA",
    },
    btnContainer: {
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
    },
    orText: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 10,
        lineHeight: 10,
        letterSpacing: 0,
        textAlign: "center",
        margin: 20,
    },
    bysigninginText: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 0,
        textAlign: "center",
        // paddingHorizontal: 20,
    },

    forgotPassword: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 10,
        lineHeight: 10,
        letterSpacing: 0,
        textAlign: "center",
        color: "#0070C0",
    },
});

