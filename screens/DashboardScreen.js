import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class DashboardScreen extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>DashboardScreen</Text>
			</View>
		);
	}
}

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}