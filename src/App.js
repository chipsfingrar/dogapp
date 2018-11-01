import React, {Component} from 'react';
import Dog from "./Dog";
import {fetchBreeds} from "./Services";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }
/*
    static mapDogs(response) {
        return Object.entries(response).reduce(function (acc, value) {
            const breed = value[0];
            const subBreeds = value[1];
            if (subBreeds && subBreeds.length > 0) {
                for (let subBreed of subBreeds) {
                    acc.push({breed, subBreed})
                }
            } else {
                acc.push({breed});
            }
            return acc;
        }, []);
    }*/

    async componentDidMount() {
        let breeds = await fetchBreeds();
        this.setState({
            breeds: breeds,
            isLoaded: true
        })
    }

    render() {
        if (!this.state.isLoaded) {
            return (<p>Loading..</p>);
        } else {
            return <div style={{width: '200px'}}>
                {this.state.breeds.map((dog) => {
                    const {breed, subBreed} = dog;
                    return <Dog
                        key={dog.breed + '-' + dog.subBreed}
                        breed={breed}
                        subBreed={subBreed}
                    />
                })}
            </div>
        }
    }
}
