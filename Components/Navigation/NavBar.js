import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Button, Image, Dimensions } from 'react-native';

import { TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import Ripple from 'react-native-material-ripple';

import TimerCountdown from 'react-native-timer-countdown'

import AudioPlayer from '../AudioPlayer'
import HomeScreen from '/Users/davidnyman/capstone/development/coming_together/Components/Screens/HomeScreen'
import MusicScreen from '/Users/davidnyman/capstone/development/coming_together/Components/Screens/MusicScreen'
import SettingsScreen from '/Users/davidnyman/capstone/development/coming_together/Components/Screens/SettingsScreen'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



Animatable.initializeRegistryWithDefinitions({
  breathe: {
		from: {
		    opacity: 0.45,
				scale: 1
		  },
		  to: {
		    opacity: 1,
				scale: 1.25
		  },
  }
});
Animatable.initializeRegistryWithDefinitions({
  breatheText: {
		from: {
		    opacity: 0.75,
		  },
		  to: {
		    opacity: 1,
		  },
  }
});





class MyNotificationsScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Activities',
		drawerIcon: ({ tintColor }) => (
			<Ionicons name="circle" size={20} color="#9dc6d1"/>
		),
	};

	render() {
		return (
			<View style={styles.container}>
			<Button
				onPress={() => this.props.navigation.goBack()}
				title="Go back home"
			/>
		</View>
		);
	}
}



// const MyApp = DrawerNavigator({
// 	Home: {
// 		screen: HomeScreen,
// 	},
// 	Audio: {
// 		screen: MusicScreen,
// 	},
// 	Test: {
// 		screen: MyNotificationsScreen
// 	},
// });

export default TabNavigator (
{
Home: { screen: HomeScreen },
Music: {screen: MusicScreen},
Settings: { screen: SettingsScreen },
},
{
navigationOptions: ({ navigation }) => ({
	tabBarIcon: ({ focused, tintColor }) => {
		const { routeName } = navigation.state;
		let iconName;
		if (routeName === 'Home') {
			iconName = 'anchor';
		} else if (routeName === 'Music') {
			iconName = 'headphones';
		} else if (routeName === 'Settings') {
			iconName = 'sliders';
		} else if (routeName === 'Space') {
			iconName = 'target';
		}

		// You can return any component that you like here! We usually use an
		// icon component from react-native-vector-icons
		return <Ionicons name={iconName} size={25} color={tintColor} />;
	},
	swipeEnabled: true,
}),

style: {
	backgroundColor: '#9dc6d1',
	shadowColor: 'transparent',
	borderTopColor: 'rgba(0, 0, 0, 0)',
	 borderTopWidth: 0
},
tabStyle:{
	backgroundColor: '#9dc6d1',
	shadowColor: 'transparent',
	borColor: 'transparent',
	 borderTopColor: 'rgba(0, 0, 0, 0)',
	 borderTopWidth: 0
},
tabBarOptions: {
	activeTintColor: '#9dc6d1',
	inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
	fontFamily: 'Avenir-Book',
	shadowColor: 'transparent',
	inactiveBackgroundColor:'#9dc6d1',
	activeBackgroundColor:'#fff',
},
tabBarComponent: TabBarBottom,
tabBarPosition: 'bottom',
animationEnabled: true,
swipeEnabled: false,
fontFamily: 'Avenir-Book',
}
);

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
