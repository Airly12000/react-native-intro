import { StyleSheet, View, Text, Button } from 'react-native';
import styles from '../styles';

const Home = ({ route, navigation }) => {
	const { itemId } = route.params;
	return (
		<View className='flex-1 items-center justify-center'>
			<Text>Home</Text>
			<Text>{itemId}</Text>
			<Button
				title='Go to Settings'
				onPress={() =>
					navigation.navigate('Settings', {
						itemId: 86,
						otherParam: 'anything you want here',
					})
				}
			/>
			<Button
				title='Go to Orders'
				onPress={() => navigation.navigate('Orders')}
			/>
		</View>
	);
};

export default Home;
