import { useContext,createContext } from "react";

export const todoContext = createContext({
    todos : [],
    addTodo : (tasktodo) => {},
    editTodo : (id,tasktodo) => {},
    deleteTodo : (id) => {},
    toggleCompleted : (id) => {}

});

export const TodoContextProvider = todoContext.Provider

export const useTodo = ()=> {
    return useContext(todoContext);
}