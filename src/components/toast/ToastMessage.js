import { Animated, View, Text, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";
import { useSelector, useDispatch } from "react-redux";
import { toastActions } from "../../store/toast-slice";

const ToastMessage = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast.toast);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (toast) {
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
      ]).start(() => {
        // Hide toast after animation
        dispatch(toastActions.hideToast());
      });
    }
  }, [toast, dispatch]);

  return (
    <View style={styles.container}>
      {toast && (
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
          <Text>{toast.message}</Text>
        </Animated.View>
      )}
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
