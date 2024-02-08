import { StyleSheet } from 'react-native';
import appColors from '../../utils/appColors';

export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: appColors.white,
        paddingBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        // paddingTop: 10

    },
    container: (value) => ({
        flexDirection: 'row',
        justifyContent: value === false ? "flex-start" : 'space-between',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 15,
        marginTop: value === false ? 0 : 10,

    }),
    innerContainer: (value) => ({
        gap: 5,
        flex: 1,
        alignItems: value === true ? 'flex-start' : "flex-start",
    }),
    arrowIconStyle: {
        height: 25,
        width: 25
    },
    toggleView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 50
    }
});
