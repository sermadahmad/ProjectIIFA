
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
};

const OnBoardingScreenComponent: React.FC<OnBoardingScreenComponentProps> = ({
    image,
    heading,
    paragraph,
    buttonText,
    handlePress,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View>
                <Image source={image} style={styles.onboardingImage} />
            </View>
            <View style={styles.linesConainer}>
                <View style={styles.line1} />
                <View style={styles.line2} />
                <View style={styles.line3} />
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{heading}</Text>
            </View>
            <View>
                <Text style={styles.paragraph}>{paragraph}</Text>
            </View>
            <View style={styles.btnContainer}>
                <MySolidButton text={buttonText} handlePress={handlePress} />
            </View>
        </View>
    );
};

export default OnBoardingScreenComponent;

const styles = StyleSheet.create({
    logoContainer: {
        margin : 50,
    },
    btnContainer: {
        position: 'absolute',
        bottom: 80,
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
        // marginTop: 64,
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
