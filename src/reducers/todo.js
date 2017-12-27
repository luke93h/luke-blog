function todoApp(state = {}, action) {
    switch (action.type) {
    case 'ADD_TODO':
        return Object.assign({}, state, {
            todos: [
                ...state.todos,
                {
                    text: action.text,
                    completed: false
                }
            ]
        })
    default:
        return state
    }
}
module.exports.todo = todoApp