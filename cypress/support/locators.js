const locators = {
    LOGIN: {
        IPT_USERNAME: '#login_field',
        IPT_PASSWORD: '#password',
        BTN_SIGN_IN: "input[value='Sign in']",
        DIV_ERROR_MSG: '.flash-error > .container-lg'
    },
    HEADER: {
        DROPDOWN_PROFILE: '.js-feature-preview-indicator-container > .Header-link > .dropdown-caret',
        DROPDOWN_PROFILE_OPTIONS: {
            SIGN_OUT: '.logout-form'
        }
    },
    ASIDE_BAR: {
        BTN_NEW_REPOSITORY: '#dashboard-repos-container > #repos-container > .f4 > .btn'
    },
    NAV_BAR: {
        FN_FIND_LI_BY_DESCRIPTION: (description) => `[data-content='${description}']`,
    },
    FORM_NEW_REPOSITORY: {
        IPT_REPOSITORY_NAME: '#repository_name',
        IPT_DESCRIPTION: '#repository_description',
        BTN_CREATE_REPOSITORY: "button:contains('Create repository')"
    },
    FORM_DELETE_REPOSITORY: {
        STRONG_REPOSITORY_NAME: '.Box-body > :nth-child(1) > :nth-child(2)',
        IPT_REPOSITORY_NAME: '.Box-body > form > p > .form-control',
        BTN_DELETE_REPOSITORY: '.Box-body > form > .btn'
    },
    REPOSITORY_LIST: {
        FIRST_REPOSITORY_FOUNDED: '.wb-break-all > a:first'
    }
}

export default locators