import produce from 'immer';

const INITIAL_STATE = {
  name: null,
  cpf: null,
  id: null,
  email: null,
  type: null,
};
export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOGIN_SUCCESS': {
        draft.name = action.payload.user.name;
        draft.cpf = action.payload.user.cpf;
        draft.id = action.payload.user.id;
        draft.email = action.payload.user.email;
        draft.type = action.payload.user.type;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.name = null;
        draft.cpf = null;
        draft.id = null;
        draft.email = null;
        draft.type = null;
        break;
      }
      default:
    }
  });
}
