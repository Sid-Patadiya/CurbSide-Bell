// import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, Pressable, StyleSheet, View } from 'react-native';
import { appWidth } from '../assets/styles';
import CustomText from './CustomText';
import appColors from '../utils/appColors';

const ActionButton = ({
    buttonStyle = {},
    textStyle = {},
    textColor,
    onPress,
    title,
    disabled = false,
    loading = false,
    icon,
    iconStyle = {},
    loaderColor = appColors.secondary,
    resizeMode = 'contain',
    iconComponent,
    fontFamily = 'SemiBold'
}) => {
    return (
        <Pressable style={[styles.button, buttonStyle]}
            onPress={disabled ? () => { } : onPress}
            activeOpacity={disabled ? 1 : 0.8}
        >
            {loading ? <ActivityIndicator size="large" color={loaderColor} /> :
                <View style={styles.buttonView}>
                    {icon && <Image
                        source={icon}
                        style={{ ...styles.iconStyle, ...iconStyle }}
                        resizeMode={resizeMode} />}
                    {iconComponent}

                    <CustomText
                        color={textColor ? textColor : appColors.white}
                        fontFamily={fontFamily}
                        size={18}
                        style={{ ...textStyle, }}
                    >
                        {title}
                    </CustomText>
                </View>
            }
        </Pressable >
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: .5,
        // width: (appWidth * 0.87),
        height: 50,
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 10,
        borderWidth: 1,
        borderColor: appColors.Main
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {
        position: 'absolute',
        left: 2,
        width: 40,
        height: 40
    }
});

export default ActionButton;