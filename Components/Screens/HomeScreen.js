import React from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions, Slider } from 'react-native';

import { TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Ripple from 'react-native-material-ripple';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Activities',
		drawerIcon: ({ tintColor }) => (
			<Ionicons name='circle' size={20} color='#9dc6d1'/>
		),
	};
	constructor(props) {
    super(props);
    this.state = {
			rate: 0,
			render: false
    }

}
  render() {
    return (
			<View style={styles.container} >
				<Animatable.Text style={styles.textBreathe} animation='breatheText' iterationCount={'infinite'} direction='alternate' duration={parseInt(this.state.rate)}>
					Breathe Deeply
				</Animatable.Text>

				<Animatable.Text animation='breathe' iterationCount={'infinite'} direction='alternate' duration={parseInt(this.state.rate)}>
			    <Ionicons name='circle' size={250} color='rgba(255, 255, 255, 0.63)'/>
				</Animatable.Text>

				<Slider style={{ width: 250, bottom: 0, position: 'absolute', bottom: 40 }} maximumTrackTintColor={'rgba(255, 255, 255, 0.5)'} minimumTrackTintColor={'#fff'}
				step={100} minimumValue={3300} maximumValue={3800} value={this.state.rate}
				onValueChange={val => this.setState({ rate: val})} />
								<Text style={styles.text}>Adjust Rate</Text>
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


containerWelcome: {
flex: 1,
backgroundColor: '#9dc6d1',
alignItems: 'center',
justifyContent: 'center',

},
text: {
color: 'rgba(255, 255, 255, 0.8)',
fontSize: 20,
fontFamily: 'Avenir-Book',
paddingTop: 40
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
