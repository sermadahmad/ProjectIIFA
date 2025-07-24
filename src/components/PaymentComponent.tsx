import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ICONS } from '../constants/icons'

type PaymentComponentProps = {
    icon?: any,
    heading: string,
    subHeading: string,
    balance: string,
    date: string,
};

const PaymentComponent: React.FC<PaymentComponentProps> = ({ icon, heading, subHeading, balance, date }) => {
    return (
        <View style={{ marginHorizontal: 20 }}>
            <View style={styles.paymentContainer}>
                <View style={styles.iconHeadingContainer}>
                    <View style={styles.iconContainer}>
                        {icon ? icon : <ICONS.HSDebit />}
                    </View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.headingText}>{heading}</Text>
                        <Text style={styles.subHeadingText}>{subHeading}</Text>
                    </View>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={[
                        styles.balanceText, {
                            color: heading === 'Credit' ? 'rgba(24, 209, 147, 1)' : 'rgba(232, 54, 50, 1)'
                        }]}>
                        {balance}
                    </Text>
                    <Text style={styles.dateText}>{date}</Text>
                </View>
            </View>

        </View>
    )
};

export default PaymentComponent

const styles = StyleSheet.create({
    paymentContainer: {
        flexDirection: 'row',
        height: 64,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 13,
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 4,
        shadowOpacity: 0.4,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',

    },
    iconHeadingContainer: {
        // padding: 5
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        // padding: 5
    },
    headingContainer: {
        paddingHorizontal: 15,

    },
    headingText: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        // lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(47, 47, 47, 1)',


    },
    subHeadingText: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 11,
        // lineHeight: 11,
        letterSpacing: 0,
        color: 'rgba(149, 149, 149, 0.88)',


    },
    amountContainer: {

    },
    balanceText: {
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 18,
        // lineHeight: 18,
        letterSpacing: 0,
        color: 'rgba(232, 54, 50, 1)',
        // textAlign: 'right',




    },
    dateText: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 11,
        // lineHeight: 11,
        letterSpacing: 0,
        color: 'rgba(149, 149, 149, 0.88)',
        // textAlign: 'right',

    },
});