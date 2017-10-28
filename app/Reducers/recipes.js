import createReducer from './createReducer';
import * as types from '../Actions/types';

export const loginRecipes = createReducer({}, {
    [types.SET_LOGIN](state, action) {
        return action.user;
    }
});

export const dashboardRecipe = createReducer({}, {
    [types.SET_DASHBOARD](state, action){
        console.log(action);
        return action.dashboard;
    }
});


//
// export const recipeCount = createReducer(0, {
//     [types.ADD_RECIPE](state, action){
//         return state+1;
//     }
// });