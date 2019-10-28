import * as TYPES from '@/redux/types';

export const toggleAddDrawer = (open = true) => ({
  type: open ? TYPES.OPEN_ADD_DRAWER : TYPES.CLOSE_ADD_DRAWER
})
