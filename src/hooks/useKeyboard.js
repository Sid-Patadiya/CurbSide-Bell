import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

const useKeyboard = () => {

    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        const showKeyboard = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        const hideKeyboard = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);

        return () => {
            showKeyboard.remove();
            hideKeyboard.remove();
        }
    }, []);

    onKeyboardDidShow = (e) => {
        setKeyboardHeight(e.endCoordinates.height);
    }

    onKeyboardDidHide = (e) => {
        setKeyboardHeight(0);
    }

    return {
        keyboardHeight
    }
}

export default useKeyboard;