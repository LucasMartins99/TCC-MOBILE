import immer from 'immer';

const INITIAL_STATE = {
    name: null,
    cpf: null,
};
export default function user(state = INITIAL_STATE, action){
    return produce(state, draft => {
        switch (action.type){
            case '@auth/LOGIN_SUCCESS':{
                draft.name = action.payload.id;
                draft.cpf = action.payload.cpf;
                break;
            }
            case '@auth'
        }
    })
}
