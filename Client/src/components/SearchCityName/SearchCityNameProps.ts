export interface ISearchCityNameProps {
    search: (cityName: string) => void;
    switchResultScreen: () => void;
}

type SearchCityNameProps = ISearchCityNameProps;
export default SearchCityNameProps;