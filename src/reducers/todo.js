//响应的抽象，是纯方法，传人旧状态和action，返回新状态
/* 传入旧的state和作用的action返回一个新state */
//纯方法
/* 一个待办项 */
const todo = (state, action) => {
	switch(action.type){
		case 'ADD_TODO':
			return {
				id:action.id,
				text:action.text,
				completed: false,
			}
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
                return state
            }
            return {...state, completed: !state.completed};
            // return Object.assign({}, state, { // 把state和completed合并成一个对象返回
            //     completed: !state.completed
            // })
		default:
			return state
	}
}
/* 全部待办项列表 */
//state(状态）一开始的值是空数组
const todos = (state= [],action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined,action)
			]
		case 'TOGGLE_TODO':
			return state.map(t=>todo(t,action))
		default:
			return state
	}
}

export default todos