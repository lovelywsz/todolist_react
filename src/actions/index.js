let nextTodoId = 0;
//{ text }是{ text: text}的简写语法，这是在ES6之后可以用的对象属性初始化简写语法

export const addTodo = (text) => {
	return {
		type:"ADD_TODO",
		id:nextTodoId++,
		text
	}
}

export const setVisibility = (filter) => {
	return{
		type:'SET_VISIBILITY',
		filter
	}
}

export const toggleTodo = (id) => {
	return{
		type:'TOGGLE_TODO',
		id
	}
}