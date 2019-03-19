import { Dispatch } from "redux";
import  CityNameAction  from 'src/actions/CityNameStateAction/CityNameAction';
import { ISearchCityNameProps } from 'src/components/SearchCityName/SearchCityNameProps';
import { search } from 'src/actions/CityNameStateAction/CityNameActionCreater';
import { connect } from 'react-redux';
import { switchResultScreen } from 'src/actions/ScreenStateAction/ScreenActionCreater';
import ScreenAction from 'src/actions/ScreenStateAction/ScreenAction';
import SearchCityName from 'src/components/SearchCityName/SearchCityName';
import WeatherAction from 'src/actions/WeatherAction/WeatherAction';
import { weatherRequest } from 'src/actions/WeatherAction/WeatherActionCreator';

const mapDispatchToProps = (dispatch: Dispatch<CityNameAction | ScreenAction | WeatherAction>): ISearchCityNameProps => {
    return {
        search: (cityName: string) => {
            dispatch(search(cityName));
        },
        switchResultScreen: () => {
            dispatch(switchResultScreen())
        },
        weatherRequest: (cityName: string) => {
            dispatch(weatherRequest(cityName))
        }
    };
};

export default connect (
    null, mapDispatchToProps
)(SearchCityName);