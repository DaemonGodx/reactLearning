import React from "react";
import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [
        { id:1,
            todo: "Sample Todo",
            isCompleted: false,
        }
    ],
});

export const useTodoContext = () => {  return useContext(TodoContext);}
export const TodoProvider = TodoContext.Provider;