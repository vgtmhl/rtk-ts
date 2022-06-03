import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { increment, decrement, incrementByAmount, reset } from "./counterSlice"

const Counter = () => {
    // const count = useSelector((state: RootState) => state.counter.count)
    // const dispatch: AppDispatch = useDispatch()

    /** 
     * The commented approach is what is suggested for JS. For TS, we do the following:
     * For convenience, we created these 2 custom hooks to use in place of useSelector and useDispatch throughout the app.
     * 
     * now I can use useAppSelector without having to specify state:RootState and dispatch:AppDispatch each time.
     * This will also make our life easier when it comes to adding thunks.
    */
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </section>
    )

}

export default Counter