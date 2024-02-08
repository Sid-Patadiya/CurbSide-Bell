import { Platform, StyleSheet } from 'react-native';
import appColors from '../../utils/appColors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 15,
        backgroundColor: appColors.white,
        paddingVertical: Platform.OS === 'android' ? 15 : Platform.isPad ? 45 : 10
    },
    threeDotStyle: {
        height: 50,
        width: 50
    },
    textInput: {
        flex: 1,
        borderRadius: 30,
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 20,
        borderColor: appColors.border
    }
});
