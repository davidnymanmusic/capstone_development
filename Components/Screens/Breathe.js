import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Button,
	Image,
	Dimensions,
	Slider,
	TouchableOpacity,
	TouchableHighlight,
	Modal,
	Picker,
	Item
} from 'react-native';

import { TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Ripple from 'react-native-material-ripple';

import SimplePicker from 'react-native-simple-picker';

import Analytics from 'analytics-react-native';

const analytics = new Analytics('htp3s4XWqjixWtI2NwIZSTEURfoLMeGu');

// var Analytics = require('analytics-node');
// var analytics = new Analytics('htp3s4XWqjixWtI2NwIZSTEURfoLMeGu');


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const options = ['😀','😊', '🙂','😕', '😔', '😩', '😢', '🙃' ];

export default class Breathe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rate: 0,
			render: false,
			modalVisible: false,
			selectedOption: ''
		};
	}
	setModalVisible(visible) {
		this.setState({
			modalVisible: visible
		});
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ rate: 3300 });
		}, 0);
	}
	render() {
		return (
			<View style={styles.container}>
				<Animatable.Text
					style={styles.textBreathe}
					animation="breatheText"
					iterationCount={'infinite'}
					direction="alternate"
					duration={parseInt(this.state.rate)}>
					Breathe Deeply
				</Animatable.Text>

				<Animatable.Text
					animation="breathe"
					iterationCount={'infinite'}
					direction="alternate"
					duration={parseInt(this.state.rate)}>
					<Ionicons
						name="circle"
						size={250}
						color="rgba(255, 255, 255, 0.63)"
					/>
				</Animatable.Text>

				<Slider
					style={{ width: 250, bottom: 0, marginTop: 20 }}
					maximumTrackTintColor={'rgba(255, 255, 255, 0.5)'}
					minimumTrackTintColor={'#fff'}
					step={100}
					minimumValue={3300}
					maximumValue={3800}
					value={this.state.rate}
					onValueChange={val => this.setState({ rate: val })}
				/>
				<Text style={styles.text}>Adjust Rate</Text>


				<TouchableHighlight
					underlayColor="rgba(0,0,0, 0)"
					onPress={() => {
						this.refs.picker.show();
					}}>
					<Text style={styles.you}>How are you feeling? {this.state.selectedOption}</Text>
				</TouchableHighlight>
				<SimplePicker
					ref={'picker'}
					options={options}
					itemStyle={{
						fontSize: 55,
						backgroundColor: '#9dc6d1'
					}}
					onSubmit={option => {
						this.setState({
							selectedOption: option
						});
					}}
				/>
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

	buttons: {
		flex: 1,
		flexDirection: 'row'
	},
	text: {
		color: 'rgba(255, 255, 255, 0.8)',
		fontSize: 20,
		fontFamily: 'Avenir-Book',
		paddingTop: 10
	},
	you: {
		color: 'rgba(255, 255, 255, 0.8)',
		fontSize: 20,
		padding: 10,
		fontFamily: 'Avenir-Book',
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderWidth: 1,
		borderRadius: 25,
		borderColor: 'rgba(255, 255, 255, 0.8)',
		overflow: 'hidden',
		marginTop: 20
	},
	textBreathe: {
		color: 'rgba(255, 255, 255, 0.8)',
		fontSize: 40,
		fontFamily: 'Avenir-Book',
		paddingBottom: 40
	}
});
