import { Platform, StyleSheet } from 'react-native';
import appColors from '../../utils/appColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.Main,
        marginBottom: Platform.OS === 'android' ? null : -40,
    },
    viewContainer: {
        flex: 1,

        backgroundColor: appColors.backGround,
    },

});
