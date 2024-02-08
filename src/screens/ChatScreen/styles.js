import { StyleSheet } from 'react-native';
import appColors from '../../utils/appColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white,

    },
    chatBackground: {
        flex: 1,
    },
    messageContainer: (value) => ({
        flex: 1,
        marginBottom: 15,
        alignSelf: value ? 'flex-start' : 'flex-end',
        marginHorizontal: 20,
    }),
    messageView: (value) => ({
        backgroundColor: value ? appColors.white : appColors.Main,
        padding: 16,
        marginHorizontal: 10,
        maxWidth: '50%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: value ? appColors.white : appColors.Main,
        alignItems: 'center',
        justifyContent: 'center'
    }),

    rightCornerImage: {
        height: 20,
        width: 30,
        position: 'absolute',
        right: -5,
    },
    leftCornerImage: {
        height: 20,
        width: 30,
        position: 'absolute',
        left: -5,
    },

    timeContainer: (value) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        justifyContent: value ? 'flex-start' : 'flex-end',
        marginHorizontal: 10,
        marginTop: 5
    }),
    clockIcon: {
        height: 15,
        width: 15,

    }
});
