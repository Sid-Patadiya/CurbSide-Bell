import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HomeScreen } from '../../theme/images'
import CustomText from '../CustomText'
import appColors from '../../utils/appColors'
import { styles } from './styles'

const CustomHeader = ({
    onPress,
    headerName,
    rightTitle
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={HomeScreen.menuIcon}
                    resizeMode='contain'
                    style={styles.menuIcon}
                />
            </TouchableOpacity>
            <CustomText
                fontFamily={'SemiBold'}
                color={appColors.black}
                size={16}
                numberOfLines={1}
                textAlign={'left'}
            >
                {headerName}
            </CustomText>
            <CustomText
                fontFamily={'Medium'}
                color={appColors.Main}
                numberOfLines={1}
                size={14}
                textAlign={'left'}
            >
                {rightTitle}
            </CustomText>
        </View>
    )
}

export default CustomHeader

