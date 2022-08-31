import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { checkAuthAction, signInAction, signOutAction } from '../api-action';

type InitialState = {
  authorizationStatus: AuthorizationStatus,
  isCredentialsSending: boolean
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isCredentialsSending: false
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(signInAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isCredentialsSending = true;
      })
      .addCase(signInAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isCredentialsSending = false;
      })
      .addCase(signInAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isCredentialsSending = false;
      })
      .addCase(signOutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
