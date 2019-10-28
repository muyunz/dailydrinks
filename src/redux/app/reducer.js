import * as TYPES from '@/redux/types'

// state
let defaultState = {
  addDrawer: {
    open: false
  }
}

// reducer
export const AppReducer = (state = defaultState, action) => {
  const { type } = action;
  switch (type) {
    case TYPES.OPEN_ADD_DRAWER: {
      return {
        ...state,
        addDrawer: {
          open: true
        }
      }
    }
    case TYPES.CLOSE_ADD_DRAWER: {
      return {
        ...state,
        addDrawer: {
          open: false
        }
      }
    }
    default:
      return state
  }
}

export default AppReducer