import React, { useEffect } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import useAppState from '../../context/AppContext'
import CustomText from '../../components/CustomText'
import appColors from '../../utils/appColors'
import HomeScreenHeader from '../../components/HomeScreenHeader/HomeScreenHeader'
import HomeScreenImageView from '../../components/HomeScreenImageView/HomeScreenImageView'
import { CommonIcons, TabIcons } from '../../theme/images'
import { Polygon, Svg } from 'react-native-svg'

const LandingScreen = ({ route }) => {
    const navigation = useNavigation();

    const {
        Localization: { i18n },
        DashBoard: { getDashBoardData, dashBoardData },
        User: { user }
    } = useAppState();

    useEffect(() => {
        getDashBoardData()
        console.log('dashBoardData', dashBoardData)
    }, [])

    return (
        <SafeAreaView style={styles.container}>


            <ScrollView style={styles.viewContainer}>

                <HomeScreenHeader
                    name={user?.user?.userName} />

                <HomeScreenImageView
                    source={TabIcons.icon2} 
                    title={i18n.t('see_dashboard')}
                    onPress={() => navigation.navigate('ChatList')}
                />



            </ScrollView>
        </SafeAreaView>
    )
}

export default LandingScreen

