import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationParamList } from '../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';

type AllChatsScreenProps = NativeStackScreenProps<StackNavigationParamList, 'AllChatsScreen'>;

// const AllChatsScreen: React.FC<AllChatsScreenProps>  = () => {
const AllChatsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: 'rgba(255, 127, 39, 1)' }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'rgba(255, 127, 39, 1)'} translucent={false} />
      <View>
        
      </View>
    </SafeAreaView>
  )
}

export default AllChatsScreen

const styles = StyleSheet.create({});