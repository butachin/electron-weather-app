import * as React from "react";
import { ISearchCityNameProps } from './SearchCityNameProps';
import { ISearchCityNameState } from './SearchCityNameState';
import { Jumbotron, FormControl, ControlLabel, Button } from 'react-bootstrap';


export class SearchCityName extends React.Component<ISearchCityNameProps, ISearchCityNameState> {
    constructor(props: ISearchCityNameProps) { 
        super(props);
        this.state = {
            cityName: ""
        };
    }

    public render() {
        return (
            <div>
                <Jumbotron>
                    <h1>お天気アプリ</h1>
                </Jumbotron>
                <form onSubmit={this.handleSubmit}>
                <ControlLabel className="Label">調べたい市</ControlLabel>
                <FormControl 
                    className = "Form" 
                    type = "text" 
                    onChange = {this.handleCityNameChange} 
                    value = {this.state.cityName} 
                    placeholder = "調べたい市を入力してください" 
                    bsSize = "large"
                />
                <Button className="Button" bsStyle="primary" type="submit">検索</Button>
                </form>
            </div>
        )
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const { search } = this.props;
        const { cityName } = this.state;

        e.preventDefault();
        if (!cityName.trim()) {
            return;
        }

        search(cityName);

        this.setState({
            cityName:""
        });
    };

    private handleCityNameChange = (e: React.ChangeEvent<FormControl & HTMLInputElement>) => {
        this.setState ({
            cityName: e.currentTarget.value
        });
    };
}