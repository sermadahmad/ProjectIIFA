import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { ICONS } from '../constants/icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import MyButton from '../components/MyButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationParamList } from '../navigation/types';
import Icon from 'react-native-vector-icons/Ionicons';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';

const { width, height } = Dimensions.get('window');

type LoginScreenProps = NativeStackScreenProps<StackNavigationParamList, 'LoginScreen'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
// const LoginScreen = () => {
    const [isSecure, setIsSecure] = useState(true);
    const [showPicker, setShowPicker] = useState(false);
    const [countryCode, setCountryCode] = useState<CountryCode>("GB");
    const [callingCode, setCallingCode] = useState("44");
    const [phoneNumber, setPhoneNumber] = useState("");

    const onSelect = (country: Country) => {
        // console.log(country);
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
        setShowPicker(false);
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainContainer}>
                    <View style={styles.logoContainer}>
                        <ICONS.Logo height={height * 0.09} />
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
                                <TouchableOpacity 
                                    style={{flexDirection:'row', alignItems: 'center'}}
                                    onPress={() => setShowPicker(true)}
                                >
                                    <CountryPicker
                                        withAlphaFilter
                                        withCallingCode
                                        withCloseButton
                                        withFilter
                                        withFlag
                                        visible={showPicker}
                                        countryCode={countryCode}
                                        onSelect={onSelect}
                                        onClose={() => setShowPicker(false)}
                                    />
                                    <Text style={styles.countryCodeText}>+{callingCode}</Text>
                                    <ICONS.DropDown />
                                </TouchableOpacity>
                                <View style={styles.divider} ></View>
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    placeholder='Enter phone number'
                                    style={styles.textInput}
                                    placeholderTextColor={'rgba(196, 196, 196, 1)'}
                                    keyboardType='numeric'
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                />
                            </View>
                        </View>
                        <Text style={styles.phoneText}>create your password</Text>
                        <View style={styles.phoneTextInput}>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    placeholder='********'
                                    style={styles.textInput}
                                    placeholderTextColor={'rgba(196, 196, 196, 1)'}
                                    secureTextEntry={isSecure}
                                />
                                <TouchableOpacity onPress={() => {
                                    setIsSecure(!isSecure);
                                }}>
                                    <Icon name={isSecure ? 'eye-off' : 'eye'} size={25} color={'rgba(0, 0, 0, 0.35)'} />
                                </TouchableOpacity>
                            </View>
                        </View>
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
                            onPress={() => {
                                navigation.navigate('OTPScreen')
                            }}
                        />
                    </View>
                    <Text style={styles.organization}>Do you run an organization?</Text>
                    <Text style={styles.signupAdmin}>Sign up as Admin</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default LoginScreen;

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
    },
    btnforgotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    password: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0,
        color: '#C4C4C4',
    },
    headingContainer: {
        alignItems: 'center',
        gap: 8,
    },
    mainContainer: {
        alignItems: 'center',
    },
    logoContainer: {
        paddingTop: 20,
        paddingBottom: 30,
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
    inputsContainer: {
        width: '100%',
        marginTop: 70,
    },
    phoneText: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 0,
        textTransform: 'uppercase',
        color: '#FF7F27',
    },
    phoneTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDDCDC',
        height: 47,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
    },
    flagDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        height: '100%',
    },
    countryCodeText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0,
        color: '#263238',
        marginRight: 10,
    },
    divider: {
        width: 2,
        height: '80%',
        backgroundColor: '#DDDCDC',
    },
    textInputContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        height: '100%',
    },
    passwordContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        height: '100%',
    },
    textInput: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0,
        color: 'rgba(196, 196, 196, 1)',
        flex: 1,
        height: '100%',
    },
});
