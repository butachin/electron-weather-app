import CityNameActionType from './CityNameActionType';

export interface ISearchAction {
    type: CityNameActionType.SEARCH,
    cityName: string
}