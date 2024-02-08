import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from '../CustomText'
import appColors from '../../utils/appColors'
import { styles } from './styles'
import useAppState from '../../context/AppContext'

const HomeScreenImageView = ({
    source,
    title,
    onPress
}) => {

    const {
        DeviceType: { deviceType },
    } = useAppState();

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
            <View style={styles.imageContainer}>
                <Image source={source} style={styles.imageStyle} tintColor={appColors.white} resizeMode='contain' />
            </View>
            <CustomText
                fontFamily={'Bold'}
                color={appColors.black}
                size={deviceType === 'tablet' ? 22 : 16}
                textAlign={'left'}
            >
                {title}
            </CustomText>
        </TouchableOpacity>
    )
}

export default HomeScreenImageView

