export enum ScreenType {
    SEARCH_SCREEN = "SEARCH_SCREEN",
    RESULT_SCREEN = "RESULT_SCREEN"
  }
  
  export interface IScreenState {
    screenType: ScreenType;
  }
  
  export default IScreenState;