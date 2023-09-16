console.log('holamundo', )

const initialState = [{
    id:1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

// Funcion reducer que recibe un state y una accion y retorna un nuevo state

const todoReducer = ( state=initialState, action = {} ) => {

    if (action?.type === '[TODO] add todo' ){
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

// para modificar el reducer se le envia una funcion que le dice que hacer

const newTodo = {
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction );

console.log('todos', {state:todos})

