export const markAsFinished = (todo) => {
	return {
		type:"TODO_CLICKED" , 
		payload:todo
	}
};
export const addTodo = (text) => {
	return {
		type:"ADD_TODO" , 
		payload:text
	}
};
export const editTodo = (text) => {
	return {
		type:"EDIT_TODO" , 
		payload:text
	}
};
export const deleteTodo = (todo) => {
	return {
		type:"DELETE_TODO" , 
		payload:todo
	}
};