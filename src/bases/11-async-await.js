
//Async - Await

// const getImgPromesa = () => 
//     new Promise ( resolve => resolve('https://safhaklagla.com') )
// getImgPromesa().then(console.log);

//Esto se ve mucho más sencillo de leer.
const getImg = async() => {
    try {
        const apiKey = '2DaMpdqGc9OgTMvSmo9Wwy08BJxP6Mf9';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );    
    } catch (error) {
        //Manejo del error
        console.error(error);
    }
}
getImg();
