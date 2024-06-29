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

import searchStyle from "./styles/searchStyle.js";
import homeStyle from "./styles/homeStyle.js";
import Video from "react-native-video";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function VideoScreen({ navigation }) {
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
    <View style={videoStyles.container}>
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

      <View style={{ position: "absolute" }}>
        <Video
          source={require("./assets/videoplayback.mp4")}
          style={videoStyles.videoCont}
          controls={true}
        ></Video>
      </View>

      <ScrollView style={{ marginTop: 233.5 }}>
        <View style={videoStyles.videoContentShard1}>
          <Text style={videoStyles.videoTitle}>
            Bharg & @ChaarDiwaari - Roshni | Nikamma
          </Text>
          <Text style={videoStyles.videoDisc}>
            34,657 views 2hr ago #24 on Trending for music ...more
          </Text>
        </View>

        <View style={videoStyles.videoContentShard2}>
          <View style={videoStyles.channelInfoContLeft}>
            <Image
              source={require("./assets/channels4_profile.jpg")}
              style={videoStyles.channelImg}
            ></Image>
            <Text style={videoStyles.midText}>Seedhe Maut</Text>
            <Text style={videoStyles.smallText}>556K</Text>
          </View>
          <Text style={videoStyles.channelStatus}>Subscribe</Text>
        </View>

        <View style={videoStyles.videoContentShard3}>
          <View style={videoStyles.likePanel}>
            <Image
              source={require("./assets/like-icon.png")}
              style={videoStyles.Icon}
            ></Image>
            <Text style={videoStyles.likepanelText}>50K</Text>
            <Text style={{ color: "grey", fontSize: 25 }}>I</Text>
            <Image
              source={require("./assets/unlike-icon.png")}
              style={videoStyles.Icon}
            ></Image>
          </View>

          <View style={videoStyles.shareBtn}>
            <Image
              source={require("./assets/share-btn.png")}
              style={videoStyles.Icon}
            ></Image>
            <Text style={videoStyles.likepanelText}>Share</Text>
          </View>
        </View>

        <View style={videoStyles.videoContentShard4}>
          <View
            style={[
              videoStyles.channelInfoContLeft,
              { alignItems: "flex-start", marginTop: 10, marginLeft: 14 },
            ]}
          >
            <Text style={videoStyles.midText}>Comments</Text>
            <Text style={[videoStyles.smallText, { color: "grey" }]}>
              1K
            </Text>
          </View>

          <View
            style={[
              videoStyles.channelInfoContLeft,
              { marginTop: -50, marginLeft: 13 },
            ]}
          >
            <Image
              source={require("./assets/channels4_profile.jpg")}
              style={[videoStyles.channelImg, { width: 21, height: 21 }]}
            ></Image>
            <Text style={[videoStyles.midText, { fontSize: 12 }]}>
              So glad to be part of this!
            </Text>
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
      </ScrollView>
    </View>
  );
}

const videoStyles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#000",
  },
  videoCont: {
    width: screenWidth,
    aspectRatio: 28 / 16,
    top: 1,
    position: "absolute",
    top: 0,
  },
  videoContentShard1: {
    width: screenWidth,
  },
  videoTitle: {
    color: "#fff",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 17,
    marginRight: 17,
    marginBottom: 4,
    fontWeight: "bold",
  },
  videoDisc: {
    fontSize: 12,
    color: "grey",
    marginLeft: 17,
    marginRight: 17,
    marginBottom: 12,
  },
  videoContentShard2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 3,
  },
  channelImg: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
  midText: {
    color: "#fff",
    fontSize: 14,
  },

  smallText: {
    color: "#fff",
    fontSize: 12,
  },
  channelInfoContLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginLeft: 17,
  },
  channelStatus: {
    fontSize: 12,
    color: "#000",
    backgroundColor: "#fff",
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 20,
    marginRight: 16,
  },
  Icon: {
    width: 15,
    height: 15,
  },
  videoContentShard3: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
    gap: 10,
    marginLeft: 16,
    marginRight: 16,
  },
  likePanel: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#272727",
    borderRadius: 20,
    gap: 20,
    width: 40,
    justifyContent: "center",
  },
  likepanelText: {
    color: "#fff",
    fontSize: 12,
  },
  shareBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#272727",
    borderRadius: 20,
    gap: 20,
    width: 40,
    justifyContent: "center",
  },
  videoContentShard4: {
    height: 90,
    backgroundColor: "#272727",
    margin: 16,
    borderRadius: 15,
  },
});

export default VideoScreen;
