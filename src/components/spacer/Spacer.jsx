import React from "react";
import { View } from "react-native";

const WidthSpacer = () => {
  return <View style={{flexDirection: 'row', width: 15}} />
}

const HeightSpacer = () => {
  return <View style={{flexDirection: 'column', height: 15}} />
}

export {
  WidthSpacer,
  HeightSpacer
}