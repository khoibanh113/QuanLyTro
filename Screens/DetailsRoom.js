import React, { Component } from "react";
import { Text, View } from "react-native";

const DetailsRoom = ({ route, navigation }) => {
  const { rowID, userID } = route.params;

  return (
    <View>
      <Text> textInComponent {JSON.stringify(rowID)}</Text>
    </View>
  );
};

export default DetailsRoom;
