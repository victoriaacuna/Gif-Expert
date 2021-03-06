import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    // Hay que ponerle las '', sino da undefined.
    const [inputValue, setInputValue] = useState('');

    const handleInputChange= (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // Para que no se actualice al darle enter.
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
