import { StyleSheet, Text, View, StatusBar, Dimensions, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICONS } from '../constants/icons'
import PaymentComponent from '../components/PaymentComponent';
import MyButton from '../components/MyButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationParamList } from '../navigation/types';

const { width, height } = Dimensions.get('window');
type HomeScreenProps = NativeStackScreenProps<StackNavigationParamList, 'HomeScreen'>;

// Sample data for the FlatList
const data = [
    {
        icon: <ICONS.HSDebit />,
        heading: 'Debit',
        subHeading: 'Note: Please pay as soon as possible',
        balance: '-$50.45',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSCredit />,
        heading: 'Credit',
        subHeading: 'Note: Thanks for the payment',
        balance: '$200.50',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSDebit />,
        heading: 'Debit',
        subHeading: 'Note: Please pay as soon as possible',
        balance: '-$50.45',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSCredit />,
        heading: 'Credit',
        subHeading: 'Note: Thanks for the payment',
        balance: '$200.50',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSDebit />,
        heading: 'Debit',
        subHeading: 'Note: Please pay as soon as possible',
        balance: '-$50.45',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSCredit />,
        heading: 'Credit',
        subHeading: 'Note: Thanks for the payment',
        balance: '$200.50',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSDebit />,
        heading: 'Debit',
        subHeading: 'Note: Please pay as soon as possible',
        balance: '-$50.45',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSCredit />,
        heading: 'Credit',
        subHeading: 'Note: Thanks for the payment',
        balance: '$200.50',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSDebit />,
        heading: 'Debit',
        subHeading: 'Note: Please pay as soon as possible',
        balance: '-$50.45',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSCredit />,
        heading: 'Credit',
        subHeading: 'Note: Thanks for the payment',
        balance: '$200.50',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSDebit />,
        heading: 'Debit',
        subHeading: 'Note: Please pay as soon as possible',
        balance: '-$50.45',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSCredit />,
        heading: 'Credit',
        subHeading: 'Note: Thanks for the payment',
        balance: '$200.50',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSDebit />,
        heading: 'Debit',
        subHeading: 'Note: Please pay as soon as possible',
        balance: '-$50.45',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSCredit />,
        heading: 'Credit',
        subHeading: 'Note: Thanks for the payment',
        balance: '$200.50',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSDebit />,
        heading: 'Debit',
        subHeading: 'Note: Please pay as soon as possible',
        balance: '-$50.45',
        date: '15th Aug 2022',
    },
    {
        icon: <ICONS.HSCredit />,
        heading: 'Credit',
        subHeading: 'Note: Thanks for the payment',
        balance: '$200.50',
        date: '15th Aug 2022',
    },

];

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <ICONS.HSLogo />
                    </View>
                    <View style={styles.card}>
                        <View>
                            <View style={styles.estateTextContainer}>
                                <Text style={styles.estateText}>Johnson Estate</Text>
                            </View>
                            <View style={styles.amountTextContainer}>
                                <Text style={styles.amountText}>633.00 USD</Text>
                            </View>
                        </View>

                        <View>
                            <View style={styles.starMainContainer}>
                                <View style={styles.starContainer}>
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                </View>
                                <View style={styles.starContainer}>
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                </View>
                                <View style={styles.starContainer}>
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                </View>
                                <View style={styles.starContainer}>
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                    <ICONS.HSStar />
                                </View>
                            </View>
                            <View style={styles.switchDollarCard}>
                                <View style={styles.switchCard}>
                                    <ICONS.HSHome />
                                    <Text style={styles.switchText}>SWITCH</Text>
                                </View>
                                <View>
                                    <ICONS.HSDollar />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.recentTextContainer}>
                        <Text style={styles.recentText}>Recent Transactions</Text>
                    </View>
                    <View style={styles.filterMainContainer}>
                        <View style={styles.filterTextContainer}>
                            <Text style={styles.filterText}>Filter</Text>
                        </View>
                        <View style={styles.fromContainer}>
                            <Text style={styles.fromText}>From</Text>
                            <ICONS.HSCalendar />
                        </View>
                        <View style={styles.toContainer}>
                            <Text style={styles.toText}>To</Text>
                            <ICONS.HSCalendar />
                        </View>
                        <View style={styles.viewTextContainer}>
                            <Text style={styles.viewText}>View</Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <PaymentComponent
                            icon={item.icon}
                            heading={item.heading}
                            subHeading={item.subHeading}
                            balance={item.balance}
                            date={item.date}
                        />
                    )}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.footerContainer}>
                    <View style={styles.footerHeaderContainer}>
                        <View style={styles.footerHeaderContentContainer}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require('../assets/images/girlImage.png')}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                            </View>
                            <View style={styles.footerHeaderNameContainer}>
                                <Text style={styles.nameText}>Ben Oyeyemi</Text>
                                <Text style={styles.phoneText}>+2348055000990</Text>
                            </View>
                        </View>
                        <View style={styles.footerHeaderSettingsContainer}>
                            <ICONS.HSSettings />
                        </View>
                    </View>
                    <View style={styles.footerButtonsContainer}>
                        <View style={styles.footerButton1Container}>
                            <MyButton
                                text="SUPPORT"
                                onPress={() => {
                                    navigation.navigate('AllChatsScreen');
                                }}
                                backgroundColor="rgba(47, 47, 47, 1)"
                                color="#FFFFFF"
                            />
                        </View>
                        <View style={styles.footerButton2Container}>
                            <MyButton
                                text="PAY NOW"
                                onPress={() => console.log('Pay Now Pressed')}
                                backgroundColor="#FF7F27"
                                color="#FFFFFF"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    footerContainer: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        // borderWidth: 1,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
    },
    footerHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    footerHeaderContentContainer: {
        flexDirection: 'row',

    },
    imageContainer: {
        // backgroundColor: '#b59393ff',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderColor: 'rgba(226, 226, 226, 1)',
        // backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        borderRadius: 25,
        width: '90%',
        height: '90%',
        margin: 2,

    },
    footerHeaderNameContainer: {
        paddingHorizontal: 10,


    },
    nameText: {
        fontWeight: '700',
        fontSize: 18,
        letterSpacing: 0,
        color: 'rgba(51, 61, 65, 1)'
    },
    phoneText: {
        fontWeight: '500',
        fontSize: 14,
        letterSpacing: 0,
        color: 'rgba(0, 0, 0, 0.33)',

    },
    footerHeaderSettingsContainer: {

    },
    footerButtonsContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        // backgroundColor: '#ddd2d2ff',
    },
    footerButton1Container: {
        width: '50%',
        paddingRight: 10,
    },
    footerButton2Container: {
        width: '50%',
        paddingLeft: 10,

    },



    viewText: {
        // fontFamily: 'roboto',
        fontWeight: '400',
        // fontStyle: 'normal',
        fontSize: 18,
        // lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'rgba(255, 127, 39, 1)',
        // padding: 5,
        borderRadius: 6,

    },
    toText: {
        // fontFamily: 'roboto',
        fontWeight: '300',
        // fontStyle: 'normal',
        fontSize: 14,
        // lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(0, 0, 0, 0.6)',
        // padding: 5,

    },
    fromText: {
        // fontFamily: 'roboto',
        fontWeight: '300',
        // fontStyle: 'normal',
        fontSize: 14,
        // lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(0, 0, 0, 0.6)',
        // padding: 5,

    },
    filterText: {
        // fontFamily: 'roboto',
        fontWeight: '400',
        // fontStyle: 'normal',
        fontSize: 14,
        // lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(47, 47, 47, 1)',
        // padding: 5,

    },
    filterTextContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.05,
        // backgroundColor: '#aafcfa',
        paddingHorizontal: 8,
    },
    viewTextContainer: {
        // flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 127, 39, 1)',
        // padding: 5,
        borderRadius: 6,
        paddingHorizontal: 15,

        // alignItems: 'center',
        height: height * 0.05,
        // paddingHorizontal: 7,
        // backgroundColor: '#aafcfa'
    },
    fromContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: height * 0.05,
        gap: 30,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 6,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 6,

        // boxShadow: 'true',
        // backgroundColor: '#aafcfa',
        // paddingHorizontal: 7,
    },
    toContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: height * 0.05,
        gap: 30,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 6,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 6,

        // boxShadow: 'true',
        // padding: 8,
        // backgroundColor: '#aafcfa',
    },
    filterMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: '#e0cdcdff',
        width: '100%',
    },
    starMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        marginTop: 30,
        marginBottom: 5,
    },
    switchCard: {
        flexDirection: 'row',
        alignItems: 'center',

        // backgroundColor: '#dbcacaff'
    },
    switchDollarCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,


        // backgroundColor: '#dbcacaff'
    },
    recentTextContainer: {
        alignSelf: 'flex-start',
        marginVertical: height * 0.017,

    },
    logoContainer: {
        // alignSelf: 'flex-start',
        marginTop: height * 0.03,

    },
    recentText: {
        // flexDirection: 'row',
        // backgroundColor: '#dbcacaff'
        // fontFamily: 'roboto',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 18,
        // lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(51, 61, 65, 1)',

    },
    switchText: {
        // flexDirection: 'row',
        // backgroundColor: '#dbcacaff'
        // fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        // lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(255, 255, 255, 1)',

    },
    starContainer: {
        flexDirection: 'row',
        // backgroundColor: '#dbcacaff'
    },
    amountTextContainer: {
        // marginTop: height * 0.01,
        // width: width * 0.8,
        marginTop: 6
    },
    amountText: {
        // fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 24,
        lineHeight: 24,
        letterSpacing: 0,
        color: 'rgba(255, 255, 255, 1)',
    },
    estateTextContainer: {
        // marginTop: height * 0.01,
        // width: width * 0.8,
    },
    estateText: {
        // fontFamily: 'roboto',
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 27,
        lineHeight: 27,
        letterSpacing: 0,
        color: 'rgba(255, 255, 255, 1)',
    },
    container: {
        // flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
        // backgroundColor: 'gray',
    },
    card: {
        backgroundColor: 'rgba(255, 127, 39, 1)',
        height: height * 0.20,
        width: '100%',
        borderRadius: 13,
        marginVertical: 10,
        padding: 10,
        justifyContent: 'space-between',
    },
});