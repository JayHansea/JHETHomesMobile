import React from "react";
import { View, Text } from "react-native";
import ReusableHeader from "../../reusables/header/ReusableHeader";
import SalesCard from "../../cards/sales/SalesCard";

const Sales = () => {
  return (
    <View>
      <ReusableHeader header={"Popular Sales"} link={"See All"} />
      <SalesCard />
    </View>
  );
};

export default Sales;
