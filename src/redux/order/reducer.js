import * as TYPES from '@/redux/types'

// state
let defaultState = {
  orderIds: [],
  orders: {}
}

// reducer
export const OrderReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.ORDER_ADD: {
      const { order } = payload;
      return {
        ...state,
        orderIds: [
          ...state.orderIds,
          order.id
        ],
        orders: {
          ...state.orders,
          [order.id]: order
        }
      }
    }
    case TYPES.ORDER_DELETE: {
      const { deleteId } = payload;
      return {
        ...state,
        orderIds: state.orderIds.filter(id => id !== deleteId)
      }
    }
    case TYPES.ORDER_UPDATE:
      const { id, patchOrder } = payload;
      return {
        ...state,
        orders: {
          ...state.orders,
          [id]: {
            ...state.orders[id],
            ...patchOrder
          }
        }
      }
    default:
      return state
  }
}

export default OrderReducer