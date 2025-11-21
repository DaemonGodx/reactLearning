import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo,toggleComplete } from "../features/reducers/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [msg, setMsg] = React.useState(todo.text);
  const [isEditable, setIsEditable] = React.useState(false);
  

  return (
    <li className="mt-4 flex justify-between items-center bg-red-200 px-4 py-2 rounded">
      <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(todo.id))}
          />
      <input
        type="text"
        value={msg}
        readOnly={!isEditable}
        onChange={(e) => setMsg(e.target.value)}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
      />

      <button
        onClick={() => {
          if(todo.completed) return;
          if (isEditable) {
            dispatch(updateTodo({ id: todo.id, text: msg }));
          }
          setIsEditable(!isEditable);
        }}
        className="inline-flex w-8 h-8 rounded-lg border justify-center items-center bg-gray-50"
      >
        {isEditable ? "📁" : "✏️"}
      </button>

      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="inline-flex w-8 h-8 rounded-lg border justify-center items-center bg-gray-50"
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
