import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    count: number,
}

const initialState: CounterState = {
    count: 0
}

/**
 * My slice has a name, an initial state, and a set of actions to interact with the slice.
 */
export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    /**
     * Each "case reducer" is equivalent to a single switch state case in the "old redux" way.
     * 
     * Note that I can write mutating logic here! This is because Immer, under the hood, 
     * converts this into non-mutating logic.
     * 
     * The keys in the object will be used to generate string action type constants, 
     * and these will show up in the Redux DevTools Extension when they are dispatched
     */
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        reset: (state) => { state.count = 0 },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }
    }
})

/**
 * I export my actions, as well as my reducer. 
 * CreateSlice automatically generates action creators and action types that correspond to the reducers and state
 */
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer;


/**
 * createSlice will return an object that looks like:
 * 
 * {
 *   name: string,
 *   reducer: ReducerFunction,
 *   actions: Record<string, ActionCreator>,
 *   caseReducers: Record<string, CaseReducer>,
 *   getInitialState: () => state
 * }
 */