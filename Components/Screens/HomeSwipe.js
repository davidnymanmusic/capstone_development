import React, { Component } from 'react';
import { Slider, StyleSheet, Text, View } from 'react-native';

import Swiper from 'react-native-swiper';

const styles = {
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9dc6d1'
	}
};

const HomeSwipe = ({ element1, element2, element3 }) => (
	<Swiper>
		<View style={styles.slide}>{element1}</View>
		<View style={styles.slide}>{element2}</View>
		<View style={styles.slide}>{element3}</View>
	</Swiper>
);

export default HomeSwipe;
