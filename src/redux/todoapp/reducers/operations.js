/* eslint-disable array-callback-return */
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions";

const initialState = [
	{ id: 1, todo: "Sell Wardrobe" },
	{ id: 2, todo: "Learn Redux" },
	{ id: 3, todo: "Making Videos" },
	{ id: 4, todo: "Binge-watching series" },
];

export const operationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.payload];
		case REMOVE_TODO:
			const filteredTodos = state.filter((todo) => todo.id !== action.payload);
			return filteredTodos;
		case UPDATE_TODO:
			let data = action.payload;
			const updatedArray = [];
			state.map((item) => {
				if (item.id === data.id) {
					item.id = data.id;
					item.todo = data.todo;
					item.completed = data.completed;
				}
				updatedArray.push(item);
			});
			return updatedArray;
		default:
			return state;
	}
};
