import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
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

const OnBoardingScreen = ({ navigation }: OnBoardingScreenProps) => {
    const [step, setStep] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setStep(prev => prev + 1);
        }, 5000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (step >= headings.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            navigation.replace('Login');
        }
    }, [step, navigation]);

    const handlePress = () => setStep(prev => prev + 1);

    // Prevent out-of-bounds access
    if (step >= headings.length) return null;

    return (
        <OnBoardingScreenComponent
            navigation={navigation}
            heading={headings[step]}
            paragraph={paragraphs[step]}
            buttonText={buttonTexts[step]}
            handlePress={handlePress}
            step={step}
        />
    );
};

export default OnBoardingScreen;