import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif";



export const useFetchGif = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGif(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            });
    },[]); 

    return state;

}