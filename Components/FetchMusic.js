import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Button,
	Image,
	Dimensions
} from 'react-native';

export default class FetchMusic extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			fetched: false
		};
		this.getData = this.getData.bind(this);
	}
	async getData() {
		const response = await fetch(
			'https://ring-signal-server.herokuapp.com/alarms/'
		);
		const json = await response.json();
		setTimeout(() => {
			this.setState({
				data: json,
				fetched: true
			});
		}, 900);
		console.log(this.state.fetched);
	}
	componentDidMount() {
		this.getData();
	}
}
