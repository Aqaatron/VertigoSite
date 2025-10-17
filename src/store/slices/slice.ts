import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface CounterState {
    isAuthed: string | null,
    chat: Object,
    roles: number[],
    premium: Boolean,
    balance: number,
    pic: string,
    scroll: number,
    showGal: Boolean
}

const initialState: CounterState = {
    isAuthed: '',
    chat: {dialogId: '', avatar: ''},
    roles: [],
    premium: false,
    balance: 0,
    scroll: 0,
    pic: 'pic1',
    showGal: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setAuthed: (state, action: PayloadAction<string>) => {
            state.isAuthed = action.payload
        },
        setChat: (state, action: PayloadAction<Object>) => {
            state.chat = action.payload
        },
        setRoles: (state, action: PayloadAction<number[]>) => {
            state.roles = action.payload
        },
        setPremium: (state, action: PayloadAction<boolean>) => {
            state.premium = action.payload
        },
        setBalance: (state, action: PayloadAction<number>) => {
            state.balance = action.payload
        },
        setScroll: (state, action: PayloadAction<number>) => {
            state.scroll = action.payload
        },
        setPic: (state, action: PayloadAction<string>) => {
            state.pic = action.payload
        },
        setShowGal: (state, action: PayloadAction<boolean>) => {
            state.showGal = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setAuthed,
    setChat,
    setRoles,
    setPremium,
    setBalance,
    setPic,
    setScroll,
    setShowGal
} = counterSlice.actions

export default counterSlice.reducer