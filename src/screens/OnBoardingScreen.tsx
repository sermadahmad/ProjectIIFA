import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo';
import MySolidButton from '../components/MySolidButton';
import type { StackNavigationProp } from '@react-navigation/stack';
import OnBoardingScreenComponent from '../components/OnBoardingScreenComponent';

type OnBoardingScreenProps = {
    navigation: StackNavigationProp<any>;
};

// const headings = [
//     "Transform Your Social Game with AI",
//     "AI-Powered Content Creation",
//     "Turn Insights into Impact",
// ];

// const paragraphs = [
//     "Personalized insights tailored to your personality and interests. Craft posts that captivate, connect, and grow your audience like never before!",
//     "From thoughtful feedback to engagement-boosting ideas, let our AI analyze and optimize your posts for maximum impact",
//     "Stay ahead with real-time analytics and feedback. Watch your engagement soar as you master the art of social media.",
// ];

// const buttonTexts = [
//     "Skip",
//     "Skip",
//     "Get Started",
// ];

const onBoarding = [
    {
        heading: "Transform Your Social Game with AI",
        paragraph: "Personalized insights tailored to your personality and interests. Craft posts that captivate, connect, and grow your audience like never before!",
        buttonText: "Skip",
    },
    {
        heading: "AI-Powered Content Creation",
        paragraph: "From thoughtful feedback to engagement-boosting ideas, let our AI analyze and optimize your posts for maximum impact",
        buttonText: "Skip",
    },
    {
        heading: "Turn Insights into Impact",
        paragraph: "Stay ahead with real-time analytics and feedback. Watch your engagement soar as you master the art of social media.",
        buttonText: "Get Started",
    }
];
const OnBoardingScreen = ({ navigation }: OnBoardingScreenProps) => {
    return (
        <ScrollView
            pagingEnabled
            horizontal
        >
            {onBoarding.map((item, index) => (
                <OnBoardingScreenComponent
                    key={index}
                    navigation={navigation}
                    heading={item.heading}
                    paragraph={item.paragraph}
                    buttonText={item.buttonText}
                    step={index}
                />
            )
            )}
        </ScrollView>
    );
};

export default OnBoardingScreen;