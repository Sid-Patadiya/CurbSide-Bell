import { Text as TextElement } from 'react-native-elements';
import appColors from '../utils/appColors';
import { StyleSheet } from 'react-native';

const Text = (props) => (
    <TextElement {...props} style={{ ...styles.text_style, ...props.style }}>{props.children}</TextElement>
)

export default Text;
const styles = StyleSheet.create({

    text_style: {
        margin: 10,
        color: appColors.secondary,
    }
})