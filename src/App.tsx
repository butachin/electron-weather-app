import * as React from 'react';
import './App.css';
import WeatherCardList from './components/WeatherCardList/WeatherCardList';

class App extends React.Component {
  public render() {
    return (
        <WeatherCardList/>
    );
  }
}

export default App;
