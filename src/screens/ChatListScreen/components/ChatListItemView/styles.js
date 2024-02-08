import { StyleSheet } from 'react-native';
import appColors from '../../../../utils/appColors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginVertical: 10
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    pendingView: {
        height: 25,
        width: 25,
        borderRadius: 30,
        backgroundColor: appColors.Main,
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: 'center'
    }
});
