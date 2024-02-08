import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CommonIcons } from '../../theme/images'
import useAppState from '../../context/AppContext'
import { styles } from './styles'

const ChatBottomView = ({
    onPress,
    onPressSend,
    value,
    onChangeText
}) => {

    const {
        Localization: { i18n },
    } = useAppState();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={CommonIcons.threeDot}
                    resizeMode='contain'
                    style={styles.threeDotStyle}
                />
            </TouchableOpacity>
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                placeholder={i18n.t('type_message')}

            />
            <TouchableOpacity onPress={onPressSend}>
                <Image
                    source={CommonIcons.sendMessage}
                    resizeMode='contain'
                    style={styles.threeDotStyle}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ChatBottomView


