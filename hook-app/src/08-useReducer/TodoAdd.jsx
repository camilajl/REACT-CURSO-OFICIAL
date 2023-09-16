import { useForm } from "../hooks/useForm"
import PropTypes from 'prop-types'  

export const TodoAdd = ({onNewTodo}) => {

    const {onInputChange, description, onResetForm} = useForm({        
        description: '',       
      })

   

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime() * 3,
            description: description,
            done: false,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

  return (
    <> 
        <form onSubmit={onFormSubmit}  >
        <input type="text" placeholder="¿Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
        
        />

        <button type="submit"
        className="btn btn-outline-primary mt-1">
        agregar
        </button>
    </form>
    </>
  )
}


TodoAdd.propTypes = {  
   onNewTodo: PropTypes.any,  
    
}  
   