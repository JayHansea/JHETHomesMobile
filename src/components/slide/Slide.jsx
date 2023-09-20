import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SlideStyles";

const Slide = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.imageStyle}/>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}

export default Slide;