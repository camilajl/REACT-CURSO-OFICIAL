
import { useState } from "react"
import PropTypes from 'prop-types'  



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('')
        
    }
  return (
    <form action="" onSubmit={onSubmit}>
           <input type="text" 
            onChange={onInputChange}
            placeholder='Buscar Gifs'
            value={inputValue} />
    </form>
 
  )
}

AddCategory.propTypes = {  
 setCategories: PropTypes.any,  
 onNewCategory:  PropTypes.any,
 
}  

