import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/navigationTypes';
import DetailScreen from '../screens/detailScreen';
import HomeScreen from '../screens/homeScreen';

// Create a type-safe stack navigator for screen transitions
export const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * NavigationProvider sets up the navigation stack for the app.
 *
 * It wraps the application in a `NavigationContainer` and defines
 * the available screens and their stack order.
 * The screens can be navigated between based on the defined routes.
 *
 * @returns {React.ReactNode} A React component that handles all navigation logic.
 */
const NavigationProvider = (): React.ReactNode => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#222', // Color of the header text
          headerStyle: {
            backgroundColor: '#fff', // Background color of the header
          },
        }}>
        {/* Home Screen */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Cryptos'}} // Title shown in the header for this screen
        />
        {/* Detail Screen */}
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{title: 'Details'}} // Title shown in the header for this screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationProvider;
