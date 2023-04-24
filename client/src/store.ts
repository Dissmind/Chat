import {configureStore} from "@reduxjs/toolkit"
import {rootReducer} from "./rootReducer"

export const setupStore = () => configureStore({
    reducer: rootReducer,

    // middleware: () => [],
})

export type TRootState = ReturnType<typeof rootReducer>
export type TStore = ReturnType<typeof setupStore>
export type TDispatch = TStore['dispatch']