import uuid from 'uuid/v4';

// Fonction utilitaire pour trier les tâches
const orderedTasks = tasks => ([
    // + En haut, les tâches non effectuées favories
    ...tasks.filter(task => !task.done && task.fav),
    // + Ensuite, les tâches non effectuées non favories
    ...tasks.filter(task => !task.done && !task.fav),
    // + Ensuite, les tâches effectuées
    ...tasks.filter(task => task.done),
  ]);

export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTasks = [...state, {
                id: uuid(),
                label: action.task.label,
                done: false,
                fav: false
            }];

            return orderedTasks(newTasks);

        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.id);

        case 'CHECK_TASK':
            const newTodo = state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        done: !task.done
                    };
                }
                return task;
            });
            return orderedTasks(newTodo);

        case 'FAVORITE_TASK':
            const newTodos = state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        fav: !task.fav,
                    };
                }
                return task;
            });
            return orderedTasks(newTodos);

        default:
            return state;
    }
}