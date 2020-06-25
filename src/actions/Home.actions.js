export const HomeActions = {
    createUser
}

function createUser(args){
    let user = {}
    if(Object.prototype.toString.call(args) === '[object Object]')
    user = args
    return {
        type:'CreateUser',
        user
    }
}