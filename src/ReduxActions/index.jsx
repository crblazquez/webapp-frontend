
export const handleLogout = () => ({
    type: "LOGOUT"
});

export const handleLogin = (response) => ({
    type: "LOGIN",
    api_key: response.data.api_key,
    account: response.data.account,
    calls: response.data.calls,
});

export const startAutoLogin = () => ({
    type: "START_AUTOLOGIN",
});

export const abortAutoLogin = () => ({
    type: "ABORT_AUTOLOGIN",
});

export const handleNewAccountData = (response) => ({
    type: "NEW_ACCOUNT_DATA",
    account: response.data.account,
    calls: response.data.calls,
});

export const switchLanguage = (language) => ({
    type: "SWITCH_LANGUAGE",
    language: language,
});
