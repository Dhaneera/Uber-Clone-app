import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeWindStyleSheet } from "nativewind";
import * as React from 'react';
import MapScreen from './MapScreen';

export type RootStackParamList = {
  Home: undefined;
  MapScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = () => {

  NativeWindStyleSheet.setOutput({
    default: "native",
  });


  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (

    <Provider store={store}>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='MapScreen' component={MapScreen} options={{
              headerShown: false,
            }} />
          </Stack.Navigator>
          </SafeAreaProvider>
    </Provider>

  );
}
export default RootLayout
