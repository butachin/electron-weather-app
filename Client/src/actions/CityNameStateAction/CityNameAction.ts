import CityNameActionType from './CityNameActionType';

export default interface ISearchAction {
    type: CityNameActionType.SEARCH,
    cityName: string
}