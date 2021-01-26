import React from 'react';
import {
	StyleSheet,
	View,
	Image
} from 'react-native';

import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

export default function Logo() {
	const form = useMediaQuery({
		query: "(max-device-heigth: 200px)",
	})
	if (form) {
		return (
			<View style={styles.containerForm}>
				<Image style={{ width: 150, height: 150, resizeMode: 'center' }}
					source={{ uri: 'https://i.ibb.co/HTgb4WX/logo-unibe-color.png' }} />
			</View>
		);

	} else {
		return (
			<View style={styles.container}>
				<Image style={{ width: 150, height: 150, resizeMode: 'center' }}
					source={{ uri: 'https://i.ibb.co/HTgb4WX/logo-unibe-color.png' }} />
			</View>
		);
	}

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 0,
		maxHeight: 200
	},
	logoText: {
		marginVertical: 15,
		fontSize: 18,
		color: 'rgba(255, 255, 255, 0.7)'
	},
	containerForm: {
		flex: 1,
		paddingBottom: 0,
		maxHeight: 0
	}
});