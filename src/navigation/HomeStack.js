import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatList, ChatScreen, Landing } from "../screens";




const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator
            initialRouteName="Landing"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={'Landing'} component={Landing} />
            <Stack.Screen name={'ChatList'} component={ChatList} />


        </Stack.Navigator>
    );
};

export default HomeStack;
