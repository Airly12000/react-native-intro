import React from 'react';
import { View, Text, Button } from 'react-native';

const Orders = ({ navigation }) => {
	return (
		<View className='flex-1 items-center justify-center'>
			<Text>Orders</Text>
			<Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default Orders;
