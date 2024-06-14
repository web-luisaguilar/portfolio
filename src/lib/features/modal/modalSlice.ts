import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

interface ModalState {
  open: boolean
  content: ReactNode
}
const initialState: ModalState = {
  open: false,
  content: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open
    },
    close: (state) => {
      state.open = false
    },
    setContent: (state, action: PayloadAction<ReactNode>) => {
      state.content = action.payload
    },
  },
})
export default modalSlice.reducer
export const { toggle, close, setContent } = modalSlice.actions
