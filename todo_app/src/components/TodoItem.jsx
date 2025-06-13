import React from "react";

const TodoItem = (propes) => {
    return (
        <li className="todo-item">
            <span>
                {propes.completed ? <></> : <input type="checkbox" />}
                <span className="todo-item-text">{propes.text}</span>
            </span>
            <p>...</p>
        </li>
    );
};

export default TodoItem;