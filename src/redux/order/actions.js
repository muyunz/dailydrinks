import * as TYPES from '@/redux/types';

export const addOrder = (order) => dispatch => dispatch({
  type: TYPES.ORDER_ADD,
  payload: {
    order
  }
})

export const deleteOrder = (id) => dispatch => dispatch({
  type: TYPES.ORDER_DELETE,
  payload: {
    id
  }
})

export const updateOrder = (id, patchOrder) => dispatch => dispatch({
  type: TYPES.ORDER_UPDATE,
  payload: {
    id,
    patchOrder
  }
})