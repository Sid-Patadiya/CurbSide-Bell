import { FlatList, Image, ImageBackground, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import ChatScreenHeader from '../../components/ChatScreenHeader/ChatScreenHeader'
import { CommonIcons } from '../../theme/images'
import ChatBottomView from '../../components/ChatBottomView/ChatBottomView'
import { styles } from './styles'
import CannedModal from '../../components/CannedPopup/CannedModal'
import moment from 'moment'
import CustomText from '../../components/CustomText'
import appColors from '../../utils/appColors'
import useAppState from '../../context/AppContext'

const ChatScreen = ({ arrowIcon, item, route }) => {
    const navigation = useNavigation()
    const scrollEnd = useRef();

    const [isVisible, setIsVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [chatListData, setChatListData] = useState(route?.params?.item ?? item)

    const {
        DashBoard: { getChatHistory, chatHistory, setChatHistory },
    } = useAppState();

    useEffect(() => {
        setChatHistory(null)
        getChatHistory(chatListData?.id)
    }, [chatListData])
    console.log('chatHistory', chatHistory)



    const calculateDuration = (startDate,) => {
        const startMoment = moment(startDate);
        const endMoment = moment(new Date());

        const durationInMilliseconds = endMoment.diff(startMoment);
        const duration = moment.duration(durationInMilliseconds);

        const hours = duration.hours();
        const minutes = duration.minutes();

        return `${hours !== 0 ? hours + ' Hours' : ''}  ${minutes + ' Minutes'}`

    };

    const CustomerMessage = ({ message, date, }) => {
        return (
            <View style={styles.messageContainer(true)}>
                <View style={styles.messageView(true)}>
                    <CustomText
                        size={14}
                        textAlign='left'
                        color={appColors.grayText}>
                        {message}
                    </CustomText>

                </View>
                <View style={styles.timeContainer(true)}>
                    <Image
                        source={CommonIcons.clock}
                        style={styles.clockIcon}
                        resizeMode='contain'
                    />
                    <CustomText
                        size={12}
                        textAlign='left'
                        color={appColors.grayText}>
                        {date}
                    </CustomText>
                </View>
                <Image
                    source={CommonIcons.leftCorner}
                    style={styles.leftCornerImage}
                    resizeMode='cover'
                />
            </View>
        );
    };

    const StoreMessage = ({ message, date, }) => {
        return (
            <View style={styles.messageContainer(false)}>
                <View style={styles.messageView(false)}>
                    <CustomText
                        size={14}
                        textAlign='left'
                        color={appColors.black}>
                        {message}
                    </CustomText>

                </View>
                <View style={styles.timeContainer(false)}>
                    <Image
                        source={CommonIcons.clock}
                        style={styles.clockIcon}
                        resizeMode='contain'
                    />
                    <CustomText
                        size={12}
                        textAlign='right'
                        color={appColors.grayText}
                    >
                        {date}
                    </CustomText>
                </View>
                <Image
                    source={CommonIcons.rightCorner}
                    style={styles.rightCornerImage}
                    resizeMode='cover'
                />
            </View >
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
                <ImageBackground
                    resizeMode='cover'
                    source={CommonIcons.chatBackground}
                    style={styles.chatBackground}
                >
                    <ChatScreenHeader
                        name={chatListData?.fields[2]?.value ?? ''}
                        started_time={moment(chatListData?.dateTimeStarted).format('hh:mm a')}
                        order_id={chatListData?.fields[2]?.value ?? ''}
                        arrowIcon={arrowIcon} onPressBack={() => navigation.goBack()}
                        duration={calculateDuration(chatListData?.dateTimeStarted)}
                    />



                    <FlatList
                        data={chatHistory ?? []}
                        contentContainerStyle={{ paddingVertical: 10 }}
                        ref={scrollEnd}
                        onContentSizeChange={() =>
                            scrollEnd.current.scrollToEnd({ animated: true })
                        }
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                item.sentBy === 'customer' ?
                                    <CustomerMessage message={item.message} date={moment(item.dateTimeSent).format('hh:mm A')} /> :
                                    <StoreMessage message={item.message} date={moment(item.dateTimeSent).format('hh:mm A')} />
                            )
                        }}
                    />

                    <ChatBottomView onPress={() => { setIsVisible(true) }} value={inputValue} onChangeText={setInputValue} onPressSend={() => { }} />
                </ImageBackground>
                <CannedModal
                    onPressClose={() => setIsVisible(false)}
                    isVisible={isVisible}
                    title={'Canned Messages'}
                    onPressMessage={(value) => {
                        setIsVisible(false)
                        setInputValue(value)
                    }} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen


