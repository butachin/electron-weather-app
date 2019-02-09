import  SearchAction  from './CityNameAction';
import CityNameActionType from './CityNameActionType';

export const search = (cityName: string): SearchAction => {
    return {
        type: CityNameActionType.SEARCH,
        cityName
    };
};