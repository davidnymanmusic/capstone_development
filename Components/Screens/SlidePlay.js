import React, { Component } from 'react';
import { Text, View, StyleSheet, Slider } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Feather';

export default class SlidePlay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			r: 0,
			g: 0,
			b: 0,
			a: 1
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<Slider
					style={{ width: 250 }}
					minimumTrackTintColor={'red'}
					maximumTrackTintColor={'#fff'}
					step={1}
					minimumValue={0}
					maximumValue={255}
					value={this.state.r}
					onValueChange={val => this.setState({ r: val })}
				/>
				<Slider
					style={{ width: 250 }}
					minimumTrackTintColor={'blue'}
					maximumTrackTintColor={'#fff'}
					step={1}
					minimumValue={0}
					maximumValue={255}
					value={this.state.g}
					onValueChange={val => this.setState({ g: val })}
				/>
				<Slider
					style={{ width: 250 }}
					minimumTrackTintColor={'green'}
					maximumTrackTintColor={'#fff'}
					step={1}
					minimumValue={0}
					maximumValue={255}
					value={this.state.b}
					onValueChange={val => this.setState({ b: val })}
				/>
				<Slider
					style={{ width: 200 }}
					minimumTrackTintColor={'#444'}
					maximumTrackTintColor={'#444'}
					step={0.025}
					minimumValue={0}
					maximumValue={1}
					value={this.state.a}
					onValueChange={val => this.setState({ a: val })}
				/>

				<Ionicons
					name="target"
					size={200}
					color={`rgba(${this.state.r},${this.state.b},${this.state.g},${
						this.state.a
					})`}
				/>
				<Text>{`rgba(${this.state.r},${this.state.b},${this.state.g},${
					this.state.a
				})`}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
