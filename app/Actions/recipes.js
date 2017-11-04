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

export function setCurrentAccount({currentAccount}) {
    return {
        type: types.SET_CURRENT_ACCOUNT,
        currentAccount
    }
}

export function setAccountList({accountList}) {
    return {
        type: types.SET_ACCOUNT_LIST,
        accountList
    }
}

export function setServer({server}) {
    return {
        type: types.SET_SERVER_NAME,
        server
    }
}

export function setLoginForm({loginForm}) {
    return {
        type: types.SET_LOGIN_FORM,
        loginForm
    }
}


export function logout() {
    return (dispatch, getState) => {
        const serverName = getState()['serverRecipe'];
        fetch('https://'+serverName+'/api/users/logout', {
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
        const serverName = getState()['serverRecipe'];
        fetch('https://'+serverName+'/api/dashboard', {
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
        //console.log(getState())
        // https://ekosinskiy.admin.dev.cordial.io/api/accounts/11
    };
}

export function login(server, email, password, nextStep) {
    return (dispatch, getState) => {
        dispatch(setServer({server:server}));
        const serverName = getState()['serverRecipe'];

        fetch('https://'+serverName+'/api/users/authorize', {
            method: 'POST',
            headers: types.HEADERS,
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((resposne) => resposne.json()).then((responseJson) => {
            dispatch(setLoginForm({loginForm:{
                serverName: server,
                email: email
            }}));
            dispatch(setLogin({user:responseJson}));
            nextStep();
        }).catch((err) => {
            alert("Host:"+serverName+"\n"+err);
        });
    }
}