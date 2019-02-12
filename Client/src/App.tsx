import * as React from "react";
import "./App.css";
import SearchCityName from './containers/SearchCityName/SearchCityName';
import IScreenState, { ScreenType } from './states/ScreenState';
import WeatherCardList from "./containers/WeatherCardList/WeatherCardList";

export interface IAppConnectedProps {
  screenState: IScreenState
}

class App extends React.Component<IAppConnectedProps> {
  public render() {
    const {screenState} = this.props;
    return (
      <div className="App">
        {
          screenState.screenType === ScreenType.SEARCH_SCREEN &&
          <SearchCityName /> 
        }
        {
          screenState.screenType === ScreenType.RESULT_SCREEN &&
          <WeatherCardList />
        }
      </div>
    );
  }
}

export default App;
