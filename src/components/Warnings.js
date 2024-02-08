import { Dimensions, Image, Text, View } from "react-native";
import appColors from "../utils/appColors";

const { width } = Dimensions.get('screen');

const Warnings = ({ message, type = 'error', icon }) => (
    <View style={{
        width: width - 48,
        borderRadius: 4,
        backgroundColor: type === 'error' ? appColors.darkRed : appColors.darkGreen,
        flexDirection: 'row',
        padding: 10,
        marginBottom: 15,
        alignItems: 'center'
    }}>
        {icon && <Image style={{
            width: 16,
            height: 16,
        }} source={icon} />}
        <Text style={{
            marginHorizontal: 8,
            color: type === 'error' ? appColors.red : appColors.success,
            lineHeight: 20,
            fontSize: 14,
            fontWeight: '600'
        }}>{message}</Text>
    </View>
);

export default Warnings;