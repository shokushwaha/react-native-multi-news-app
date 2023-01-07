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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Sports" component={Sports} />
          <Stack.Screen name="Headlines" component={Headlines} />
          <Stack.Screen name="Science" component={Science} />
          <Stack.Screen name="Health" component={Health} />
          <Stack.Screen name="Technology" component={Technology} />
          <Stack.Screen name="General" component={General} />
          <Stack.Screen name="Business" component={Business} />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );
}
