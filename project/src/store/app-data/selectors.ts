import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectFilms = (state: State) => state[NameSpace.AppData].films;
export const selectDataLoadingStatus = (state: State) => state[NameSpace.AppData].isDataLoading;
export const selectGenre = (state: State) => state[NameSpace.AppData].genre;
export const selectRenderedFilmsCount = (state: State) => state[NameSpace.AppData].renderedFilmsCount;
