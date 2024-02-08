import { StyleSheet } from 'react-native';
import appColors from '../../utils/appColors';
import { appHeight } from '../../assets/styles';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        height: appHeight / 4,
        width: '100%',
        flex: 1,
    },
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    logoStyle: {
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: appColors.Main,
    },
    notificationStyle: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: appColors.Main,
    },
    logo_Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: 10
    },
    morningView: {
        marginVertical: "5%",
        paddingHorizontal: 20,
        alignItems: "center"

    }
});
