import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomText from '../CustomText'
import appColors from '../../utils/appColors'
import { CommonIcons } from '../../theme/images'
import useAppState from '../../context/AppContext'
import { Switch } from 'react-native-elements';
import { styles } from './styles'

const ChatScreenHeader = ({
    onPressBack,
    arrowIcon = true,
    image = require('../../assets/images/Image1.png'),

    name = 'Rodrigo Hawkins',
    active = 'Online',
    order_id,
    started_time,
    duration
}) => {

    const {
        Localization: { i18n },

    } = useAppState();

    const [value, setValue] = useState(false)
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container(false)}>
                {arrowIcon &&
                    <TouchableOpacity onPress={onPressBack}>
                        <Image
                            source={CommonIcons.arrowIcon}
                            resizeMode='contain'
                            style={styles.arrowIconStyle}
                        />
                    </TouchableOpacity>
                }
                <Image
                    source={image}
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
                        color={appColors.Main}
                        numberOfLines={1}
                        size={14}
                        textAlign={'left'}
                    >
                        {active}
                    </CustomText>
                </View>


            </View>


            <View style={styles.container(true)}>
                <View style={styles.innerContainer(true)}>
                    <CustomText
                        fontFamily={'SemiBold'}
                        color={appColors.grayText}
                        size={15}
                        numberOfLines={1}
                        textAlign={'left'}
                    >
                        {i18n.t('order_id')}: {' '} <CustomText
                            fontFamily={'SemiBold'}
                            color={appColors.black}
                            size={15}
                            numberOfLines={1}
                            textAlign={'left'}
                        >
                            {order_id}
                        </CustomText>
                    </CustomText>
                    <CustomText
                        fontFamily={'Medium'}
                        color={appColors.grayText}
                        numberOfLines={1}
                        size={15}
                        textAlign={'left'}
                    >
                        {i18n.t('started')}:{' '} <CustomText
                            fontFamily={'SemiBold'}
                            color={appColors.black}
                            size={15}
                            numberOfLines={1}
                            textAlign={'left'}
                        >
                            {started_time}
                        </CustomText>
                    </CustomText>
                </View>
                <View style={styles.innerContainer(false)}>
                    <CustomText
                        fontFamily={'SemiBold'}
                        color={appColors.grayText}
                        size={15}
                        numberOfLines={1}
                        textAlign={'left'}
                    >
                        {i18n.t('duration')}: {' '}<CustomText
                            fontFamily={'SemiBold'}
                            color={appColors.black}
                            size={15}
                            numberOfLines={1}
                            textAlign={'left'}
                        >
                            {duration}
                        </CustomText>
                    </CustomText>

                    <View style={styles.toggleView}>
                        <CustomText
                            fontFamily={'Medium'}
                            color={appColors.grayText}
                            numberOfLines={1}
                            size={15}
                            textAlign={'left'}
                        >
                            {i18n.t('responsive')}:
                        </CustomText>
                        <Switch
                            value={value}
                            onChange={() => setValue(!value)}
                            trackColor={{ false: appColors.grayText, true: appColors.Main }}
                            color={appColors.Main}
                            style={{ height: 25 }}
                            thumbColor={'#E8F5E9'}
                        />
                    </View>
                </View>
            </View >
        </View >
    )
}

export default ChatScreenHeader

