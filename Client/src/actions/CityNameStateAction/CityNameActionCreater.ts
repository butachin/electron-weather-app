import { ISearchAction } from './CityNameAction';
import CityNameActionType from './CityNameActionType';

export const search = (cityName: string): ISearchAction => {
    return {
        type: CityNameActionType.SEARCH,
        cityName
    };
};