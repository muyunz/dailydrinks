import * as TYPES from '@/redux/types';

export const addOrder = (order) => ({
  type: TYPES.ADD_ORDER,
  payload: {
    order
  }
})

export const deleteOrder = (id) => ({
  type: TYPES.DELETE_ORDER,
  payload: {
    id
  }
})

export const editOrder = (id) => ({
  type: TYPES.EDIT_ORDER,
  payload: id
})

export const updateOrder = (id, patchOrder) => ({
  type: TYPES.UPDATE_ORDER,
  payload: {
    id,
    patchOrder
  }
})

export const changeOrderListTab = (tab) => ({
  type: TYPES.CHANGE_ORDER_LIST_TAB,
  payload: {
    tab
  }
})