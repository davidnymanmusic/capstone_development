import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Button, Image } from 'react-native';
import { TabNavigator, TabBarBottom, DrawerNavigator  } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import Ripple from 'react-native-material-ripple';

import TimerCountdown from 'react-native-timer-countdown'

import AudioPlayer from '../AudioPlayer'



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


class HomeScreen extends React.Component {
  render() {
    return (
			<Animatable.View style={styles.container} >
				<Animatable.Text style={styles.textBreathe} animation='breatheText' iterationCount={'infinite'} direction="alternate" duration={3000}>Breathe Deeply</Animatable.Text>
				<Animatable.Text animation="breathe" iterationCount={'infinite'} direction="alternate" duration={3000}>
			    <Ionicons name="circle" size={250} color="rgba(255, 255, 255, 0.63)"/></Animatable.Text>
			</Animatable.View>
    );
  }
}
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
				<Ripple rippleColor={'rgb(255, 255, 255)'} rippleOpacity={.8} rippleSize={479} rippleDuration={3000}>
<TouchableHighlight style={styles.button}><Text style={styles.text}>Touch</Text></TouchableHighlight>
				</Ripple>
      </View>
    );
  }
}

class MusicScreen extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			count: 0,
			pressed: false,
			test: 'Hello'
    }
		this.buttonPress = this.buttonPress.bind(this)
}
		buttonPress() {
		    this.setState({
					count: this.state.count + 60000,
					pressed: true,
					test: 'hey'
				})
		}


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{/* <TouchableOpacity onPress={this.buttonPress}><Text>Press</Text></TouchableOpacity>

				{this.state.pressed ? <TimerCountdown initialSecondsRemaining={this.state.count} allowFontScaling={true} style={{ fontSize: 20 }}></TimerCountdown> : <Text>{this.state.test}</Text>} */}

				<AudioPlayer />

      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Activties',
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



const MyApp = DrawerNavigator({
	Home: {
		screen: HomeScreen,
	},
	Notifications: {
		screen: MyNotificationsScreen,
	}
});

export default TabNavigator (
{
Home: { screen: MyApp },
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
containerWelcome: {
flex: 1,
backgroundColor: '#9dc6d1',
alignItems: 'center',
justifyContent: 'center'
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
