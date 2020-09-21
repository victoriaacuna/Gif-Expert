import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Dragon']);

    // const handleAddCategory = () => {
    //     setCategories([...categories, 'nueva categoria']);
    //     // setCategories( categories => {
    //     //     return [...categories, 'nueva cat']
    //     // })
    // }


    // El key no debe ser el indice.
    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr/>
            
            <ol>
                
                {categories.map(category => {
                    return (
                        <GifGrid key={category} category={category}/>
                    )
                })}
            </ol>
        </div>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp
