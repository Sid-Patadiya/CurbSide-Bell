import { StyleSheet } from 'react-native';
import { appWidth } from '../../assets/styles';
import appColors from '../../utils/appColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    topContainer: {
        alignItems: "center",
        justifyContent: 'center',
        gap: 8,
        flex: 1,

    },
    logo_style: {
        height: 90, width: 90
    },
    bottomContainer: {
        marginBottom: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    loginButton: {
        backgroundColor: appColors.Main,
        width: (appWidth * 0.87),
    },
    registerButton: {
        backgroundColor: appColors.white,
        width: (appWidth * 0.87),
    },


    // Tablet style

    tabletBottomContainer: {
        flexDirection: 'row',
        bottom: 70,
        alignSelf: 'center',
        gap: 30,
        marginHorizontal: 30
    },
    tabletLoginButton: {
        backgroundColor: appColors.Main,
        flex: 1,
    },
    tabletRegisterButton: {
        backgroundColor: appColors.white,
        flex: 1,
    },
});
