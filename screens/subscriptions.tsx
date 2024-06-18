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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import homeStyle from "./styles/homeStyle.js";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function SubsScreen({ navigation }) {
  const [isPressed, setIsPressed] = useState(false);
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={homeStyle.containerBox}>
      <View
        style={{ backgroundColor: "#0f0f0f", width: screenWidth, height: 205 }}
      >
        <View style={{ marginLeft: 18, marginTop: 12, marginRight: 18 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={require("./assets/youtube-logo.png")}
              style={homeStyle.ytlogo}
            />
            <View style={homeStyle.iconCont}>
              <Image
                source={require("./assets/device-connected.png")}
                style={[homeStyle.icons, { width: 20, height: 20 }]}
              />
              <Image
                source={require("./assets/bell-school.png")}
                style={homeStyle.icons}
              />
              <TouchableOpacity onPress={() => navigation.navigate("Details")}>
                <Image
                  source={require("./assets/search-interface-symbol.png")}
                  style={[homeStyle.icons, { width: 19, height: 19 }]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <ScrollView
              horizontal={true}
              style={{ position: "absolute", top: 50 }}
            >
              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>

              <View style={subsStyle.chCont}>
                <Image
                  source={require("./assets/channels4_profile.jpg")}
                  style={subsStyle.chImage}
                ></Image>
                <View style={subsStyle.chMark}></View>
                <Text style={subsStyle.chTitle}>Laksha...</Text>
              </View>
            </ScrollView>
          </View>

          <View style={{ paddingTop: 103 }}>
            <ScrollView horizontal={true} style={{ marginTop: 35 }}>
              <View style={homeStyle.navigateCont}>
                <Image
                  source={require("./assets/compass.png")}
                  style={homeStyle.navigate}
                />
              </View>
              <Text style={homeStyle.tag}>All</Text>
              <Text style={homeStyle.tag}>Live</Text>
              <Text style={homeStyle.tag}>Mixes</Text>
              <Text style={homeStyle.tag}>News</Text>
              <Text style={homeStyle.tag}>Music</Text>
              <Text style={homeStyle.tag}>Sports</Text>
              <Text style={homeStyle.tag}>Trending</Text>
              <Text style={homeStyle.tag}>Standup</Text>
              <Text style={homeStyle.tag}>Posts</Text>
            </ScrollView>
          </View>
        </View>
      </View>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <Pressable style={homeStyle.overlay} onPress={handleCloseModal}>
          <Pressable style={homeStyle.popupBox}>
            <View
              style={{
                width: 35,
                height: 3,
                backgroundColor: "grey",
                borderRadius: 20,
                top: 9,
                position: "absolute",
              }}
            ></View>

            <View>
              <View style={homeStyle.optionBar}>
                <Image
                  source={require("./assets/bell-school.png")}
                  style={homeStyle.icons}
                />
                <Text style={homeStyle.optionText}>Play next in queue</Text>
              </View>
              <View style={homeStyle.optionBar}>
                <Image
                  source={require("./assets/bell-school.png")}
                  style={homeStyle.icons}
                />
                <Text style={homeStyle.optionText}>Play next in queue</Text>
              </View>
              <View style={homeStyle.optionBar}>
                <Image
                  source={require("./assets/bell-school.png")}
                  style={homeStyle.icons}
                />
                <Text style={homeStyle.optionText}>Play next in queue</Text>
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>

      <ScrollView horizontal={false} style={homeStyle.verticalScroll}>
        <View style={{ marginBottom: 25 }}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <Image
                source={require("./assets/hq720.webp")}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                source={require("./assets/channels4_profile.jpg")}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{" "}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require("./assets/download1.png")}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 25 }}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <Image
                source={require("./assets/hq720.webp")}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                source={require("./assets/channels4_profile.jpg")}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{" "}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require("./assets/download1.png")}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 25 }}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <Image
                source={require("./assets/hq720.webp")}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                source={require("./assets/channels4_profile.jpg")}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{" "}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require("./assets/download1.png")}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 25 }}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <Image
                source={require("./assets/hq720.webp")}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                source={require("./assets/channels4_profile.jpg")}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{" "}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require("./assets/download1.png")}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 25 }}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <Image
                source={require("./assets/hq720.webp")}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                source={require("./assets/channels4_profile.jpg")}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{" "}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require("./assets/download1.png")}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 25 }}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <Image
                source={require("./assets/hq720.webp")}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                source={require("./assets/channels4_profile.jpg")}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{" "}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require("./assets/download1.png")}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 25 }}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <Image
                source={require("./assets/hq720.webp")}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                source={require("./assets/channels4_profile.jpg")}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{" "}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require("./assets/download1.png")}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 25, paddingBottom: 80 }}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <Image
                source={require("./assets/hq720.webp")}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                source={require("./assets/channels4_profile.jpg")}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{" "}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require("./assets/download1.png")}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const subsStyle = StyleSheet.create({
  chCont: {
    alignItems: "center",
    marginRight: 18,
  },
  chMark: {
    width: 13.5,
    height: 13.5,
    backgroundColor: "#44a3f1",
    borderRadius: 100,
    position: "absolute",
    bottom: 28,
    right: 0,
    borderColor: "#0f0f0f",
    borderWidth: 1,
  },
  chTitle: {
    color: "#fff",
    fontSize: 12.5,
    marginTop: 9,
  },
  chImage: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
});

export default SubsScreen;
