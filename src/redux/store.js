import {configureStore} from "@reduxjs/toolkit"
import repasReducer from "./slice/repasSlice"

export const store = configureStore({
    reducer: {
        repas : repasReducer,
        }
    })