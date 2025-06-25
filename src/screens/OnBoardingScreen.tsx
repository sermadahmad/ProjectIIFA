import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Logo from '../components/Logo';
import MySolidButton from '../components/MySolidButton';
import type { StackNavigationProp } from '@react-navigation/stack';
import OnBoardingScreenComponent from '../components/OnBoardingScreenComponent';

type OnBoardingScreenProps = {
    navigation: StackNavigationProp<any>;
};

const headings = [
    "Transform Your Social Game with AI",
    "AI-Powered Content Creation",
    "Turn Insights into Impact",
];

const paragraphs = [
    "Personalized insights tailored to your personality and interests. Craft posts that captivate, connect, and grow your audience like never before!",
    "From thoughtful feedback to engagement-boosting ideas, let our AI analyze and optimize your posts for maximum impact",
    "Stay ahead with real-time analytics and feedback. Watch your engagement soar as you master the art of social media.",
];

const buttonTexts = [
    "Skip",
    "Skip",
    "Get Started",
];

const images = [
    require('../assets/onboarding1.png'),
    require('../assets/onboarding2.png'),
    require('../assets/onboarding3.png'),
];

const OnBoardingScreen = ({ navigation }: OnBoardingScreenProps) => {
    const [step, setStep] = useState(0);

    const handlePress = () => {
        if (step < headings.length - 1) {
            setStep(step + 1);
        } else {
            navigation.replace('Login');
        }
    };

    return (
        // <View>
            <OnBoardingScreenComponent
                navigation={navigation}
                image={images[step]}
                heading={headings[step]}
                paragraph={paragraphs[step]}
                buttonText={buttonTexts[step]}
                handlePress={handlePress}
                step={step}
            />
        // </View>
    );
};

export default OnBoardingScreen;