import { FlatList, Image, KeyboardAvoidingView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


import CustomHeader from '../../components/CustomHeader/CustomHeader'
import useAppState from '../../context/AppContext';
import { styles } from './styles'
import ChatListItemView from './components/ChatListItemView/ChatListItemView'
import ChatScreen from '../ChatScreen/ChatScreen'
import { CommonIcons } from '../../theme/images'
import CustomText from '../../components/CustomText'
import moment from 'moment'


const ChatListScreen = () => {
    const navigation = useNavigation();

    const {
        Localization: { i18n },
        DashBoard: { getDashBoardData, dashBoardData },
        DeviceType: { deviceType }
    } = useAppState();

    useEffect(() => {
        getDashBoardData()
    }, [])

    const [selectedData, setSelectedData] = useState(null)

    const renderItem = ({ item, index }) => {
        const lastIndex = item?.chatMessageList?.length - 1 ?? 0
        return (
            <View key={index} style={styles.listView(dashBoardData?.pings ?? [], index)}>
                <ChatListItemView
                    item={item}
                    name={item?.fields[2]?.value ?? ''}
                    msg={item?.chatMessageList[lastIndex]?.message ?? ''}
                    time={moment(item?.chatMessageList[lastIndex]?.dateTimeSent).format('hh:mm a')}
                    onPress={() => {
                        if (deviceType == 'tablet') {
                            setSelectedData(null)
                            setTimeout(() => {
                                setSelectedData(item)
                            }, 0.1)

                        } else {
                            navigation.navigate('ChatScreen', { item: item })
                        }

                    }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <CustomHeader headerName={i18n.t('screen_chat_header_title')} rightTitle={`${dashBoardData?.pings?.length} ` + i18n.t('active')} />

            <View style={styles.viewContainer(deviceType)}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                    data={dashBoardData?.pings ?? []}
                    renderItem={renderItem}
                />
                {deviceType === 'tablet' &&
                    <View style={{ flex: 4, }}>
                        {selectedData !== null ?
                            <ChatScreen arrowIcon={false} item={selectedData} />
                            :
                            <>
                                <View style={styles.emptyContainer}>
                                    <Image
                                        source={CommonIcons.Logo}
                                        resizeMode='contain'
                                        style={styles.logo_style}
                                    />
                                    <CustomText
                                        fontFamily={'Bold'}
                                        color={appColors.Main}
                                        size={28}
                                    >
                                        {i18n.t('curbside_bell')}
                                    </CustomText>

                                </View>
                            </>
                        }
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}

export default ChatListScreen


