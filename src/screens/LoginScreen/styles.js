import { Dimensions, Platform, StyleSheet } from 'react-native'
import appColors from '../../utils/appColors';
import appStyles, { appHeight, appWidth } from '../../assets/styles';

export default styles = StyleSheet.create({
    flexS: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: appColors.Main,
        marginBottom: Platform.OS === 'android' ? null : -40,
    },
    logo_Container: (deviceType,) => ({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        // marginTop: deviceType === 'tablet' ? "15%" : '20%',
        // marginBottom: deviceType === 'tablet' ? "10%" : '20%',
        flex: 0.5
    }),
    logoStyle: (deviceType,) => ({
        height: deviceType === 'tablet' ? 120 : 95,
        width: deviceType === 'tablet' ? 120 : 95,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: appColors.Main,
    }),
    dotImageStyle: {
        height: appHeight / 2,
        width: Dimensions.get('window').width,
        alignSelf: 'center',
        marginTop: '-10%',
        position: 'absolute'
    },
    forgotPassword: {
        color: appColors.Main,
        fontSize: 14,
        textAlign: 'right',
        paddingVertical: 0,
        alignSelf: 'flex-end',
        marginRight: 27,
        marginTop: -5,
        fontFamily: 'Medium',
    },
    loginButton: (deviceType,) => ({
        width: deviceType === 'tablet' ? appWidth / 1.7 : appWidth / 1.2
    }),
    signUp: {
        color: appColors.grey,
        paddingVertical: 10,
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Medium',
    },
    link: {
        color: appColors.Main,
        marginLeft: 5,
        fontFamily: 'Regular',
    },
    tncLink: {
        color: appColors.Main,
        fontFamily: 'Regular',

    },
    tnc: {
        color: appColors.grey,
        paddingVertical: 10,
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
        marginHorizontal: 24,
        marginTop: 100,
        fontFamily: 'Regular',
    },
    headingDesc: {
        paddingVertical: 10,
        color: appColors.textSoft
    },
    heading: {
        color: appColors.dark,
        textAlign: 'center',
        fontSize: 32,
        marginBottom: 0,
        lineHeight: 40,
        fontFamily: 'Bold',
    },
    headingTwo: {
        color: appColors.grayText,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 30,
        lineHeight: 40,
        fontFamily: 'Regular',
    },
    safeContainerStyle: {
        marginHorizontal: 0,
        marginVertical: 0,
        justifyContent: 'flex-end',
        marginTop: 120,
        alignItems: 'baseline'
    },
    viewContainer: {
        flex: 1,
        paddingVertical: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 0,
        backgroundColor: appColors.white,
        alignItems: 'center',
    },
    scrollStyle: (keyboardHeight,) => ({
        width: appWidth,
        marginBottom: Platform.OS === 'android' ? 0 : keyboardHeight,

    }),

    errorStyle: {
        ...appStyles.inputTextStyle,
        fontFamily: 'SemiBold',
        color: appColors.danger,
        paddingHorizontal: 16,
        paddingBottom: 5
    },

    // Tablet Style
    tabletDotImageStyle: {
        flex: 1,
        alignSelf: 'center',
        marginTop: '-10%',
        position: 'absolute',

    },
    tabletViewContainer: {
        height: appHeight / 2,
        alignSelf: 'center',
        backgroundColor: appColors.white,
        paddingVertical: 20,
        borderRadius: 30,
        paddingHorizontal: 0,
    },
    tabletScrollStyle: (keyboardHeight,) => ({
        width: appWidth / 1.5,

    }),
});