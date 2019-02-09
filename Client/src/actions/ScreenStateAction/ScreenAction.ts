import ScreenActionType from "./ScreenActionType";

export interface ISeachScreenAction {
    type: ScreenActionType.SEARCH_SCREEN;
}

export interface IResultScreenAction {
    type: ScreenActionType.RESULT_SCREEN;
}

type ScreenAction = ISeachScreenAction | IResultScreenAction;

export default ScreenAction;