import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from '../assets/svgs/logo.svg';
import OnBoarding1 from '../assets/svgs/onBoarding1.svg';
import OnBoarding2 from '../assets/svgs/onBoarding2.svg';
import OnBoarding3 from '../assets/svgs/onBoarding3.svg';
import MySolidButton from './MySolidButton';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';

type OnBoardingScreenComponentProps = {
    navigation: StackNavigationProp<any>;
    // image: any;
    heading: string;
    paragraph: string;
    buttonText: string;
    handlePress: () => void;
    step: number;
};

const OnBoardingScreenComponent: React.FC<OnBoardingScreenComponentProps> = ({
    // image,
    heading,
    paragraph,
    buttonText,
    handlePress,
    step
}) => {
      useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
    return (
        <ScrollView 
            contentContainerStyle={styles.container}
        >
            <View style={styles.logoContainer}>
                <Logo width={100} height={76} />
            </View>
            <View style={styles.onboardingImageContainer}>
                {/* <Image source={image} style={styles.onboardingImage} /> */}
                {step === 0 && <OnBoarding1 />}
                {step === 1 && <OnBoarding2 height={350} />}
                {step === 2 && <OnBoarding3 height={400} />}

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
        paddingBottom: 20,
    },
    container: {
        // flex: 1,
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
