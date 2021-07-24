import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Text } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import NextScreen from "../screens/NextScreen";

const defaultNavOptions = {
  headerShown: false,
};

const first = createStackNavigator(
  {
    HomeS: HomeScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const second = createStackNavigator(
  {
    NextS: NextScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const third = createStackNavigator(
  {
    NextS: NextScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const fourth = createStackNavigator(
  {
    NextS: NextScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const fifth = createStackNavigator(
  {
    NextS: NextScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const tabScreenConfig = {
  Home: {
    screen: first,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome name="circle" size={28} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "white",
    },
  },
  Next: {
    screen: second,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome name="circle" size={28} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "white",
    },
  },
  Third: {
    screen: third,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome name="circle" size={28} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "white",
    },
  },
  Fourth: {
    screen: fourth,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome name="circle" size={28} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "white",
    },
  },
  Fifth: {
    screen: fifth,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome name="circle" size={28} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "white",
      tabBarLabel: " ",
    },
  },
};

const AppNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: "#3CB371",
  inactiveColor: "#D3D3D3",
//   shifting: true,
  labeled: false,
});

export default createAppContainer(AppNavigator);
