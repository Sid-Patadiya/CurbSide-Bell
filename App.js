import Toast, { BaseToast } from 'react-native-toast-message';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Index from './src';
import { useFonts } from 'expo-font';
import AppProvider from './src/context/AppProvider';
import appStyles from './src/assets/styles';
import { CommonIcons } from './src/theme/images';
import { NavigationContainer, } from '@react-navigation/native';
import { UserContext } from './src/context/UserContext';

export default function App({ }) {


  const [isLoaded] = useFonts({
    "ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Light": require("./assets/fonts/Poppins-Light.ttf"),
  });

  const toastConfigs = {
    completed: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: appColors.success }}
      />
    ),
    cancelled: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: appColors.danger }}
      />
    ),

    error: (props) => (
      <View
        style={appStyles.toastContainer}>
        <Image source={CommonIcons.warning}
          style={appStyles.toastIcon}
          resizeMode={'contain'}
        />
        <Text style={appStyles.toastMessage(true)}>{props.text1}</Text>
      </View>
    ),
  }



  return (
    <NavigationContainer>
      <AppProvider>
        <SafeAreaProvider>

          {isLoaded && <Index />}
        </SafeAreaProvider>
        <Toast config={toastConfigs} />
      </AppProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


