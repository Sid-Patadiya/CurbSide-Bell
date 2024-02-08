import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import appColors from '../../utils/appColors'
import CustomText from '../CustomText'
import { CommonIcons } from '../../theme/images'


const dummyArray = [
    'Give us a couple of minutes',
    'Give us a minute',
    'On the way',
    'We are a little behind, we will be out soon'
]
const CannedModal = ({
    isVisible = false,
    onPressClose,
    onRequestClose,
    title,
    onPressMessage
}) => {


    return (
        <Modal
            isVisible={isVisible}
            onRequestClose={onRequestClose}
        >

            <View style={styles.container}>
                <View style={styles.titleView}>
                    <CustomText
                        fontFamily={'SemiBold'}
                        color={appColors.black}
                        size={20}
                        numberOfLines={1}
                        textAlign={'left'}
                    >
                        {title}
                    </CustomText>
                    <TouchableOpacity onPress={onPressClose} style={styles.closeIconContainer}>
                        <Image
                            source={CommonIcons.close}
                            resizeMode='contain'
                            style={styles.closeIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{}}>

                    <FlatList
                        data={dummyArray}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={styles.messageContainer} onPress={() => { onPressMessage(item) }}>
                                    <CustomText
                                        fontFamily={'SemiBold'}
                                        color={appColors.grayText}
                                        size={18}
                                        textAlign={'left'}
                                    >
                                        {item}
                                    </CustomText>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default CannedModal

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.white,
        padding: 20,
        borderRadius: 30,

    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        borderBottomWidth: 1.5,
        paddingBottom: 18,
        borderBottomColor: appColors.border
    },
    closeIcon: {
        height: 15,
        width: 15,
    },
    closeIconContainer: {
        backgroundColor: appColors.Main,
        alignItems: "center",
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: 50
    },
    messageContainer: {
        marginVertical: 5
    }
})