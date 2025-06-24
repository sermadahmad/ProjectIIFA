import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import MySolidButton from '../components/MySolidButton';
import type { StackNavigationProp } from '@react-navigation/stack';

type OnBoardingScreenProps = {
    navigation: StackNavigationProp<any>;
};

const OnBoardingScreen = ({ navigation }: OnBoardingScreenProps) => {


    const handlePress = () => {
        console.log("Skip button pressed");
        // Navigate to the next screen or perform any action
        navigation.navigate('Login');

    };

    return (
        <View style={styles.container}>
            <Logo />
            <View>
                <Image
                    source={require('../assets/onboarding.png')}
                    style={styles.onboardingImage}
                />
            </View>
            <View style={styles.linesConainer}>
                <View style={styles.line1} />
                <View style={styles.line2} />
                <View style={styles.line3} />
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    Transform Your Social Game with AI
                </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                    Personalized insights tailored to your personality and interests. Craft posts that captivate, connect, and grow your audience like never before!
                </Text>
            </View>

            <MySolidButton 
                text={"Skip"}
                handlePress={handlePress}
            />


        </View>
    )
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 24,
    },
    image: {
        width: 97,
        height: 73,

    },
    onboardingImage: {
        width: 371.61,
        height: 354,
        marginTop: 64,
    },
    heading: {
        fontSize: 24,
        lineHeight: 24,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'Montserrat',

    },
    headingContainer: {
        width: 306,
    },
    paragraph: {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 14,
        textAlign: 'center',
        color: '#000000',
        marginHorizontal: 12,
    },
    btnText: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#0070C0',
        width: 398,
        padding: 16,
        borderRadius: 10,
        marginTop: 24,
    },
    linesConainer: {
        flexDirection: 'row',
        gap: 8,
    },
    line1: {
        height: 5,
        width: 15,
        backgroundColor: '#FFC000',
    },
    line2: {
        height: 5,
        width: 15,
        backgroundColor: '#000000',
    },
    line3: {
        height: 5,
        width: 15,
        backgroundColor: '#000000',
    }

});
