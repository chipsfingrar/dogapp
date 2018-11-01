import React, {Component} from 'react';
import {fetchDogImage, fetchRandomText} from "./Services";

export default class Dog extends Component {
    constructor() {
        super();
        this.state = {image: 'loader.gif'};
    }

    async componentDidMount() {
        this.setState({
            image: await fetchDogImage(this.props.breed, this.props.subBreed),
            text: await fetchRandomText()
        });
    }

    render() {
        const {breed, subBreed} = this.props;
        return (
            <div>
                <div>
                    <span data-testid="breed">{breed}</span>
                    {subBreed &&
                    <span data-testid="subBreed"> - {subBreed}</span>
                    }
                </div>
                <div>
                    <img data-testid="image" src={this.state.image} alt={'image of' + breed}
                         style={{width: '100%', height: 'auto'}}/>
                </div>
                <div>
                    <p data-testid="text">{this.state.text}</p>
                </div>
            </div>
        );
    }
}