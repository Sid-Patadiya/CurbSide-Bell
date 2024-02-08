import React from "react";
import {
    useNavigation,

} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Landing, Login, ChatScreen } from "./screens";
import TabNavigator from "./navigation/TabNavigator";

import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { useNotifications } from "./utils/useNotification";
import secureStore from "./utils/secureStore";
import Utils from "./utils/utils";
import useAppState from "./context/AppContext";


const Stack = createNativeStackNavigator();

const Index = () => {
    const navigation = useNavigation()

    const {
        User: { getUserInfo, isLoggedIn },
    } = useAppState();




    useEffect(() => {
        getUserInfo()
        if (isLoggedIn) {
            Utils.resetNavigation(navigation, 'LandingPage')
        }
    }, [isLoggedIn])


    const [expoPushToken, setExpoPushToken] = useState('');


    const {
        registerForPushNotificationsAsync,
        handleNotificationResponse,
        handleTapNotification,
    } = useNotifications();

    useEffect(() => {
        registerForPushNotificationsAsync().then((result) => {
            console.log('result', result)
            setExpoPushToken(result)
        });
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: true,
            }),
        });

        Notifications.setBadgeCountAsync(1);


        const responseListener = Notifications.addNotificationReceivedListener(
            handleNotificationResponse
        );

        const tapListener = Notifications.addNotificationResponseReceivedListener(({ notification }) => {
            console.log(notification.request.content.data)

        }
            // handleTapNotification
        );


        return () => {
            if (responseListener) {
                Notifications.removeNotificationSubscription(responseListener);
            }
            if (tapListener) {
                Notifications.removeNotificationSubscription(tapListener);
            }
        };
    }, []);



    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'Login'} component={Login} />

            <Stack.Screen name={'LandingPage'} component={TabNavigator} />
            <Stack.Screen name={'ChatScreen'} component={ChatScreen} />

        </Stack.Navigator>
    );
};

export default Index;
