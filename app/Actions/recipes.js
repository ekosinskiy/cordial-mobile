import * as types from './types';

export function setLogin({user}) {
    return {
        type: types.SET_LOGIN,
        user
    }
}

export function setDashboard({dashboard}) {
    return {
        type: types.SET_DASHBOARD,
        dashboard
    }
}

export function logout() {
    return (dispatch, getState) => {
        fetch('https://ekosinskiy.admin.dev.cordial.io/api/users/logout', {
            method: 'POST',
            headers: types.HEADERS
        }).then((response) => {
            dispatch(setLogin({user:{}}));
            dispatch(setDashboard({dashboard:{}}));
        });
    };
}

export function getDashboard() {
    return (dispatch, getState) => {
        fetch('https://ekosinskiy.admin.dev.cordial.io/api/dashboard', {
            method: 'GET',
            headers: types.HEADERS
        }).then((resposne) => resposne.json()).then((responseJson) => {
            dispatch(setDashboard({dashboard:responseJson}));
        });
    };
}

export function getAccountList() {
    return (dispatch, getState) => {
        // https://ekosinskiy.admin.dev.cordial.io/api/userroles
    };
}

export function getAccountInfo() {
    return (dispatch, getState) => {
        // https://ekosinskiy.admin.dev.cordial.io/api/accounts/11
    };
}

export function login(email, password, nextStep) {
    return (dispatch, getState) => {
        fetch('https://ekosinskiy.admin.dev.cordial.io/api/users/authorize', {
            method: 'POST',
            headers: types.HEADERS,
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((resposne) => resposne.json()).then((responseJson) => {
            dispatch(setLogin({user:responseJson}));
            nextStep();
        }).catch((err) => {
            console.log("ERROR", err);
        });
    }
}