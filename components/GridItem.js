import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      {/* <TouchableCmp style={{ flex: 1 }}> */}
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text></Text>
      </View>
      <View style={styles.cont}>
        <Text>{props.name}</Text>
        <Text style={{ fontWeight: "bold" }}>{props.price}</Text>
      </View>
      {/* </TouchableCmp> */}
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
  container: {
    flex: 1,
    margin: 5,
    height: 200,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
  title: {
    fontSize: 20,
    textAlign: "right",
  },
  cont: {
    flexDirection: "column",
    marginLeft: 10,
  },
});

export default CategoryGridTile;
