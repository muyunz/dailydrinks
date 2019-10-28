import * as TYPES from '@/redux/types'
import uuid from 'uuid/v4';

// state
let defaultState = {
  orders: {
    byId: {},
    allIds: []
  },
  editOrderId: null,
  filter: {
    type: 'all',
    keyword: ""
  }
}

// reducer
export const OrderReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.ADD_ORDER: {
      const { order } = payload;
      return {
        ...state,
        orders: {
          allIds: [
            ...state.orders.allIds,
            order.id
          ],
          byId: {
            ...state.orders.byId,
            [order.id]: order
          }
        },
      }
    }
    case TYPES.DELETE_ORDER: {
      const { id: deleteId } = payload;
      const orderByIds = {
        ...state.orders.byId
      }
      delete orderByIds[deleteId]

      return {
        ...state,
        orders: {
          allIds: state.orders.allIds.filter(id => id !== deleteId),
          byId: orderByIds
        } 
      }
    }
    case TYPES.EDIT_ORDER: {
      const id = payload
      return {
        ...state,
        editOrderId: id
      }
    }
    case TYPES.UPDATE_ORDER:
      const { id, patchOrder } = payload;
      return {
        ...state,
        orders: {
          ...state.orders,
          byId: {
            ...state.orders.byId,
            [id]: {
              ...state.orders.byId[id],
              ...patchOrder
            }
          }
        }
      }
    case TYPES.CHANGE_ORDER_LIST_TAB:
      const { tab } = payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          type: tab
        }
      }
    default:
      return state
  }
}

export default OrderReducer