import IScreenState, { ScreenType } from 'src/states/ScreenState';
import ScreenAction from 'src/actions/ScreenStateAction/ScreenAction';
import ScreenActionType from 'src/actions/ScreenStateAction/ScreenActionType';

const initialState: IScreenState = {
    screenType: ScreenType.SEARCH_SCREEN
}

const screenState = (state: IScreenState = initialState, action: ScreenAction): IScreenState => {
  switch (action.type) {
    case ScreenActionType.SEARCH_SCREEN:
      return {
          ...state,
          screenType: ScreenType.SEARCH_SCREEN
      };
    case ScreenActionType.RESULT_SCREEN:
      return {
          ...state,
          screenType: ScreenType.RESULT_SCREEN
      };
    default:
      return initialState;
  }
};

export default screenState;
