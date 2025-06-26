import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/svgs/logo.svg';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo width={100} height={70} />
            </View>
            <View style={styles.headingParagraphContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Welcome Kashif!</Text>

                </View>
                <View style={styles.paragraphContainer}>
                    <Text style={styles.paragraph}>Craft Engaging Content with AI Precision!</Text>

                </View>
            </View>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'red',
    },
    logoContainer: {
        // width: 50,
        // height: 50,
        // backgroundColor: 'red',
        padding: 20,
    },
    headingParagraphContainer: {
        // marginRight: 20,
        gap:'5',
    },
    heading: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 24,
        letterSpacing: 0,
        color: '#000000',
    },
    paragraph: {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#0E538C',
    },
    headingContainer: {
    },
    paragraphContainer: {
    },
});

// heading
// font-family: Montserrat;
// font-weight: 700;
// font-size: 24px;
// line-height: 100%;
// letter-spacing: 0%;

// paragraph
// font-family: Montserrat;
// font-weight: 400;
// font-size: 14px;
// line-height: 100%;
// letter-spacing: 0%;

