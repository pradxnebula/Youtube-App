import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
  Button,
  TextInput,
} from "react-native";
import Video from "react-native-video";

import homeStyle from "./styles/homeStyle.js";

function ShortsScreen({ navigation }) {
  return (
    <View style={shortsStyle.container}>
  
  
      <Video
        source={require("./assets/short.mp4")}
        style={shortsStyle.video}
        controls={true} // Show media controls
        resizeMode="cover" // Video resize mode
        repeat={false} // Set to true to loop the video
        paused={false} // Control playback state
        muted={false} // Mute the audio
      />


    </View>
  );
}

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const shortsStyle = StyleSheet.create({
  container: {
    width: screenWidth,
    flex: 1,
    height: 0,
    backgroundColor: "black",
  },
  video: {
    width: screenWidth,
    height: 800,
    position: "absolute",
    top: 0,
  },
});

export default ShortsScreen;
