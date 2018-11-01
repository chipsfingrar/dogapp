const makeApiCall = async (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(
            (response) => {
                return response
            },
            (error) => {
                console.log(`An error occurred while fetching data: ${error}`)
            }
        );
};

export const fetchBreeds = async () => {
    let data = await makeApiCall("https://dog.ceo/api/breeds/list/all");
    return mapDogs(data.message);
};

const mapDogs = (response) => {
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
};

export const fetchDogImage = async (breed, subBreed) => {
    const url = `https://dog.ceo/api/breed/${breed}/${subBreed != null ? subBreed + '/' : ''}images/random`;
    return fetch(url)
        .then(response => response.json())
        .then(
            (response) => {
                return response.message
            },
            (error) => {
                console.log(`An error occurred while fetching image: ${error}`)
            }
        );
};

export const fetchRandomText = async () => {
    return makeApiCall("https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1");
};