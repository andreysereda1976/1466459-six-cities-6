import {loadFavorite, requireAuthorization} from '../action';
import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  favorite: [],
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload.status;
    state.login = action.payload.login;
  });
  builder.addCase(loadFavorite, (state, action) => {
    state.favorite = action.payload;
  })
});

// const user = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionType.REQUIRED_AUTHORIZATION:
//       return {
//         ...state,
//         authorizationStatus: action.payload.status,
//         login: action.payload.login
//       };
//     case ActionType.LOAD_FAVORITE:
//       return {
//         ...state,
//         favorite: action.payload
//       };
//   }

//   return state;
// };

export {user};
