import uuid from 'uuid/v4';

export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {
                id: uuid(),
                label: action.task.label,
                done: false,
                fav: false
            }];

        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.id);

        case 'CHECK_TASK':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        done: !task.done,
                    };
                }
                return task;
            });

        default:
            return state;
    }
}