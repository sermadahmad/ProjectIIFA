import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import Logo from '../assets/svgs/logo.svg'
import Svg, { Circle, Rect, SvgUri } from 'react-native-svg';

const AnalyticsScreen = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  const [count, setCount] = React.useState(10);
  const [counting, setCounting] = React.useState(false);

  const startCountDown = () => {
    if (counting) return; // Prevent multiple intervals
    setCounting(true);
    setCount(10);
    const interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setCounting(false);
      setCount(10); // Reset count after 10 seconds
    }, 11000);
  };


  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity onPress={startCountDown}>
          <Text style={styles.btn}>Start Count Down</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Custom SVG Example</Text>
      <View style={styles.customsvg}>
        <Svg width={100} height={100} viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
      </View>
      <Text style={styles.heading}>Local SVG Example</Text>
      <Logo width={100} height={100} />

    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    // marginTop: 20,
  },
  countdownContainer: {
    alignItems: 'center',
  },
  customsvg: {
    // marginTop: 20,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  btn: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  count: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
});

export default AnalyticsScreen;
