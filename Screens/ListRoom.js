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
export class ListRoom extends Component {
  render() {
    const handleClick = () => {
      console.log("hello");
      alert("Hello");
    };
    return (
      <View style={default_styles.container}>
        <ScrollView style={style.listItem}>
          <TouchableOpacity style={style.borderItem} onPress={handleClick}>
            <Image
              source={require("../assets/home.png")}
              style={style.iconItem}
            />
            <Text style={style.itemText}>Dãy trọ 1A </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

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
    // backgroundColor: "red",
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  itemText: {
    color: "red",
    // backgroundColor: "blue",
    width: 90,
    flex: 4,
    fontSize: 40,
    lineHeight: 40,
  },
});
