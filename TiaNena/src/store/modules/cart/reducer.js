import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCESS':
      return produce(state, (draft) => {
        const { event } = action;
        draft.push(event);
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const eventIndex = draft.findIndex((p) => p.id === action.id);
        if (eventIndex >= 0) {
          draft.splice(eventIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCESS': {
      return produce(state, (draft) => {
        const eventIndex = draft.findIndex((p) => p.id === action.id);
        if (action.name === 'Pista Masculino') {
          draft[eventIndex].amountPM = Number(action.amount);
        }
        if (action.name === 'Pista Feminino') {
          draft[eventIndex].amountPF = Number(action.amount);
        }
        if (action.name === 'Camarote Masculino') {
          draft[eventIndex].amountCM = Number(action.amount);
        }
        if (action.name === 'Camarote Feminino') {
          draft[eventIndex].amountCF = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
