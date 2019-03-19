import * as React from 'react';
import SearchCityName from './SearchCityName';
import { cleanup, render, fireEvent } from 'react-testing-library';

afterEach(cleanup);

describe('SearchCityName', () => {
    describe('common', () => {
        test('市を入力して「検索」ボタンを押すとSearchCityNameが呼び出される', () => {
            const searchSpy = jest.fn();
            const switchScreenSpy = jest.fn();
            const weatherRequestSpy = jest.fn();
            const utils = render(<SearchCityName search={searchSpy} switchResultScreen={switchScreenSpy} weatherRequest={weatherRequestSpy}/>);
            const FormControl = utils.getByLabelText('cityName-input') as HTMLInputElement;
            const Button = utils.getByText('検索') as HTMLButtonElement;

            // FormControlに'Hakodate'と入力をシュミレート
            fireEvent.change(FormControl, { target: { value: 'Hakodate'} });
            // FormControlのvalueに入力した市が描画される
            expect(FormControl.value).toEqual('Hakodate');
            // 検索ボタンを押す
            fireEvent.submit(Button);
            // searchが発火する
            expect(searchSpy).toHaveBeenCalledTimes(1); // 回数1回
            expect(searchSpy).toHaveBeenCalledWith('Hakodate'); // 引数'Hakodate'
            // switchResultScreenが発火する
            expect(switchScreenSpy).toHaveBeenCalledTimes(1);
        })
    })
})