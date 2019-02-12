import * as React from "react";
import SearchCityNameProps from './SearchCityNameProps';
import SearchCityNameState from './SearchCityNameState';
import { Jumbotron, FormControl, ControlLabel, Button } from 'react-bootstrap';
import "../../css/SearchCityName.css";

export class SearchCityName extends React.Component<SearchCityNameProps, SearchCityNameState> {
    constructor(props: SearchCityNameProps) { 
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
                    <ControlLabel className="Label" style={{display:'block'}}>調べたい市</ControlLabel>
                    <FormControl 
                        className="Form" 
                        style={{display:'block'}}
                        type="text" 
                        onChange={this.handleCityNameChange} 
                        value={this.state.cityName} 
                        placeholder="調べたい市を入力してください" 
                        bsSize="large"
                    />
                    <Button className="Button" bsStyle="primary" type="submit" style={{display:'block'}}>検索</Button>
                </form>
            </div>
        );
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const { search, switchResultScreen } = this.props;
        const { cityName } = this.state;

        e.preventDefault();
        if (!cityName.trim()) {
            return;
        }

        search(cityName);

        switchResultScreen();

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