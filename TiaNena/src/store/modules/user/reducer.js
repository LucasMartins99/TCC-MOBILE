import produce from 'immer';

const INITIAL_STATE = {
  name: null,
  cpf: null,
};
export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOGIN_SUCCESS': {
        draft.name = action.payload.user.name;
        draft.cpf = action.payload.user.cpf;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.name = null;
        draft.cpf = null;
        break;
      }
      default:
    }
  });
}
