import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSucess, updateAmountSucess } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  const eventExist = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );
  if (!eventExist) {
    const response = yield call(api.get, `/event-filter/${id}`);
    const data = {
      ...response.data,
      amountPF: 1,
      amountPM: 1,
      amountCF: 1,
      amountCM: 1,
      pricePF: formatPrice(response.data.valuepistaf),
      pricePM: formatPrice(response.data.valuepistam),
      priceCF: formatPrice(response.data.valuecamarotef),
      priceCM: formatPrice(response.data.valuecamarotem),
    };
    yield put(addToCartSucess(data));
  }
}

function* updateAmount({ id, amount, name }) {
  yield put(updateAmountSucess(id, amount, name));
}
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
