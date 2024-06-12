import {
    StyleSheet
} from 'react-native';



const searchStyle = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: 3
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 20,
    },
    boxContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 30,
    },
    textBox: {
        backgroundColor: '#272727',
        width: 300,
        height: 33,
        paddingTop: 0,
        paddingBottom: 2,
        paddingLeft: 15,
        borderRadius: 100,
        marginTop: 8.5,
        marginLeft: 0,
        color: 'white',
        fontSize: 17,
    },
    backArrow: {
        width: 19,
        height: 17,
        marginTop: 15,
    },
    microPhone: {
        width: 13.5,
        height: 19.5,
    },
    microPhoneBackground: {
        width: 33,
        height: 33,
        backgroundColor: '#272727',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginTop: 8.8,
    },
    recIcon: {
        width: 25,
        height: 25,
    },
    recTitle: {
        color: '#fff',
        fontSize: 16,
    },
    historyThumbnail: {
        width: 60,
        height: 35,
        marginTop: -5,
    },
});

export default searchStyle;