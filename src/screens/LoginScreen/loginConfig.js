const getLoginConfig = () => {

    const loginConfig = {
        email: {
            keyName: 'email',
            inputType: 'email-address',
            index: 0,
            rules: {
                required: true,
                // pattern: new RegExp(/^[\w._%+-]{1,64}@(?:[\w-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/)
            },
            validationMessage: {
                required: 'components_emailInput_errorMsg1',
                pattern: 'components_emailInput_errorMsg2'
            },
            placeHolder: 'screen_login_email_placeholder',
            icon: 'email',
            iconType: 'material-community'
        },
        password: {
            keyName: 'password',
            inputType: 'default',
            index: 1,
            rules: {
                required: true,
            },
            validationMessage: {
                required: 'components_passwordInput_errorMsg',
            },
            placeHolder: 'screen_login_password_placeholder',
            icon: 'lock',
            iconType: 'material-community'
        }
    }

    return loginConfig;
}

export default getLoginConfig;