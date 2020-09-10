const locators = {
    HEADER: {
        DROPDOWN_PROFILE: '.js-feature-preview-indicator-container > .Header-link > .dropdown-caret',
        DROPDOWN_PROFILE_OPTIONS: {
            SIGN_OUT: '.logout-form'
        }
    },
    LOGIN: {
        IPT_USERNAME: '#login_field',
        IPT_PASSWORD: '#password',
        BTN_SIGN_IN: "input[value='Sign in']",
        DIV_ERROR_MSG: '.flash-error > .container-lg'
    }
}

export default locators