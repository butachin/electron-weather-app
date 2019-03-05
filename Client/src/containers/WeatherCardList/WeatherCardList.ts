import IRootState from "src/states";
import WeatherCardList from 'src/components/WeatherCardList/WeatherCardList';
import { connect } from 'react-redux';
import WeatherCardListConnectedProps from 'src/components/WeatherCardList/WeatherCardListProps';


const mapStateToProps = (state: IRootState): WeatherCardListConnectedProps => {
    return {
        cityNameState: state.cityNameState
    }
}

export default connect (
    mapStateToProps, null
)(WeatherCardList);