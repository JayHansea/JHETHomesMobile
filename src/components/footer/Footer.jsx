import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./Footer.Style";
import { COLORS } from "../../constants/theme";
import { WidthSpacer } from "../spacer/Spacer";

const Footer = ({ slides, currentSlideIndex, goNextSlide, skip, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View key={index} style={[styles.indicator, currentSlideIndex == index && styles.activeIndicator]}
          /> 
        ))}
      </View>
      <View style={styles.btnContainerWrapper}>
        {
          currentSlideIndex == slides.length - 1 ? 
          <View style={styles.getStartedContainer}>
            <TouchableOpacity 
              style={styles.getStartedBtn}
              onPress={() => navigation.replace('Home')}
            >
              <Text style={[styles.btnText, {color: COLORS.white,}]}>Get Started</Text>
            </TouchableOpacity>
          </View> : 
          <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.btn, {borderColor: COLORS.primary, borderWidth: 1, backgroundColor: 'transparent'}]} onPress={skip}>
              <Text style={[styles.btnText, {color: COLORS.primary,}]}>Skip</Text>
            </TouchableOpacity>
            <WidthSpacer />
            <TouchableOpacity 
              style={styles.btn}
            >
              <Text style={[styles.btnText, {color: COLORS.white,}]} onPress={goNextSlide}>Next</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    </View>
  )
}

export default Footer;