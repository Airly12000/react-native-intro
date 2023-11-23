import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Orders from './screens/Orders';
import icon from './assets/icon.png';

const Stack = createNativeStackNavigator();

function LogoTitle() {
	return <Image style={{ width: 30, height: 30 }} source={icon} />;
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerStyle: {
						backgroundColor: '#f60',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}>
				<Stack.Screen
					name='Home'
					component={Home}
					initialParams={{ itemId: 42 }}
					options={{}}
				/>
				<Stack.Screen
					name='Orders'
					component={Orders}
					options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
				/>
				<Stack.Screen
					name='Settings'
					component={Settings}
					options={{ title: 'Configuration', headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
