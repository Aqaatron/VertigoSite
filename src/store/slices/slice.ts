import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface CounterState {
    pic: string,
    scroll: number,
    showGal: Boolean,
    chapter: string
}

const initialState: CounterState = {
    scroll: 0,
    pic: 'pic1',
    showGal: false,
    chapter: 'flow'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setScroll: (state, action: PayloadAction<number>) => {
            state.scroll = action.payload
        },
        setPic: (state, action: PayloadAction<string>) => {
            state.pic = action.payload
        },
        setShowGal: (state, action: PayloadAction<boolean>) => {
            state.showGal = action.payload
        },
        setChapter: (state, action: PayloadAction<string>) => {
            state.chapter = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setPic,
    setScroll,
    setShowGal,
    setChapter
} = counterSlice.actions

export default counterSlice.reducer