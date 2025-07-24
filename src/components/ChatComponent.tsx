import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type ChatComponentProps = {
    image?: any;
    name: string;
    lastMessage: string;
    noOfUnreadMessages: number;
};

const ChatComponent: React.FC<ChatComponentProps> = ({ image, name, lastMessage, noOfUnreadMessages }) => {
    return (
        <TouchableOpacity>
            <View style={styles.chatContainer}>
                <View style={styles.firstContainer}>
                    <View style={styles.imageContainer}>
                        {image ? (
                            <Image source={image} style={styles.image} />
                        ) : (
                            <Image
                                source={require('../assets/images/girlImage.png')}
                                style={styles.image}
                            />
                        )}
                    </View>
                    <View style={{ marginLeft: 12, width: noOfUnreadMessages === 0 ? '70%' : '60%' }}>
                        <Text style={styles.nameText}>{name}</Text>
                        <Text
                            style={styles.lastMessageText}
                            numberOfLines={1}
                            ellipsizeMode='tail'
                        >
                            {lastMessage}
                        </Text>
                    </View>
                </View>
                {noOfUnreadMessages > 0 && (
                    <View style={styles.unReadMessagesContainer}>
                        <Text style={styles.unReadMessagesText}>{noOfUnreadMessages}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

export default ChatComponent;

const styles = StyleSheet.create({
    chatContainer: {
        height: 92,
        // backgroundColor: 'rgba(217, 219, 230, 1)',
        backgroundColor: 'rgba(246, 247, 252, 1)',
        borderRadius: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        width: '100%',
        marginVertical: 5,
    },
    firstContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        // backgroundColor: '#b59393ff',
        height: 60,
        width: 60,
        borderWidth: 2,
        borderColor: 'rgba(226, 226, 226, 1)',
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 20,
        // marginHorizontal: 20,

    },
    image: {
        borderRadius: 30,
        width: '93%',
        height: '93%',
        // margin: 2,

    },
    nameText: {
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 18,
        letterSpacing: 0,
        color: 'rgba(47, 47, 47, 1)',
        padding: 2,
    },
    lastMessageText: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 13,
        letterSpacing: 0,
        color: 'rgba(47, 47, 47, 0.49)',
        padding: 2,

    },
    unReadMessagesContainer: {
        height: 22,
        width: 22,
        backgroundColor: 'rgba(255, 127, 39, 1)',
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unReadMessagesText: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 13,
        letterSpacing: 0,
        color: 'rgba(255, 255, 255, 1)',
    },
});