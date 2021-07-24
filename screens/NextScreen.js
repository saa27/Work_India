import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { DATA } from "../data/dummy-data";
import ListItem from "../components/ListItem";
import GridItem from "../components/GridItem";

const NextScreen = (props) => {
  const renderListItem = (itemdata) => {
    return (
      <GridItem
        name={itemdata.item.name}
        price={itemdata.item.price}
        color="#DCDCDC"
      />
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.outer}>
          <View style={styles.first}>
            <Text style={styles.explore}>Explore</Text>
            <Text style={styles.filter}>Filter</Text>
          </View>
          <View style={styles.second}>
            <Searchbar
              placeholder="Search"
              style={styles.searchBar}
              inputStyle={{ fontSize: 16 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={DATA}
          key={DATA}
          renderItem={renderListItem}
          keyExtractor={(item, index) => item.id}
          numColumns={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    height: 200,
    backgroundColor: "lavender",
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 45,
    paddingTop: 80,
  },
  outer: {
    flexDirection: "column",
  },
  first: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  second: {},
  explore: {
    fontWeight: "bold",
    fontSize: 16,
  },
  filter: {
    fontSize: 16,
    color: "#3CB371",
  },
  searchBar: {
    borderRadius: 20,
    height: 40,
    fontSize: 16,
  },
  listContainer: {
    // flex: 1,
    margin: 20,
  },
});

export default NextScreen;
