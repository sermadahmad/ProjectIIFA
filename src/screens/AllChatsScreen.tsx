import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationParamList } from '../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICONS } from '../constants/icons';
import MyButton from '../components/MyButton';
import ChatComponent from '../components/ChatComponent';

type AllChatsScreenProps = NativeStackScreenProps<StackNavigationParamList, 'AllChatsScreen'>;

const data = [
  {
    name: 'Alice',
    lastMessage: 'Hey, how are you?',
    noOfUnreadMessages: 2,
    image: require('../assets/images/girlImage.png'),
  },
  {
    name: 'Bob',
    lastMessage: 'Let’s meet tomorrow.',
    noOfUnreadMessages: 0,
    image: require('../assets/images/girlImage.png'),
  },
  {
    name: 'Charlie',
    lastMessage: 'Did you finish the project?',
    noOfUnreadMessages: 1,
    image: require('../assets/images/girlImage.png'),
  },
  {
    name: 'David',
    lastMessage: 'Can you send me the files?',
    noOfUnreadMessages: 0,
    image: require('../assets/images/girlImage.png'),
  },
  {
    name: 'Eve',
    lastMessage: 'Let’s catch up later.',
    noOfUnreadMessages: 3,
    image: require('../assets/images/girlImage.png'),
  },
  {
    name: 'Alice',
    lastMessage: 'Hey, how are you?',
    noOfUnreadMessages: 2,
    image: require('../assets/images/girlImage.png'),
  },
  {
    name: 'Bob',
    lastMessage: 'Let’s meet tomorrow.',
    noOfUnreadMessages: 0,
    image: require('../assets/images/girlImage.png'),
  },
  {
    name: 'Charlie',
    lastMessage: 'Did you finish the project?',
    noOfUnreadMessages: 1,
    image: require('../assets/images/girlImage.png'),
  },
  {
    name: 'David',
    lastMessage: 'Can you send me the files?',
    noOfUnreadMessages: 0,
    image: require('../assets/images/girlImage.png'),
  },
  {
    name: 'Eve',
    lastMessage: 'Let’s catch up later.',
    noOfUnreadMessages: 3,
    image: require('../assets/images/girlImage.png'),
  },
  
];

// const AllChatsScreen: React.FC<AllChatsScreenProps>  = () => {
const AllChatsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'rgba(255, 127, 39, 1)'} translucent={false} />
      <View style={styles.mainContainer}>
        <View style={styles.headerMainContainer}>
          <View>
            <ICONS.ACSHome />
          </View>
          <Text style={styles.messagesText}>MESSAGES</Text>
          <View style={styles.noOfMessagesTextContainer}>
            <Text style={styles.noOfMessagesText}>12</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <ICONS.ACSSearch />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="rgba(0, 0, 0, 0.3)"
            style={styles.textInput}
          />
        </View>
        <View style={styles.headerFooterContainer}>
          <TouchableOpacity>
            <Text style={styles.allChatText}>All Chats</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity>
            <Text style={styles.newMessageText}>New Message</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <ChatComponent
            image={item.image}
            name={item.name}
            lastMessage={item.lastMessage}
            noOfUnreadMessages={item.noOfUnreadMessages}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 100, backgroundColor: 'rgba(255, 255, 255, 1)' }}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: 'center', marginTop: 20, color: 'rgba(0, 0, 0, 0.5)' }}>
            No chats available
          </Text>
        )}
      />
      <View style={styles.footerContainer}>
        <View style={styles.footerButtonsContainer}>
          <View style={styles.footerButton1Container}>
            <MyButton
              text="MEMBERS"
              onPress={() => {
                // navigation.navigate('AllChatsScreen');
              }}
              backgroundColor="rgba(47, 47, 47, 1)"
              color="#FFFFFF"
            />
          </View>
          <View style={styles.footerButton2Container}>
            <MyButton
              text="GROUP CHAT"
              onPress={() => console.log('Pay Now Pressed')}
              backgroundColor="#FF7F27"
              color="#FFFFFF"
            />
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default AllChatsScreen

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgba(255, 127, 39, 1)',
    alignItems: 'center',
  },
  headerMainContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  messagesText: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
  },
  noOfMessagesTextContainer: {
    backgroundColor: 'rgba(7, 3, 0, 1)',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    height: 22,
    width: 22,
  },
  noOfMessagesText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 13,
    letterSpacing: 0,
    color: 'rgba(255, 255, 255, 1)',
  },
  searchContainer: {
    width: '90%',
    height: 50,
    backgroundColor: 'rgba(254, 254, 254, 1)',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontWeight: '300',
    fontSize: 16,
    letterSpacing: 0,
    color: 'rgba(0, 0, 0, 0.3)',
    marginLeft: 10,
  },
  headerFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 40,
  },
  allChatText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    color: 'rgba(255, 255, 255, 1)',
    paddingRight: 30,
  },
  divider: {
    width: 1.5,
    height: '90%',
    backgroundColor: 'rgba(230, 230, 230, 1)',

    // marginVertical: 10,
    // alignSelf: 'center',
  },
  newMessageText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    color: 'rgba(255, 255, 255, 0.4)',
    paddingVertical: 10,
    // paddingLeft: 40,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
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

});