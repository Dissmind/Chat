import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TRootState} from "../store";



export enum ChatMode {
    All,
    Dialog,
    Group
}

type TChatState = {
    chatMode: ChatMode,

    dialogsUserId: null | number
}

const initialState = {
    chatMode: ChatMode.All,

    dialogsUserId: null
}


// Payload interfaces
export interface SetChatModePayload {
    chatMode: ChatMode
}

export interface SetDialogsUserIdPayload {
    id: number
}


export const chatSlice = createSlice({
    name: 'testSlice',

    initialState,

    reducers: {
        setChatMode: (state: TChatState, {payload}: PayloadAction<SetChatModePayload>) => {
            state.chatMode = payload.chatMode
        },

        setDialogsUserId: (state: TChatState, {payload}: PayloadAction<SetDialogsUserIdPayload>) => {
            state.chatMode = ChatMode.Dialog

            state.dialogsUserId = payload.id
        }
    }
})


// Actions
export const {
    setChatMode,
    setDialogsUserId
} = chatSlice.actions


// Selectors
export const chatModeSelector = (state: TRootState) => state.chat.chatMode
export const dialogsUserIdSelector = (state: TRootState) => state.chat.dialogsUserId



export const chatReducer = chatSlice.reducer