import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	)
}

const styles = {
	viewStyle: {
		backgroundColor: 'teal',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
	},
  textStyle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Roboto'
  }
}

export default Header;