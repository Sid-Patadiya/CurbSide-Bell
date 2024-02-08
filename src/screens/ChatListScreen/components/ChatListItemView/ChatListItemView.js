import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CommonIcons } from '../../../../theme/images'
import CustomText from '../../../../components/CustomText'
import appColors from '../../../../utils/appColors'
import { styles } from './styles'

const ChatListItemView = ({
    name = 'Rodrigo Hawkins',
    msg = "Bob says hi.",
    time = '07:13 pm',
    pending = '01',
    onPress,
    item
}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
            <Image
                source={CommonIcons.Image1}
                resizeMode='cover'
                style={styles.imageStyle}
            />
            <View style={{ flex: 1, }}>
                <CustomText
                    fontFamily={'SemiBold'}
                    color={appColors.black}
                    size={16}
                    numberOfLines={1}
                    textAlign={'left'}
                >
                    {name}
                </CustomText>
                <CustomText
                    fontFamily={'Medium'}
                    color={appColors.grayText}
                    numberOfLines={1}
                    size={13}
                    textAlign={'left'}
                >
                    {msg}
                </CustomText>
            </View>
            <View style={{}}>
                <CustomText
                    fontFamily={'Medium'}
                    color={appColors.grayText}
                    numberOfLines={1}
                    size={13}
                    textAlign={'left'}
                >
                    {time}
                </CustomText>
                <View style={styles.pendingView}>
                    <CustomText
                        fontFamily={'Medium'}
                        color={appColors.white}
                        numberOfLines={1}
                        size={13}
                        textAlign={'right'}
                    >
                        {pending}
                    </CustomText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ChatListItemView

