import { StyleSheet } from 'react-native';
import appColors from '../../utils/appColors';

export const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: appColors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        gap: 20,
        alignSelf: "center",
        borderRadius: 15,
        marginVertical: 50
    },
    imageContainer: {
        height: 50,
        width: 50,
        backgroundColor: appColors.Main,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50

    },
    imageStyle: {
        height: 25,
        width: 25,
    }
});
