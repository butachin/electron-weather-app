import { Dispatch } from "redux";
import  CityNameAction  from 'src/actions/CityNameStateAction/CityNameAction';
import { ISearchCityNameProps } from 'src/components/SearchCityName/SearchCityNameProps';
import { search } from 'src/actions/CityNameStateAction/CityNameActionCreater';
import { connect } from 'react-redux';
import { SearchCityName } from 'src/components/SearchCityName/SearchCityName';
import { switchResultScreen } from 'src/actions/ScreenStateAction/ScreenActionCreater';
import ScreenAction from 'src/actions/ScreenStateAction/ScreenAction';

const mapDispatchToProps = (dispatch: Dispatch<CityNameAction | ScreenAction>): ISearchCityNameProps => {
    return {
        search: (cityName: string) => {
            dispatch(search(cityName));
        },
        switchResultScreen: () => {
            dispatch(switchResultScreen())
        }
    };
};

export default connect (
    null, mapDispatchToProps
)(SearchCityName);