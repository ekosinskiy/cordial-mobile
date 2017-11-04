import createReducer from './createReducer';
import * as types from '../Actions/types';

export const loginRecipes = createReducer({}, {
    [types.SET_LOGIN](state, action) {
        return action.user;
    }
});

export const dashboardRecipe = createReducer({}, {
    [types.SET_DASHBOARD](state, action){
        return action.dashboard;
    }
});

export const serverRecipe = createReducer({}, {
    [types.SET_SERVER_NAME](state, action) {
        if(action.server!=='local' && action.server!=='production') {
            return action.server+types.serverList.dev;
        }
        return types.serverList[action.server];
    }
});

export const loginFormRecipe = createReducer({}, {
    [types.SET_LOGIN_FORM](state, action) {
        return action.loginForm;
    }
});