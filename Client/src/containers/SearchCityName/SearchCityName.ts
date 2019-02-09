import { Dispatch } from "redux";
import  CityNameAction  from 'src/actions/CityNameStateAction/CityNameAction';
import { ISearchCityNameProps } from 'src/components/SearchCityName/SearchCityNameProps';
import { search } from 'src/actions/CityNameStateAction/CityNameActionCreater';
import { connect } from 'react-redux';
import { SearchCityName } from 'src/components/SearchCityName/SearchCityName';

const mapDispatchToProps = (dispatch: Dispatch<CityNameAction>): ISearchCityNameProps => {
    return {
        search: (cityName: string) => {
            dispatch(search(cityName));
        }
    };
};

export default connect (
    null, mapDispatchToProps
)(SearchCityName);