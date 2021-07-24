import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

let TouchableCmp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback; //diff for both ios and android
}

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listAndIcon}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.listImg}>
            <Text></Text>
          </View>
          <View style={styles.titleAndartist}>
            <Text style={styles.listTitle}>{props.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.price}>MRP: {props.artist}</Text>
              <Text style={styles.listArtist}>{props.extra}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: height / 12,
    padding: height / 75,
    borderBottomWidth: 0.6,
    borderBottomColor: (220, 220, 20),
    justifyContent: "center",
  },
  listTitle: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  listAndIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listImg: {
    height: height / 18.75,
    width: height / 18.75,
    backgroundColor: "gray",
    opacity: 0.2,
    borderRadius: 5,
  },
  titleAndartist: {
    paddingLeft: height / 75,
  },
  listArtist: {
    fontSize: height / 62,
    color: "gray",
  },
  price: {
    fontSize: height / 62,
    color: "gray",
    marginRight: 40
  },
});

export default ListItem;
