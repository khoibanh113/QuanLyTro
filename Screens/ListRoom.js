import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import default_styles from "../components/styles";
const ListRoom = ({ navigation }) => {
  //Hanle when loading page and get Dât from API
  const text = [
    { rowID: "1", nameRowRoom: "Dẫy số 1" },
    { rowID: "2", nameRowRoom: "Dẫy số 2" },
  ];

  // const obj = JSON.parse(text);

  return (
    <View style={default_styles.container}>
      <ScrollView style={style.listItem}>
        {text.map((item, index) => {
          return (
            <TouchableOpacity
              style={style.borderItem}
              onPress={() => {
                navigation.navigate("DetailsRoom", {
                  userID: "1",
                  rowID: item.rowID,
                });
              }}
              key={item.rowID}
            >
              <Image
                source={require("../assets/home.png")}
                style={style.iconItem}
              />
              <Text style={style.itemText}>{item.nameRowRoom} </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ListRoom;

const style = StyleSheet.create({
  listItem: {
    width: "100%",
    paddingHorizontal: 20,
    // paddingVertical: 20,
  },
  borderItem: {
    borderWidth: 1,
    width: "100%",
    height: 70,
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconItem: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  itemText: {
    color: "red",
    width: 90,
    flex: 4,
    fontSize: 40,
    lineHeight: 40,
  },
  plusWrapper: {
    backgroundColor: "blue",
    // alignItems: "flex-end",
    // alignSelf: "flex-end",
    flexDirection: "column-reverse",
  },
  iconPlus: {
    width: 60,
    height: 60,
  },
});
