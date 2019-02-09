import IRootState from "src/states";
import WeatherCardList, { IWeatherCardListConnectedProps } from 'src/components/WeatherCardList/WeatherCardList';
import { connect } from 'react-redux';


const mapStateToProps = (state: IRootState): IWeatherCardListConnectedProps => {
    return {
        cityNameState: state.cityNameState
    }
}

export default connect (
    mapStateToProps, null
)(WeatherCardList);