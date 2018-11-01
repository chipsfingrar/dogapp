export const makeApiCall = async (url) => {
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