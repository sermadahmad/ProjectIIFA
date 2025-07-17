import { StyleSheet, Text, View, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICONS } from '../constants/icons'
import MyButton from '../components/MyButton';

const { width, height } = Dimensions.get('window');

const RegisterScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <ICONS.Logo height={height * 0.09} />
                </View>
                <View style={styles.setupTextContainer}>
                    <Text style={styles.setupText}>SETUP YOUR ORGANIZATION</Text>
                </View>
                <View style={styles.noteTextContainer}>
                    <Text style={styles.noteText}>PLEASE NOTE: {'\n'}
                        MEMBERS ARE NOT REQUIRED TO REGISTER.
                        CONTACT YOUR ORGANIZATION ADMIN
                        TO GET YOUR MEMBERSHIP LOGIN DETAILS.</Text>
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
                    <Text style={styles.phoneText}>create your password</Text>
                    <View style={styles.phoneTextInput}>
                        <View style={styles.passwordContainer}>
                            <Text style={styles.password}>*********</Text>
                            <ICONS.Eye />
                        </View>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <MyButton
                    text='NEXT'
                    color='rgba(255, 255, 255, 1)'
                    backgroundColor='rgba(255, 127, 39, 1)'
                    onPress={()=>console.log("NEXT")}
                    />
                </View>
                <View style={styles.alreadyTextContainer}>
                    <Text style={styles.alreadyText}>Already have an account?</Text>
                </View>
                <View style={styles.loginTextContainer}>
                    <TouchableOpacity><Text style={styles.loginText}>Admin Login</Text></TouchableOpacity>
                    <Text style={styles.orText}>  or  </Text>
                    <TouchableOpacity><Text style={styles.loginText}>Member Login</Text></TouchableOpacity>
                </View>
                <View style={styles.nextTextContainer}>
                    <Text style={styles.alreadyText}>By clicking NEXT, you agree to the</Text>
                </View>
                <View style={styles.loginTextContainer}>
                    <TouchableOpacity><Text style={styles.loginText}>Terms of Service</Text></TouchableOpacity>
                    <Text style={styles.andText}> and </Text>
                    <TouchableOpacity><Text style={styles.loginText}>Privacy Policies</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    loginTextContainer:{
        flexDirection: 'row'
        // width: '90%',
        // marginTop: height * 0.04 
        // padding: 2
    },
    loginText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(255, 127, 39, 1)',
        // textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1
        // marginTop: 5,

    },
    orText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(38, 50, 56, 1)',
        // textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1
        // marginTop: 5,

    },
    andText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(29, 40, 58, 0.47)',
        // textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1
        // marginTop: 5,

    },
    alreadyTextContainer:{
        // width: '90%',
        marginTop: height * 0.04 
    },
    nextTextContainer:{
        // width: '90%',
        marginTop: height * 0.13 
    },
    alreadyText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(29, 40, 58, 0.47)',
        // textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1
        // marginTop: 5,

    },
    btnContainer:{
        width: '90%',
        marginTop: height * 0.01 
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

    setupTextContainer: {
        marginTop: height * 0.001,
    },
    setupText: {
        // fontFamily: 'roboto',
        fontWeight: '600',
        // fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0,
        color: 'rgba(29, 40, 58, 1)',
        textAlign: 'center'
    },
    noteTextContainer: {
        marginTop: height * 0.01,
        width: width * 0.7,
    },
    noteText: {
        // fontFamily: 'roboto',
        fontWeight: '400',
        // fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 0,
        color: 'rgba(128, 128, 128, 1)',
        textAlign: 'center'
    },

    mainContainer: {
        alignItems: 'center',
        // backgroundColor: '#d69999ff'
    },
    logoContainer: {
        paddingTop: 20,
        paddingBottom: 30,
        // backgroundColor: '#d69999ff'

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


});