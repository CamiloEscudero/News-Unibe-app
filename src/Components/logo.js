import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logo extends Component  {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:150, height: 150,resizeMode:'center'}}
          			source={{uri:'https://lh3.googleusercontent.com/rWHkuLW50GVORhd1jJWpewB8HXeG_ZbTc_8MqdCRNrt-rwZikxxo1lgAmkk2vGwVdnogCg=s85'}}/>	
  			</View>
			)
	}
}
const styles = StyleSheet.create({
  container : {
	flex: 1, 
	paddingBottom: 0,
	maxHeight: 200
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});