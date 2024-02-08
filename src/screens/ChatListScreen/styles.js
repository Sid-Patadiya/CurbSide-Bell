import { Platform, StyleSheet } from 'react-native';
import appColors from '../../utils/appColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white,
        marginBottom: Platform.OS === 'android' ? null : -40,
    },
    viewContainer: (deviceType) => ({
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: appColors.white_two,
        flexDirection: deviceType === 'tablet' ? 'row' : 'column',
        overFlow: 'hidden'

    }),
    listView: (data, index) => ({
        borderBottomWidth: index == data.length - 1 ? 0 : 2,
        borderBottomColor: appColors.border,

    }),
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.white
    },
    logo_style: {
        height: 100
    }
});
