
//Fetch API. Petición http.

const apiKey = '2DaMpdqGc9OgTMvSmo9Wwy08BJxP6Mf9';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//Esto se conoce como promesas en cadena.
httpCall
    .then( resp => resp.json())
    .then( ({data}) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
    .catch( console.warn );