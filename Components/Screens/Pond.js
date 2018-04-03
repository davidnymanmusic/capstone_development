import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity,
	Button,
	Image,
	Dimensions
} from 'react-native';

import { TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Ripple from 'react-native-material-ripple';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Pond extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Ripple
					rippleColor={'#fff'}
					rippleOpacity={0.8}
					rippleSize={479}
					rippleDuration={3000}>
					<TouchableHighlight style={styles.button}>
						<Animatable.Text
							// animation='fadeOut'
							// duration={10000}
							style={styles.text}>
							Touch
						</Animatable.Text>
					</TouchableHighlight>
				</Ripple>
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
	text: {
		color: 'rgba(255, 255, 255, 0.8)',
		fontSize: 40,
		fontFamily: 'Avenir-Book'
	},
	button: {
		alignItems: 'center',
		backgroundColor: 'rgba(221, 221, 221, 0)',
		height: height - 40,
		width: width,
		paddingTop: 40
	}
});
