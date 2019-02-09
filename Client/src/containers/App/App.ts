import IRootState from 'src/states';
import { connect } from 'react-redux';
import App, { IAppConnectedProps } from 'src/App';

const mapStateToProps = (state: IRootState): IAppConnectedProps => {
    return {
        screenState: state.screenState
    };
};

export default connect(
    mapStateToProps, null
)(App);