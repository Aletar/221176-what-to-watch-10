import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const selectError = (state: State) => state[NameSpace.User].error;
