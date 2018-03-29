import React from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions } from 'react-native';

import { TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import Ripple from 'react-native-material-ripple';

import HomeSwipe from './HomeSwipe'
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import SlidePlay from './SlidePlay'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Main extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Main',
		drawerIcon: ({ tintColor }) => (
			<Ionicons name="circle" size={20} color="#9dc6d1"/>
		),
	};
	constructor(props) {
    super(props);
    this.state = {
    }

}
  render() {
    return (
			<View style={styles.container} >
				{/* <HomeSwipe
					element1={<SlidePlay/>}
					element2={<SettingsScreen/>}
					element3={<HomeScreen/>}
				 /> */}
				 <HomeScreen/>
			</View>

    );
  }
}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#9dc6d1',
alignItems: 'center',
justifyContent: 'center'
},
timer: {
backgroundColor: '#9dc6d1',
alignItems: 'center',
justifyContent: 'center',
width: width
},
start: {
	alignItems: 'center',
padding: 10,
paddingLeft: 10,
paddingRight: 10,
color: 'rgba(255, 255, 255, 0.8)',
backgroundColor: 'rgba(255, 255, 255, 0.1)',
fontFamily: 'Avenir-Book',
fontSize: 20,
borderWidth: 2,
borderColor: 'rgba(255, 255, 255, 0.8)',
},
containerWelcome: {
flex: 1,
backgroundColor: '#9dc6d1',
alignItems: 'center',
justifyContent: 'center',

},
slide1: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
color: '#9dc6d1',
paddingTop: 18,
paddingBottom: 40
},
text: {
color: 'rgba(255, 255, 255, 0.8)',
fontSize: 50,
fontFamily: 'Avenir-Book'
},
textBreathe: {
color: 'rgba(255, 255, 255, 0.8)',
fontSize: 50,
fontFamily: 'Avenir-Book',
paddingBottom: 40
},
button: {
alignItems: 'center',
backgroundColor: 'rgba(221, 221, 221, 0)',
padding: 1000
}, giphy: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center'
},
});
