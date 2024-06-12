import {
  StyleSheet
} from 'react-native';

const  homeStyle = StyleSheet.create({
  containerBox: {
    flex: 1,
    alignItems: 'center',
    height: 0,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 30,
    color: 'green',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  popupBox: {
    width: 400,
    height: 390,
    marginBottom: 11,
    backgroundColor: '#272727',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  verticalScroll: {
    flexDirection: 'column',
    gap: 20,
    height: 10,
  },
  textCont: {
    paddingBottom: 100,
    paddingTop: 80,
  },
  ImgCont: {
    width: 413,
    height: 230,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  time: {
    height: 22,
    width: 45,
    position: 'absolute',
    zIndex: 999,
    paddingTop: 2,
    marginTop: -32,
    marginRight: 100,
    fontSize: 13,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignSelf: 'flex-end',
    textAlign: 'center',
    borderRadius: 5,
  },
  timeCont: {
    marginRight: 10,
  },
  titleCont: {
    paddingRight: 37,
    width: 305,
    // backgroundColor: 'pink'
  },
  vidTitle: {
    color: 'white',
    paddingTop: 12,
    paddingBottom: 1,
    fontSize: 14,
    lineHeight: 21,
    width: 308,
  },
  subTitle: {
    color: 'grey',
    fontSize: 13,
  },
  profileImg: {
    borderRadius: 100,
    width: 36,
    height: 36,
    margin: 10.5,
    marginTop: 15,
  },
  optionIcon: {
    width: 24,
    height: 24,
    padding: 10,
    margin: 12,
    marginLeft: 3,
    borderRadius: 100,
  },
  imagePressed: {
    opacity: 0.5, // Reduces the opacity of the image when pressed
  },
  iconCont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width: 10,
    justifyContent: 'flex-end',
    marginTop: 30,
    marginLeft: 245,
    gap: 24,
  },
  icons: {
    width: 24,
    height: 24,
  },
  ytlogo: {
    width: 110,
    height: 27,
  },
  tag: {
    color: '#fff',
    backgroundColor: '#272727',
    fontSize: 14.5,
    margin: 4.5,
    marginTop: 14,
    height: 31.5,
    borderRadius: 6,
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 5,
    paddingBottom: 4.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  navigateCont: {
    width: 45,
    backgroundColor: '#272727',
    margin: 4.5,
    marginTop: 14,
    height: 31.5,
    borderRadius: 6,
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  navigate: {
    width: 22,
    height: 22,
    paddingLeft: 11,
    paddingRight: 11,
  },
  navBarBottom: {
    height: 60,
    position: 'absolute',
    bottom: 0,
    zIndex: 999,
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  navBtnText: {
    color: '#fff',
    fontSize: 11,
    marginTop: 4,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navBtnWrap: {
    alignItems: 'center',
  },
  optionBar: {
flex: 1,
flexDirection: 'row',
// backgroundColor: 'pink',
height: 10,
justifyContent: 'space-between',
gap: 25,

alignItems: 'flex-start',
justifyContent: 'left'

  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  }

});

export default homeStyle;