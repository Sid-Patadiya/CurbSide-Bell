import { Appearance } from "react-native";

const isDarkMode = Appearance.getColorScheme() === "dark";

const dark = {
  primary: "#1341A3",
  white: '#FFFFFF',
  white_two: '#F7F8FA',
  secondary: "#FFFFFF",
  Main: "#6CBD45",
  border: "#E8ECEE",
  danger: "#FF5C39",
  dark: "#232424",
  dark1: "#232525",
  grey: "#7D8183",
  grayText: '#868B9F',
  placeholder: "#8C8C8C",
  categoryBg: "#175973",
  black: "#000000",
  success: "#0DAC50",
  blue: "#005670",
  blueTransparent: "rgba(0,86,112,.1)",
  dot: "#D0D0D0",
  lightGrey: "#7F8591",
  red: "#DB4839",
  darkRed: '#db48391a',
  darkGreen: '#0dac501a',
  backGround: '#F8F9FA'
};

const light = {
  primary: "#1341A3",
  white: '#FFFFFF',
  white_two: '#F7F8FA',
  secondary: "#FFFFFF",
  Main: "#6CBD45",
  border: "#E8ECEE",
  danger: "#FF5C39",
  dark: "#232424",
  dark1: "#232525",
  grey: "#7D8183",
  grayText: '#868B9F',
  placeholder: "#8C8C8C",
  categoryBg: "#175973",
  black: "#000000",
  success: "#0DAC50",
  blue: "#005670",
  blueTransparent: "rgba(0,86,112,.1)",
  dot: "#D0D0D0",
  lightGrey: "#7F8591",
  red: "#DB4839",
  darkRed: '#db48391a',
  darkGreen: '#0dac501a',
  backGround: '#F8F9FA'

};
export default appColors = isDarkMode ? dark : light;
