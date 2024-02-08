import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import appColors from '../../utils/appColors'
import { CommonIcons, HomeScreen } from '../../theme/images'
import CustomText from '../CustomText'
import useAppState from '../../context/AppContext'
import { styles } from './styles'

const HomeScreenHeader = ({
    onPressNotification,
    onPressMenuIcon,
    name = 'John'
}) => {

    const {
        Localization: { i18n },
    } = useAppState();

    return (
        <View >
            <ImageBackground resizeMode='cover' source={require('../../assets/images/headerImage.png')}
                style={styles.container}>
                <View style={styles.viewContainer}>
                    <View style={styles.logo_Container}>
                        <Image
                            style={styles.logoStyle}
                            resizeMode="contain"
                            source={CommonIcons.Logo}
                        />
                        <CustomText
                            fontFamily={'Bold'}
                            color={appColors.secondary}
                            size={18}
                            style={{ top: 5 }}
                            textAlign={'left'}
                        >
                            {i18n.t('curbside_bell_two')}
                        </CustomText>
                    </View>
                    <View style={styles.logo_Container}>
                        <TouchableOpacity onPress={onPressNotification}>
                            <Image
                                style={styles.notificationStyle}
                                resizeMode="contain"
                                source={HomeScreen.notification}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPressMenuIcon}>
                            <Image
                                style={styles.notificationStyle}
                                resizeMode="contain"
                                source={HomeScreen.menuIcon}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.morningView}>
                    <CustomText
                        fontFamily={'Bold'}
                        color={appColors.secondary}
                        size={22}
                        style={{ top: 5 }}
                        textAlign={'left'}
                    >
                        {i18n.t('header_goodMorning')}
                    </CustomText>
                    <CustomText
                        fontFamily={'Regular'}
                        color={appColors.secondary}
                        size={22}
                        style={{ top: 5 }}
                        textAlign={'left'}
                    >
                        {name}
                    </CustomText>
                </View>
            </ImageBackground>

        </View>
    )
}

export default HomeScreenHeader

