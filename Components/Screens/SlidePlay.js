import React from 'react';
import { Text, View, StyleSheet, Slider } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class SlidePlay extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			r: 0,
			g: 0,
			b: 0,
		}
	}
render(){
	return(
<View>
<Slider style={{ width: 250 }} minimumTrackTintColor={"#fff"} maximumTrackTintColor={'#fff'}
step={1} minimumValue={1} maximumValue={255} value={this.state.r}
onValueChange={val => this.setState({ r: val })}
				/>
<Slider style={{ width: 250 }} minimumTrackTintColor={"#fff"} maximumTrackTintColor={'#fff'}
step={1} minimumValue={1} maximumValue={255} value={this.state.g}
onValueChange={val => this.setState({ g: val })}
				/>
<Slider style={{ width: 250 }} minimumTrackTintColor={"#fff"} maximumTrackTintColor={'#fff'}
step={1} minimumValue={1} maximumValue={255} value={this.state.b}
onValueChange={val => this.setState({ b: val })}
				/>

				<Animatable.Text style={{fontSize: 100, color: `rgb(${this.state.r},${this.state.b},${this.state.g})`}}>
					HELLO WORLD
				</Animatable.Text>
</View>
)
}
}
