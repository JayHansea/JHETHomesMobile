import { Animated, View, Text, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";

const ToastMessage = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            opacity,
            transform: [
              {
                translateY: opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-20, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Text>Toast Message</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 45,
    left: 0,
    right: 0,
  },
  animatedContainer: {
    margin: SIZES.medium,
    marginBottom: SIZES.xSmall,
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    borderRadius: SIZES.xSmall,
    ...SHADOWS.small,
  },
});

export default ToastMessage;
