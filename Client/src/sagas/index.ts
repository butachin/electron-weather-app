import { all } from 'redux-saga/effects';
import { ScreenStateSaga } from './ScreenState/ScreenStateSaga';

export default function* rootSaga() {
    yield all( [
        ...ScreenStateSaga
    ]);
}