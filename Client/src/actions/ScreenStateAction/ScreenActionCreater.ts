import ScreenActionType from "./ScreenActionType";
import { ISeachScreenAction, IResultScreenAction } from './ScreenAction';

export const switchSeachScreen = (): ISeachScreenAction => {
    return {
        type: ScreenActionType.SEARCH_SCREEN
    };
};

export const switchResultScreen = (): IResultScreenAction => {
    return {
        type: ScreenActionType.RESULT_SCREEN
    };
};