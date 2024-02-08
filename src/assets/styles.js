import { Dimensions, StyleSheet } from 'react-native';
import appColors from '../utils/appColors';

export const appWidth = Dimensions.get('window').width;
export const appHeight = Dimensions.get('window').height;

export const appFonts = {
  Main: 'Rubik',
  poppins: 'Poppins'
}

const appStyles = StyleSheet.create({
  button: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: .5,
    width: (appWidth * 0.87),
    height: 50,
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: 10
  },
  iconButton: {
    width: "auto",
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    margin: 3
  },
  inputContainer: (type, isError) => ({
    borderRadius: 50,
    borderWidth: 1,
    borderColor: isError ? appColors.danger : appColors.border,
    marginHorizontal: 16,
    paddingHorizontal: 15,
    height: 50
  }),
  inputTextStyle: (isError) => ({
    fontSize: 16,
    color: isError ? appColors.danger : appColors.textSoft,
    fontFamily: 'Medium',
  }),
  buttonStyle: (isDark, customStyles = {}) => ({
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: appColors.Main,
    borderWidth: 1,
    borderRadius: 50,
    flex: 1,
    height: 45,
    backgroundColor: isDark ? appColors.Main : appColors.secondary,
    ...customStyles
  }),
  buttonTextStyle: (isDark, customStyles = {}) => ({
    color: isDark ? appColors.secondary : appColors.Main,
    fontFamily: 'Bold',
    fontSize: 18,
    ...customStyles
  }),
  container: {
    flex: 1,
    backgroundColor: appColors.Main,
    alignContent: 'center',
  },




  toastIcon: {
    width: 18,
    height: 18
  },
  toastMessage: (isError) => ({
    marginLeft: 10,
    color: isError ? appColors.danger : appColors.success,
    fontFamily: 'SemiBold',
    fontSize: 18,
    lineHeight: 20
  }),
  toastContainer: {
    backgroundColor: appColors.secondary,
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 6,
    elevation: 5,
    margin: 8
  }
});

export default appStyles;
