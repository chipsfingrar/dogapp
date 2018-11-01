import {fetchBreeds, fetchDogImage, fetchRandomText} from "../Services";
import {fetchMock} from 'fetch-mock'

describe('testing api', () => {
    beforeEach(() => {
        fetchMock.reset();
    });

    it('calls Breeds API and parses data correctly', async () => {
        const breedsResponse = {
            "status": "success",
            "message": {
                "boxer": [],
                "bulldog": ["boston", "french"]
            }
        };

        const expectedBreeds = [
            {breed: "boxer"},
            {breed: "bulldog", subBreed: "boston"},
            {breed: "bulldog", subBreed: "french"}
        ];

        fetchMock.get('*', breedsResponse);

        const breeds = await fetchBreeds();
        expect(fetchMock.called("https://dog.ceo/api/breeds/list/all")).toBeTruthy();
        expect(breeds === expectedBreeds);
    });

    it('calls image api with only breed', async () => {
        fetchMock.get('*', {});

        await fetchDogImage('boxer');
        expect(fetchMock.called("https://dog.ceo/api/breed/boxer/images/random")).toBeTruthy();
    });

    it('calls image api with subBreed', async () => {
        fetchMock.get('*', {});

        await fetchDogImage('bulldog', 'boston');
        expect(fetchMock.called("https://dog.ceo/api/breed/bulldog/boston/images/random")).toBeTruthy();
    });

    it('fetches random text', async () => {
        fetchMock.get('*', {});

        await fetchRandomText();
        expect(fetchMock.called("begin:https://baconipsum.com/api/")).toBeTruthy();
    });

});