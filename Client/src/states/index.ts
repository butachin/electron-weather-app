import { ICityNameState } from './CityNameState';
import IScreenState from './ScreenState';

export default interface IRootState {
    cityNameState: ICityNameState;
    screenState: IScreenState;
}