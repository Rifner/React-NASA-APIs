import React from 'react';
import { apiKey } from './../../globals';

const api_url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

class MarsRover extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            rover: 'curiosity',
        };
    }

    handleAPICall(){
        fetch(api_url + this.state.rover + '/photos?sol=1000&camera=fhaz&page=1&api_key=' + apiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }

    handleRoverChange(rover){
        this.setState({
            rover: rover
        });
    }

    render(){
        return (
            <div>
                Mars Rover Component
                <button onClick={ () => this.handleAPICall() }>Get Mars Photo</button>
                <div className="rover-list">
                    <button className={ this.state.rover === 'curiosity' ? 'active m-2' : 'm-2' } onClick={ (rover) => this.handleRoverChange('curiosity') }>Curiosity</button>
                    <button className={ this.state.rover === 'opportunity' ? 'active m-2' : 'm-2' } onClick={ (rover) => this.handleRoverChange('opportunity') }>Opportunity</button>
                    <button className={ this.state.rover === 'spirit' ? 'active m-2' : 'm-2' } onClick={ (rover) => this.handleRoverChange('spirit') }>Spirit</button>
                </div>
            </div>
        );
    }
}

export default MarsRover;