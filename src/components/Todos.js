import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trashO } from "react-icons-kit/fa/trashO";
import { edit2 } from "react-icons-kit/feather/edit2";
import { removeTodo } from "../redux/todoapp/actions";

export const Todos = ({ handleEditClick, editFormVisibility }) => {
	// dispatch function to dispatch an action
	const dispatch = useDispatch();

	// getting todos from the store
	const todos = useSelector((state) => state.operationsReducer);
	return todos.map((todo) => (
		<div key={todo.id} className="todo-box">
			<div className="content">
				<p>{todo.todo}</p>
			</div>
			<div className="actions-box">
				{editFormVisibility === false && (
					<>
						<span
							onClick={() => handleEditClick(todo)}
							style={{ color: "#0e9136" }}
						>
							<Icon icon={edit2} />
						</span>
						<span
							onClick={() => dispatch(removeTodo(todo.id))}
							style={{ color: "#ff0000" }}
						>
							<Icon icon={trashO} />
						</span>
					</>
				)}
			</div>
		</div>
	));
};
