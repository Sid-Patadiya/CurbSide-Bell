import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import appColors from '../utils/appColors';
import { TabIcons } from '../theme/images';

import { Landing } from '../screens';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='DashBoard'
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: appColors.secondary,
                },
                tabBarActiveBackgroundColor: appColors.Main,
                tabBarIcon: ({ focused }) => {
                    let iconName = TabIcons.icon1;
                    if (route.name === 'DashBoard') {
                        iconName = TabIcons.icon2;
                    } else if (route.name === 'Orders') {
                        iconName = TabIcons.icon1;
                    } else if (route.name === 'Category') {
                        iconName = TabIcons.icon3;
                    } else if (route.name === 'MyAccount') {
                        iconName = TabIcons.icon4;
                    }
                    return (<View style={{ ...styles.imageView, }}>

                        {focused && <Image source={TabIcons.TabSelectedPointer} style={styles.selectedPointer} />}

                        <Image source={iconName}
                            style={{
                                ...styles.iconStyle,
                                tintColor: focused ? appColors.secondary : appColors.grayText
                            }}
                            resizeMode={'contain'} />
                    </View>);
                }
            })}
        >
            <Tab.Screen
                name="Orders"
                component={Landing}
                listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}

            />
            <Tab.Screen
                name="DashBoard"
                component={HomeStack}
            />
            <Tab.Screen
                name="Category"
                component={Landing}
                listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}
            />
            <Tab.Screen
                name="MyAccount"
                component={Landing}
                listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    imageView: {
        flex: 1,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    iconStyle: {
        width: 16,
        height: 16,
    },
    selectedPointer: {
        width: 42,
        height: 8,
        position: 'absolute',
        top: 0
    }
})