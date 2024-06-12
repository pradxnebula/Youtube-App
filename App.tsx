import React, {useState} from 'react';

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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import homeStyle from './homeStyle.js';
import searchStyle from './searchStyle.js';
import Search from './search';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function HomeScreen({navigation}) {
  const [isPressed, setIsPressed] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={homeStyle.containerBox}>
      <View style={{backgroundColor: 'black', width: screenWidth, height: 100}}>
        <View style={{marginLeft: 18, marginTop: 12, marginRight: 18}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
              source={require('./assets/youtube-logo.png')}
              style={homeStyle.ytlogo}
            />
            <View style={homeStyle.iconCont}>
              <Image
                source={require('./assets/device-connected.png')}
                style={[homeStyle.icons, {width: 20, height: 20}]}
              />
              <Image
                source={require('./assets/bell-school.png')}
                style={homeStyle.icons}
              />
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Image
                  source={require('./assets/search-interface-symbol.png')}
                  style={[homeStyle.icons, {width: 19, height: 19}]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <ScrollView horizontal={true} style={{marginTop: 35}}>
              <View style={homeStyle.navigateCont}>
                <Image
                  source={require('./assets/compass.png')}
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

      <View style={[homeStyle.navBarBottom, {width: screenWidth}]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={homeStyle.navBtnWrap}>
            <Image
              source={require('./assets/home-icon.png')}
              style={homeStyle.navIcon}
            />
            <Text style={homeStyle.navBtnText}>Home</Text>
          </View>

          <View style={homeStyle.navBtnWrap}>
            <Image
              source={require('./assets/shorts.png')}
              style={homeStyle.navIcon}
            />
            <Text style={homeStyle.navBtnText}>Shorts</Text>
          </View>
        </View>

        <Image
          source={require('./assets/add_icon.png')}
          style={{width: 35, height: 35, marginLeft: 20, marginRight: 20}}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={homeStyle.navBtnWrap}>
            <Image
              source={require('./assets/subscriptions.png')}
              style={homeStyle.navIcon}
            />
            <Text style={homeStyle.navBtnText}>Subscriptions</Text>
          </View>

          <View style={homeStyle.navBtnWrap}>
            <Image
              source={require('./assets/channels4_profile.jpg')}
              style={[homeStyle.navIcon, {borderRadius: 100}]}
            />
            <Text style={homeStyle.navBtnText}>You</Text>
          </View>
        </View>
      </View>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <Pressable style={homeStyle.overlay} onPress={handleCloseModal}>
          <Pressable style={homeStyle.popupBox}>
            <View
              style={{
                width: 35,
                height: 3,
                backgroundColor: 'grey',
                borderRadius: 20,
                top: 9,
                position: 'absolute',
              }}></View>

            <View>
              <View style={homeStyle.optionBar}>
                <Image
                  source={require('./assets/bell-school.png')}
                  style={homeStyle.icons}
                />
                <Text style={homeStyle.optionText}>Play next in queue</Text>
              </View>
              <View style={homeStyle.optionBar}>
                <Image
                  source={require('./assets/bell-school.png')}
                  style={homeStyle.icons}
                />
                <Text style={homeStyle.optionText}>Play next in queue</Text>
              </View>
              <View style={homeStyle.optionBar}>
                <Image
                  source={require('./assets/bell-school.png')}
                  style={homeStyle.icons}
                />
                <Text style={homeStyle.optionText}>Play next in queue</Text>
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>

      <ScrollView horizontal={false} style={homeStyle.verticalScroll}>
        <View style={{marginBottom: 25}}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}>
              <Image
                source={require('./assets/hq720.webp')}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                source={require('./assets/channels4_profile.jpg')}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{' '}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require('./assets/download1.png')}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginBottom: 25}}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}>
              <Image
                source={require('./assets/hq720.webp')}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                source={require('./assets/channels4_profile.jpg')}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{' '}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require('./assets/download1.png')}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginBottom: 25}}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}>
              <Image
                source={require('./assets/hq720.webp')}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                source={require('./assets/channels4_profile.jpg')}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{' '}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require('./assets/download1.png')}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginBottom: 25}}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}>
              <Image
                source={require('./assets/hq720.webp')}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                source={require('./assets/channels4_profile.jpg')}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{' '}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require('./assets/download1.png')}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginBottom: 25}}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}>
              <Image
                source={require('./assets/hq720.webp')}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                source={require('./assets/channels4_profile.jpg')}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{' '}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require('./assets/download1.png')}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginBottom: 25}}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}>
              <Image
                source={require('./assets/hq720.webp')}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                source={require('./assets/channels4_profile.jpg')}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{' '}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require('./assets/download1.png')}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginBottom: 25}}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}>
              <Image
                source={require('./assets/hq720.webp')}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                source={require('./assets/channels4_profile.jpg')}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{' '}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require('./assets/download1.png')}
                  style={homeStyle.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginBottom: 25, paddingBottom: 80}}>
          <View style={homeStyle.ImgCont}>
            <TouchableWithoutFeedback
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}>
              <Image
                source={require('./assets/hq720.webp')}
                style={[homeStyle.Image, isPressed && homeStyle.imagePressed]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={homeStyle.timeCont}>
            <Text style={homeStyle.time}>12:30</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                source={require('./assets/channels4_profile.jpg')}
                style={homeStyle.profileImg}
              />
            </View>
            <View style={homeStyle.titleCont}>
              <Text style={homeStyle.vidTitle}>
                How she cracked Google Summer of Code in First year in 1
                month🚀|GSoC Guide
              </Text>
              <Text style={homeStyle.subTitle}>
                Nishant Chahar · 51K views · 2 weeks ago{' '}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={require('./assets/download1.png')}
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

function SearchScreen({navigation}) {
  return (
    <View
      style={[
        searchStyle.container,
        {height: screenHeight, width: screenWidth},
      ]}>
      <View style={searchStyle.box}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('./assets/back-arrow.png')}
            style={searchStyle.backArrow}
          />
        </TouchableOpacity>
        <TextInput
          style={searchStyle.textBox}
          placeholder="Search YouTube"
          placeholderTextColor="#888888"
        />
        <View style={searchStyle.microPhoneBackground}>
          <Image
            source={require('./assets/microphone.png')}
            style={searchStyle.microPhone}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/backtrack.png')}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require('./assets/hq720.webp')}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require('./assets/select-arrow.png')}
            style={searchStyle.recIcon}
          />
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
