
export const getGif = async(category) => {

    // El encodeURI es para quitar los espacios en blanco.
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HwwZc4GhpzsLjIaqOMnNV2YhtJde4U8K&q=${encodeURI(category)}&limit=10`;
    const response = await fetch(url);
    const {data} = await response.json();
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs; 

}