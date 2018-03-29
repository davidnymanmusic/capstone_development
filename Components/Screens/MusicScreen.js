import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Button, Image, Dimensions, Slider } from 'react-native';

import { TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import Ripple from 'react-native-material-ripple';

import AudioPlayer from './../AudioPlayer'
import TimerCountdown from 'react-native-timer-countdown'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default class MusicScreen extends React.Component {
	static navigationOptions = {
		// drawerLabel: 'Activities',
		// drawerIcon: ({ tintColor }) => (
		// 	<Ionicons name="circle" size={20} color="#9dc6d1"/>
		// ),
	};
	constructor(props) {
    super(props);
    this.state = {
			count: 0,
			pressed: false,
			test: 'Hello',
			timer: '0:00'
    }
		this.buttonPress = this.buttonPress.bind(this)
		this.timePicker = this.timePicker.bind(this)
		this.msToTime = this.msToTime.bind(this)
		this.startTimer = this.startTimer.bind(this)
}
		buttonPress() {
		    this.setState({
					pressed: false,
					test: 'hey'
				})
		}
		startTimer() {
		    this.setState({
					pressed: true,
					test: 'hey'
				})
		}
		msToTime(s) {
		  var ms = s % 1000;
		  s = (s - ms) / 1000;
		  var secs = s % 60;
		  s = (s - secs) / 60;
		  var mins = s % 60;
		  var hrs = (s - mins) / 60;
		  return `${hrs}:${('0'+mins).slice(-2)}:00`;
		}
		timePicker(){
			this.setState({
				count: this.state.count + 60000 * 5,
				timer: this.msToTime(this.state.count + 60000 *5),
				test: 'hey'
			})
		}


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<AudioPlayer />

				<View  style={styles.timer}>
				<TouchableOpacity onPress={this.timePicker}><Text style={{fontSize: 20, marginBottom: 20}}>Add Time {this.state.timer}</Text></TouchableOpacity>

				<TouchableHighlight underlayColor="rgba(255, 255, 255, 0)" onPress={this.startTimer}><Text style={styles.start}>Start</Text></TouchableHighlight>

				{this.state.pressed && this.state.timer !== 0 ? <TimerCountdown initialSecondsRemaining={this.state.count} allowFontScaling={true} style={{ fontSize: 20 }}></TimerCountdown> : <Text style={{fontSize: 14, marginTop: 20}}>{this.state.timer}</Text>}
				</View>



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
width: width,
paddingTop: 30
},
start: {
alignItems: 'center',
padding: 10,
paddingLeft: 60,
paddingRight: 60,
color: 'rgba(255, 255, 255, 0.8)',
backgroundColor: 'rgba(255, 255, 255, 0.1)',
fontFamily: 'Avenir-Book',
fontSize: 20,
borderWidth: 1,
borderRadius: 25,
borderColor: 'rgba(255, 255, 255, 0.8)',
overflow: 'hidden'
},
text: {
color: 'rgba(255, 255, 255, 0.8)',
fontSize: 50,
fontFamily: 'Avenir-Book'
},

});
