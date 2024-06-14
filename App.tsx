import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";

import SearchScreen from "./screens/search.tsx";
import HomeScreen from "./screens/home.tsx";
import ShortsScreen from "./screens/shorts.tsx";
import homeStyle from "./screens/styles/homeStyle.js";
const Stack = createNativeStackNavigator();

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function FixedNavBar() {
  const navigation = useNavigation();

  return (
    <View style={[homeStyle.navBarBottom, { width: screenWidth, position: 'absolute', bottom: 0 }]}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={homeStyle.navBtnWrap}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{ alignItems: "center" }}
          >
            <Image
              source={require("./assets/home-icon.png")}
              style={homeStyle.navIcon}
            />
            <Text style={homeStyle.navBtnText}>Home</Text>
          </TouchableOpacity>
        </View>

        <View style={homeStyle.navBtnWrap}>
        <TouchableOpacity
            onPress={() => navigation.navigate("Shorts")}
            style={{ alignItems: "center" }}
          >
          <Image
            source={require("./assets/shorts.png")}
            style={homeStyle.navIcon}
          />
          <Text style={homeStyle.navBtnText}>Shorts</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={require("./assets/add_icon.png")}
        style={{ width: 35, height: 35, marginLeft: 20, marginRight: 20 }}
      />

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={homeStyle.navBtnWrap}>
          <Image
            source={require("./assets/subscriptions.png")}
            style={homeStyle.navIcon}
          />
          <Text style={homeStyle.navBtnText}>Subscriptions</Text>
        </View>

        <View style={homeStyle.navBtnWrap}>
          <Image
            source={require("./assets/channels4_profile.jpg")}
            style={[homeStyle.navIcon, { borderRadius: 100 }]}
          />
          <Text style={homeStyle.navBtnText}>You</Text>
        </View>
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={SearchScreen} />
          <Stack.Screen name="Shorts" component={ShortsScreen} />
        </Stack.Navigator>

        <FixedNavBar />
      </View>
    </NavigationContainer>
  );
}

export default App;