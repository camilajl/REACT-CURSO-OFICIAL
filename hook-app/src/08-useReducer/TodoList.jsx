import PropTypes from 'prop-types'  
import { TodoItem } from './TodoItem'

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
    
  return (
    <>
    <ul className="list-group">
    {todos.map(todo => (
      <TodoItem key={todo.id}  todo={todo}  onDeleteTodo={ onDeleteTodo}  onToggleTodo={onToggleTodo}/>
))}
    </ul>
    </>
  )
}

TodoList.propTypes = {  
    todos : PropTypes.any,  
    onDeleteTodo : PropTypes.any,  
    onToggleTodo: PropTypes.any,  
 }  