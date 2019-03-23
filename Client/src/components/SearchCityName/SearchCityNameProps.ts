export interface ISearchCityNameProps {
    switchResultScreen: () => void;
    weatherRequest: (cityName: string) => void;
}

type SearchCityNameProps = ISearchCityNameProps;
export default SearchCityNameProps;