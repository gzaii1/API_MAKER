export function HomeReducer(state = {}, action){
    switch (action.type){
        case 'CreateUser':
            const user = action.user
            return {
                ...state,
                user
            }
        default:
            return state;
    }
}