import produce from 'immer';

const INITIAL_STATE = {
  name: null,
  cpf: null,
  id: null,
};
export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOGIN_SUCCESS': {
        draft.name = action.payload.user.name;
        draft.cpf = action.payload.user.cpf;
        draft.id = action.payload.user.id;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.name = null;
        draft.cpf = null;
        draft.id = null;
        break;
      }
      default:
    }
  });
}
