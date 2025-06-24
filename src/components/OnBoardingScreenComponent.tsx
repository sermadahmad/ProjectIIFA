import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from './Logo';
import MySolidButton from './MySolidButton';

type OnBoardingScreenComponentProps = {
    navigation: StackNavigationProp<any>;
    image: any;
    heading: string;
    paragraph: string;
    buttonText: string;
    handlePress: () => void;
    step: number;
};

const OnBoardingScreenComponent: React.FC<OnBoardingScreenComponentProps> = ({
    image,
    heading,
    paragraph,
    buttonText,
    handlePress,
    step
}) => {
    return (
        <ScrollView 
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={true}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View style={styles.onboardingImageContainer}>
                <Image source={image} style={styles.onboardingImage} />
            </View>
            <View style={styles.linesConainer}>
                <View style={step === 0 ? styles.activeLine : styles.inactiveLine} />
                <View style={step === 1 ? styles.activeLine : styles.inactiveLine} />
                <View style={step === 2 ? styles.activeLine : styles.inactiveLine} />
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{heading}</Text>
            </View>
            <View style={styles.paragraphContainer}>
                <Text style={styles.paragraph}>{paragraph}</Text>
            </View>
            <View style={styles.btnContainer}>
                <MySolidButton text={buttonText} handlePress={handlePress} />
            </View>
        </ScrollView>
    );
};

export default OnBoardingScreenComponent;

const styles = StyleSheet.create({
    paragraphContainer: {
        width: 350,
        // backgroundColor: 'red',
    },
    onboardingImageContainer: {
        marginVertical: 25,
    },
    logoContainer: {
       paddingTop:40,
    },
    btnContainer: {
        // position: 'absolute',
        // bottom: 80,
        marginTop: 30,
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // gap: 24,
    },
    image: {
        width: 97,
        height: 73,

    },
    onboardingImage: {
        width: 371.61,
        height: 354,
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
        marginVertical: 30,
    },
    // btnText: {
    //     fontFamily: 'Montserrat',
    //     fontWeight: '700',
    //     fontSize: 16,
    //     lineHeight: 16,
    //     letterSpacing: 0,
    //     textAlign: 'center',
    //     color: '#ffffff',
    //     backgroundColor: '#0070C0',
    //     width: 398,
    //     padding: 16,
    //     borderRadius: 10,
    //     // marginTop: 24,
    // },
    linesConainer: {
        flexDirection: 'row',
        gap: 8,
        margin: 30,
    },
    activeLine: {
        height: 5,
        width: 15,
        backgroundColor: '#FFC000',
    },
    inactiveLine: {
        height: 5,
        width: 15,
        backgroundColor: '#000000',
    },
});
