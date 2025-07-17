import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { ICONS } from '../constants/icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import MyButton from '../components/MyButton';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <ICONS.Logo height={height * 0.09}/>
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.loginHeading}>LOGIN INTO YOUR</Text>
                    <Text style={styles.subHeading}>PAYMENT’S MANAGER</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <Text style={styles.phoneText}>
                        PHONE NUMBER
                    </Text>
                    <View style={styles.phoneTextInput}>
                        <View style={styles.flagDropdown}>
                            <ICONS.Flag />
                            <Text style={styles.countryCodeText}>+44</Text>
                            <ICONS.DropDown />
                            <View style={styles.divider} ></View>
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                placeholder='Enter phone number'
                                style={styles.textInput}
                            />
                        </View>
                    </View>
                    <Text style={styles.phoneText}>enter your password</Text>
                    <View style={styles.phoneTextInput}>
                        <View style={styles.passwordContainer}>
                            <Text style={styles.password}>*********</Text>
                            <ICONS.Eye />
                        </View>
                    </View>
                    <Text style={styles.accountTypeText}>ACCOUNT TYPE</Text>
                </View>
                <View style={styles.btnforgotContainer}>
                    <View style={styles.btnsContainer}>
                        <TouchableOpacity style={styles.btn1}><Text style={styles.memberText}>MEMBER</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}><Text style={styles.adminText}>ADMIN</Text></TouchableOpacity>
                    </View>
                    <View><Text style={styles.forgotPasswordText}>FORGOT PASSWORD?</Text></View>
                </View>
                <View style={{ width: '90%', marginTop: 50 }}>
                    <MyButton
                        text={'SIGN IN'}
                        backgroundColor='#FF7F27'
                        color='#FFFFFF'
                        onPress={() => console.log("Sign in pressed")}
                    />
                </View>
                <Text style={styles.organization}>Do you run an organization?</Text>
                <Text style={styles.signupAdmin}>Sign up as Admin</Text>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    signupAdmin: {
        fontFamily: 'roboto',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: 'rgba(29, 40, 58)',
        paddingVertical: 1,

    },
    organization: {
        fontFamily: 'roboto',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#1D283A78',
        marginTop: 10,
        paddingVertical: 1,

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
    signInBtnContainer: {
        width: '85%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#FF7F27',
        borderRadius: 13,
        // justifyContent: 'center',
    },
    btnforgotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // flex: 1,
        // backgroundColor: '#af8888ff',
        width: '100%',
        marginTop: 10,
    },
    forgotPasswordText: {
        fontFamily: 'roboto',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#FF7F27',
        textTransform: 'uppercase',
    },
    memberText: {
        fontFamily: 'roboto',
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#FFFFFF',
    },
    adminText: {
        fontFamily: 'roboto',
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#00000059',
    },
    btn1: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FF7F27',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    btn2: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#E2E2E2',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    btnsContainer: {
        flexDirection: 'row',
        elevation: 4,
        shadowColor: '#020202ff',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,


    },
    accountTypeText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#FF7F27',
        textTransform: 'uppercase',
        marginTop: 5,

    },
    passwordContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    password: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0,
        color: '#C4C4C4',

    },
    inputsContainer: {
        width: '100%',
        marginTop: 70,
    },
    textInput: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0,
        // backgroundColor: '#a17c7cff',
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // textAlign: 'center',
        // height: '100%'

    },
    textInputContainer: {
        // backgroundColor: '#ab8f8fff',
        flex: 1,
        paddingHorizontal: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: '100%',
    },
    divider: {
        width: 2,
        height: '80%',
        backgroundColor: '#DDDCDC',
        // padding: 2,
    },
    countryCodeText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0,
        color: '#263238',

    },
    phoneText: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 12,
        // leading-trim: NONE;
        lineHeight: 12,
        letterSpacing: 0,
        textTransform: 'uppercase',
        color: '#FF7F27',

    },
    headingContainer: {
        alignItems: 'center',
        gap: 8,
    },
    mainContainer: {
        alignItems: 'center',
        // backgroundColor: '#481616ff'
    },
    logoContainer: {
        paddingTop: 20,
        paddingBottom: 30,
        // backgroundColor: '#d69999ff'

    },
    loginHeading: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 18,
        letterSpacing: 0,
        color: '#1D283A78',
    },
    subHeading: {
        fontFamily: 'roboto',
        fontWeight: '800',
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 18,
        letterSpacing: 0,
        color: '#1D283A',

    },
    phoneTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDDCDC',
        // width: '100%',
        height: 47,
        // backgroundColor: '#bbaaaaff',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,

    },
    flagDropdown: {
        flexDirection: 'row',
        // backgroundColor: '#7a6d6dff',
        alignItems: 'center',
        gap: 10,
        height: '100%',

    }
});
