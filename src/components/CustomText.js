import React from "react";
import { Text, StyleSheet, } from "react-native";

const CustomText = ({
    size = 16,
    color,
    textAlign = 'center',
    textDecorationLine = 'none',
    opacity = 1,
    letterSpacing = 0,
    style,
    children,
    numberOfLines,
    maxWidth = "100%",
    onPress,
    scaleFont = true,
    fontFamily = 'Regular',
}) => {


    const styles = StyleSheet.create({
        Main: {
            fontSize: size,
            fontFamily: fontFamily,
            color: color,
            textAlign: textAlign,
            textDecorationLine: textDecorationLine,
            opacity: opacity,
            letterSpacing: letterSpacing,
            maxWidth: maxWidth,
        },
    });
    return (
        <Text
            onPress={onPress}
            allowFontScaling={scaleFont}
            style={[styles.Main, style]}
            numberOfLines={numberOfLines}
        >
            {children}
        </Text>
    );
};

export default CustomText;
