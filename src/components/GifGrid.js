import React, { useState, useEffect } from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';
// import { getGif } from '../helpers/getGif';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGif(category);

    // const [images, setImages] = useState([])

    // // Para que la función solo se ejecute una sola vez al renderizar el componente.
    // // Si le pusieras [category] en vez de [] lo que hace es que, cuando category cambie, es que se vuelve a ejecutar ese codigo.
    // useEffect(() => {
    //     getGif(category)
    //         .then(imgs => {
    //             setImages(imgs)
    //         });
    // }, []);


    


    return (
        <>
            <h3>{category}</h3>
            {loading?'Cargando...':'Ready to go'}
            <div className="card-grid">
            {
                images.map( img => (
                    <GifGridItem key={img.id} {...img}/>
                ))
            }
            </div>
        </>
    )
}



export default GifGrid
