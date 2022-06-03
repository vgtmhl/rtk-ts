import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

/**
 * Infer the `RootState` and `AppDispatch` types from the store itself.
 * You can now reference these types throughout your application to keep TS happy.
 */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
