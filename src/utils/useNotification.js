import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import Constants from "expo-constants";


export const useNotifications = () => {
    const registerForPushNotificationsAsync = async () => {
        let token;

        if (Platform.OS === "android") {
            //     await Notifications.setNotificationChannelAsync("default", {
            //         name: "default",
            //         importance: Notifications.AndroidImportance.MAX,
            //         vibrationPattern: [0, 250, 250, 250],
            //         lightColor: "#FF231F7C",
            //     });
            // }

            // if (Device.isDevice) {
            //     const { status: existingStatus } =
            //         await Notifications.getPermissionsAsync();
            //     let finalStatus = existingStatus;

            //     // Forcefully requesting permission if not granted
            //     if (existingStatus !== "granted") {
            //         const { status } = await Notifications.requestPermissionsAsync({
            //             ios: {
            //                 allowAlert: true,
            //                 allowSound: true,
            //                 allowBadge: true,
            //             },
            //             android: {
            //                 allowAlert: true,
            //                 allowSound: true,
            //                 allowBadge: true,
            //             },
            //         });
            //         finalStatus = status;
            //     }

            //     if (finalStatus !== "granted") {
            //         alert('Failed to get push token for push notification!');
            //         return;
            //     }

            token = (
                await Notifications.getExpoPushTokenAsync({
                    projectId: Constants.expoConfig.extra.eas.projectId,
                })
            ).data;
        } else {
            alert('Must use physical device for Push Notifications');

        }
        return token;
    };

    const handleNotificationResponse = (response) => {

        console.log('response', JSON.stringify(response))
    };
    const handleTapNotification = async (response) => {
        try {
            console.log('handleTapNotification->>', JSON.stringify(response))
        } catch (error) {
            console.log(error.message);
        }
    };

    return {
        registerForPushNotificationsAsync,
        handleNotificationResponse,
        handleTapNotification,
    };
};
