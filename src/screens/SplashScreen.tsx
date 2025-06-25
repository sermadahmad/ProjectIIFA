import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Logo from '../components/Logo'
import type { StackNavigationProp } from '@react-navigation/stack';

type SplashScreenProps = {
    navigation: StackNavigationProp<any>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Onboarding');
        }, 2000); // Navigate after 2 seconds

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.heading}>Post Impact</Text>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    heading: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginTop: 10,
    }

});