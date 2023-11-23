import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../styles';

const Settings = ({ route, navigation }) => {
	const { itemId, otherParam } = route.params;
	return (
		<View style={styles.container}>
			<Text>Settings</Text>
			<Text>
				{itemId} : {otherParam}
			</Text>
			<Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
			<Button title='Go back' onPress={() => navigation.goBack()} />
			<Button
				title='Go back to first screen in stack'
				onPress={() => navigation.popToTop()}
			/>
			<Button
				title='Set Params'
				onPress={() =>
					navigation.setParams({
						itemId: 34,
						otherParam: 'Hello',
					})
				}
			/>
		</View>
	);
};

export default Settings;
