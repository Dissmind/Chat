import {combineReducers} from "redux"
import {chatReducer} from "./chat/chat.slice"

export const rootReducer = combineReducers({
    chat: chatReducer
})