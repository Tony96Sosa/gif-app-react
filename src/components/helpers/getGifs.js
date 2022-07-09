const api_key = 'MkotoGSfoi0B9GJp2mPEKwtvHMKc9J6n';
const urlSearch = 'https://api.giphy.com/v1/gifs/search';

export const getGifs = async(category) => {
    const url = `${urlSearch}?api_key=${api_key}&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    return gifs;
};
