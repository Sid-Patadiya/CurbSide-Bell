import React, { } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { CommonIcons, } from '../../theme/images';
import CustomText from '../../components/CustomText';
import ActionButton from '../../components/ActionButton';
import appColors from '../../utils/appColors';
import useAppState from '../../context/AppContext';
import { Button } from 'react-native-elements';
import * as Notifications from 'expo-notifications';


const HomeScreen = ({ navigation }) => {

    const {
        User: { isUserInfoLoading, isLoggedIn, logout },
        Localization: { i18n },
        DeviceType: { deviceType }
    } = useAppState();



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
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
            <View style={deviceType === 'tablet' ? styles.tabletBottomContainer : styles.bottomContainer}>
                {!isUserInfoLoading ? <>
                    <ActionButton
                        title={i18n.t('login')}

                        onPress={() => { navigation.navigate('Login') }}
                        buttonStyle={deviceType === 'tablet' ? styles.tabletLoginButton : styles.loginButton}
                    />
                    <ActionButton
                        title={i18n.t('register')}
                        textColor={appColors.Main}
                        buttonStyle={deviceType === 'tablet' ? styles.tabletRegisterButton : styles.registerButton}
                    />
                    {isLoggedIn && <ActionButton
                        onPress={logout}
                        title={i18n.t('logout')}
                        buttonStyle={{ backgroundColor: appColors.Main, }}
                    />}

                    {/* <Button
                        title="Press to schedule a notification"
                        onPress={async () => {
                            await schedulePushNotification();
                        }}
                    /> */}
                </> :
                    <ActivityIndicator size="large" color={appColors.Main} />
                }
            </View>
        </SafeAreaView >
    );
}

export default HomeScreen;

// async function schedulePushNotification() {
//     await Notifications.scheduleNotificationAsync({
//         content: {
//             title: "You've got mail! 📬",
//             body: 'Here is the notification body',
//             data: { data: 'goes here', type: 'chat' },
//         },
//         trigger: { seconds: 1 },
//     });
// }