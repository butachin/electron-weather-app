export interface ISearchCityNameProps {
    search: (cityName: string) => void;
    switchResultScreen: () => void;
    weatherRequest: (cityName: string) => void;
}

type SearchCityNameProps = ISearchCityNameProps;
export default SearchCityNameProps;