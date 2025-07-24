import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, setValue } from '../redux/counterSlice';
import { RootState } from '../redux/store';

type CounterScreenProps = {
    navigation: any; // Adjust type as needed
};
const CounterScreen: React.FC<CounterScreenProps> = ({navigation}) => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {
            dispatch(increment());
            console.log("Increment Pressed");
        }} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            dispatch(decrement());
            console.log("Decrement Pressed");
        }} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            dispatch(setValue(10));
            console.log("Update Pressed");
        }} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Update to 10</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CounterTwoScreen')} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Go to Counter Two</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    countText: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    buttonContainer: {
        backgroundColor: '#6d5b89ff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});