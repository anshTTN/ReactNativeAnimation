import {View, Text, Animated} from 'react-native';
import React, {useEffect} from 'react';

const Home = () => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.Text
        style={{
          fontWeight: 'bold',
          opacity: animatedValue,
          transform: [
            {
              rotate: animatedValue.interpolate({
                inputRange: [0, 0.3, 0.6, 0.8, 1],
                outputRange: ['0deg', '720deg', '-720deg', '-1480deg', '0deg'],
              }),
            },
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 5],
              }),
            },
          ],
        }}>
        Task1
      </Animated.Text>
    </View>
  );
};

export default Home;
