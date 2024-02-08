import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import useAppState from '../../context/AppContext';
import ActionButton from '../../components/ActionButton';
import appColors from '../../utils/appColors';
import Text from '../../components/Text';
import Utils from '../../utils/utils';
import appStyles from '../../assets/styles';
import { Input } from 'react-native-elements';
import { Controller, useForm } from 'react-hook-form';
import getLoginConfig from './loginConfig';
import useKeyboard from '../../hooks/useKeyboard';
import Warnings from '../../components/Warnings';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';
import { CommonIcons } from '../../theme/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Recaptcha from 'react-native-recaptcha-that-works/dist/Recaptcha';
import { SITE_KEY, baseUrl } from '../../../appConfig';

const { width } = Dimensions.get('screen');

const FIELDS_TYPE = [
    'pattern'
]

const LoginScreen = (props) => {

    const navigation = useNavigation();

    const {
        User: { login, isLoggedIn, isLoading },
        Localization: { i18n },
        DeviceType: { deviceType }
    } = useAppState();

    const scrollRef = useRef();

    const formConfig = getLoginConfig();

    const { handleSubmit, control, formState: { errors }, setValue } = useForm({
        shouldUnregister: false
    })

    useEffect(() => {
        setValue('email', 'test@curbsidebell.com')
        setValue('password', '2G6WEw0hlqGekNIc')
    }, [])

    const [loading, setLoading] = useState(false);
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [error, setError] = useState();
    const [recaptchaToken, setRecaptchaToken] = useState('');

    const { keyboardHeight } = useKeyboard();

    useEffect(() => {
        if (isLoggedIn) {
            Utils.resetNavigation(props.navigation, 'LandingPage')
        }
        setLoading(isLoading)
    }, [isLoggedIn, isLoading])

    const onSubmit = async (data) => {
        setError(undefined)
        const payload = {
            email: data.email,
            password: data.password,
            recaptchaToken: recaptchaToken
        }
        setLoading(true);

        try {
            const data = await login(payload);
            if (data?.customerStatus !== 'cs_approved' && data?.message) {
                setError(data?.message);
            }
        } catch (error) {
            console.log('error : ', error?.response?.data?.error[0].msg);
            setError(error?.response?.data?.error[0].msg);
        } finally {
            setLoading(false);
        }
    }

    const recaptchaVerifier = React.useRef();

    useEffect(() => {
        recaptchaVerifier.current.open();
    }, []);

    const onVerify = (token) => {
        console.log("success!", token);
        setRecaptchaToken(token)
    };

    const onError = (error) => {
        console.log("error!", error);
    };

    const onExpire = () => {
        console.warn("expired!");
    };

    return (
        <SafeAreaView style={styles.container}>

            <View
                style={styles.flexS}
                enableOnAndroid={true}
                enableAutomaticScroll={Platform.OS === "ios"}
                keyboardShouldPersistTaps={"always"}
            >
                <View style={styles.logo_Container(deviceType)}>
                    <Image
                        style={styles.logoStyle(deviceType)}
                        resizeMode="contain"
                        source={CommonIcons.Logo}
                    />
                    <CustomText
                        fontFamily={'Bold'}
                        color={appColors.secondary}
                        size={28}
                        style={{ top: 5 }}
                        textAlign={'left'}
                    >
                        {i18n.t('curbside_bell_two')}
                    </CustomText>
                </View>
                <Image
                    style={deviceType === 'tablet' ? styles.tabletDotImageStyle : styles.dotImageStyle}
                    resizeMode="cover"
                    source={CommonIcons.dotBackground}
                />
                <View style={deviceType === 'tablet' ? styles.tabletViewContainer : styles.viewContainer}>
                    <KeyboardAwareScrollView ref={scrollRef}
                        style={deviceType === 'tablet' ? styles.tabletScrollStyle(keyboardHeight) : styles.scrollStyle(keyboardHeight)}
                        contentContainerStyle={{

                            alignItems: "center",
                        }}
                        keyboardShouldPersistTaps={"handled"}
                    >

                        <>
                            <Text style={styles.heading}>{i18n.t('screen_login_title')}</Text>
                            <Text style={styles.headingTwo}>{i18n.t('screen_login_detail_heading')}</Text>
                            {error && <Warnings
                                message={error}
                                icon={CommonIcons.warning}
                            />}
                            {Object.keys(formConfig).map(keyName => {
                                const fieldConfig = formConfig[keyName];
                                return (
                                    <Controller
                                        key={keyName}
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <Input
                                                value={value}
                                                placeholder={i18n.t(fieldConfig.placeHolder)}
                                                onChangeText={onChange}
                                                inputContainerStyle={appStyles.inputContainer('', errors && errors[keyName]?.type)}
                                                inputStyle={appStyles.inputTextStyle(errors && errors[keyName]?.type)}
                                                errorMessage={errors && FIELDS_TYPE.includes(errors[keyName]?.type) ? i18n.t(fieldConfig?.validationMessage[errors?.[keyName]?.type]) :
                                                    null}
                                                errorStyle={[styles.errorStyle, {
                                                    height: (errors && FIELDS_TYPE.includes(errors[keyName]?.type)) ? 'auto' : 5,
                                                }]}
                                                placeholderTextColor={(errors && errors[keyName]?.type) ? appColors.danger : appColors.placeholder}
                                                rightIcon={keyName === 'password' ?
                                                    <TouchableOpacity
                                                        onPress={() => setPasswordHidden(!passwordHidden)}
                                                        activeOpacity={0.8}>
                                                        <Image
                                                            style={{ width: 22 }}
                                                            resizeMode="contain"
                                                            source={!passwordHidden ? CommonIcons.eye_slash :
                                                                CommonIcons.eye}
                                                        /></TouchableOpacity> : null}
                                                keyboardType={fieldConfig.inputType}
                                                secureTextEntry={keyName === 'password' ? passwordHidden : false}
                                            />
                                        )}
                                        name={keyName}
                                        defaultValue=""
                                        rules={fieldConfig.rules}
                                    />
                                )
                            })}
                            <Text
                                style={styles.forgotPassword}
                                onPress={() => { }}
                            >{i18n.t('screen_login_forgotPasswordLink')}</Text>
                            <ActionButton
                                loading={loading}
                                buttonStyle={appStyles.buttonStyle(true, styles.loginButton(deviceType))}

                                onPress={handleSubmit(onSubmit)}
                                title={i18n.t('screen_login_signInLink')}
                                disabled={loading}
                                textStyle={appStyles.buttonTextStyle(true)}
                            />
                            <Text
                                style={styles.signUp}
                                onPress={() => { }}
                            >{i18n.t('screen_login_signUpDontAcc')}{' '}
                                <Text style={styles.link}>{i18n.t('screen_login_signUpLink')}</Text>
                            </Text>
                            <Text
                                style={styles.tnc}
                            >{i18n.t('screen_login_tnc')}{' '}
                                <Text style={styles.link}
                                    onPress={() => alert(1)}
                                >{i18n.t('screen_login_tnc1')}</Text>
                                {' '}{i18n.t('screen_login_tnc2')}{' '}
                                <Text style={styles.link}
                                    onPress={() => alert(2)}>{i18n.t('screen_login_tnc3')}</Text>
                            </Text>
                        </>
                    </KeyboardAwareScrollView>
                </View>
                <View>
                    <Recaptcha
                        ref={recaptchaVerifier}
                        siteKey={SITE_KEY}
                        baseUrl={baseUrl}
                        theme="light"
                        onError={onError}
                        onExpire={onExpire}
                        onVerify={onVerify}
                        size="invisible"
                    />
                </View>
            </View>
        </SafeAreaView >
    )


};

export default LoginScreen;
