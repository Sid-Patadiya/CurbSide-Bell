import { CommonActions } from "@react-navigation/native";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";

export default class Utils {
  static resetNavigation(navigation, routeName) {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: routeName }],
      })
    );
  }

  static isEmpty(value) {
    return value === null || value === undefined || value.trim() === "";
  }

  static showAlert = (title, message) => {
    Alert.alert(title, message, [
      {
        text: "Ok",
        style: "cancel",
      },
    ]);
  };

  static showToast = (message, type = "addedToCart") => {
    Toast.show({
      type,
      text1: message,
      position: "bottom",
      bottomOffset: 70,
      visibilityTime: 2000,
    });
  };
}
