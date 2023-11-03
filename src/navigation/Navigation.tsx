import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './NavigationTypes';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import HomeScreen from '../screens/HomeScreen';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import DetailsScreen from '../screens/DetailsScreen';

const Navigation: React.FC = (): JSX.Element => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <AlertNotificationRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AlertNotificationRoot>
  );
};

export default Navigation;
