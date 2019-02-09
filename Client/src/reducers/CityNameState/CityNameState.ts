import { ICityNameState } from "src/states/CityNameState";
import SearchAction from 'src/actions/CityNameStateAction/CityNameAction';
import CityNameActionType from 'src/actions/CityNameStateAction/CityNameActionType';

const initialState: ICityNameState = {
    cityName: ""
}

const cityNameState = (state: ICityNameState = initialState, action: SearchAction): ICityNameState => {
    switch(action.type) {
        case CityNameActionType.SEARCH:
            return {
                ...state,
                cityName: action.cityName
            };
        default:
            return state;
    }
}

export default cityNameState;