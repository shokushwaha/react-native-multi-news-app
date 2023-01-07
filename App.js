import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Headlines from './src/screens/Headlines';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import Sports from './src/screens/Sports';
import Science from './src/screens/Science';
import Health from './src/screens/Health';
import Technology from './src/screens/Technology';
import General from './src/screens/General';
import Business from './src/screens/Business';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider >

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'azure',
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} />
          <Stack.Screen name="Sports" component={Sports} options={{
            title: 'Sports',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'azure',
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} />
          <Stack.Screen name="Headlines" component={Headlines} options={{
            title: 'Headlines',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'azure',
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} />
          <Stack.Screen name="Science" component={Science} options={{
            title: 'Science',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'azure',
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} />
          <Stack.Screen name="Health" component={Health} options={{
            title: 'Health',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'azure',
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} />
          <Stack.Screen name="Technology" component={Technology} options={{
            title: 'Technology',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'azure',
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} />
          <Stack.Screen name="General" component={General} options={{
            title: 'General',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'azure',
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} />
          <Stack.Screen name="Business" component={Business} options={{
            title: 'Business',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'azure',
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );
}
