import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './src/screens/map';
import ProfileScreen from './src/screens/profile';
import bridge from '@vkontakte/vk-bridge';

import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/500.css';

const Tab = createBottomTabNavigator();
bridge.send('VKWebAppInit', {});

function App() {
  return (
    <React.StrictMode>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Карта">
          { /* <Tab.Screen name="Карта" component={MapScreen} options={{ title: 'Карта' }} /> */ }
          <Tab.Screen name="Настройки" component={ProfileScreen} options={{ title: 'Настройки' }} />
          <Tab.Screen name="События" component={ProfileScreen} options={{ title: 'События' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </React.StrictMode>
  );
}

export default App;
