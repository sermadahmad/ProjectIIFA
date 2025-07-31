import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';

type MyToastProps = {
  text: string;
  visible: boolean;
  duration?: number; // in ms
  onHide?: () => void;
};

const MyToast: React.FC<MyToastProps> = ({ text, visible, duration = 2000, onHide }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => onHide && onHide());
      }, duration);
      return () => clearTimeout(timer);
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, duration, fadeAnim, onHide]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.toastContainer, { opacity: fadeAnim }]}> 
      <Text style={styles.toastText}>{text}</Text>
    </Animated.View>
  );
};

export default MyToast;

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    backgroundColor: 'rgba(255, 64, 64, 0.95)',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    zIndex: 9999,
    elevation: 10,
  },
  toastText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});