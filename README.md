# Redux toolkit

Redux toolkit is the modern way to write redux logic inside your application.

Redux toolkit was released by the Redux dev team as a response to the fact that Redux has been, for the most time, a somewhat unopinionated library.

There was no "recommended" way to write Redux logic. On top of that, Redux has historically been ~~a pain in the ass~~ unpleasant to implement in an application, due to the vast amount of boilerplate code required to get it running.

Back in the day, one would have to define and initialize its store, its actions, action creators, selectors and reducers by hand. 
This was verbose and mostly overkill for smaller applications (although one might argue that Redux still is overkill for smaller applications)

With redux toolkit, most of this process is handled automatically. 
On top of that, we can now write mutable logic for the store (which is still immutable, we just act like it isn't).
And we are kind of coerced into writing our Redux logic following a recommended pattern, i.e. using Slices.

This repo contains an example of a very simple application: a Counter application, implemented using RTK and Typescript.

# Notes

Redux-toolkit (RTK) is the de facto standard paradigm to write modern Redux code.

### First steps
1. Install React-Redux and Redux-toolkit: 
`npm add @reduxjs/toolkit react-redux`
2. Create a `store.ts` file which will contain your store. 
Multiple stores are possible, but it's suggested that you only use one.
3. Import the store at the root of your application (e.g. App.tsx), and use the react-redux Provider HOC
to wrap your application with the store provider.
4. The logic is encapsulated per feature. So the next step is to create a store slice for each feature.
In our case, /feature/counter/counterSlice.tsx. Here we implement our slice.
5. The reducer from each slice will then be imported into `store.ts`.

Now our store is available throughout the application, we can access our counter store and dispatch increment
and decrement actions.

Inside my component, I can import {useSelector} and {useDispatch} from "react-redux", as well as my actions.
I can now access my state via `useSelector(state => state.count.count)`, and interact with it via 
`useDispatch(increment())` and `useDispatch(decrement())`  

### Typescript

Now, all of the above is redux-toolkit specific and works with JS, but we still need to add a couple things to make this
work with TS.

1. Install `@types/react-redux` if needed! As of `React Redux v7.2.3`, types are a dependency so that won't be needed.
2. We will need types for `state` and `dispatch`. These can be inferred (see store.ts)
3. We should also create typed hooks in `hooks.ts` for useDispatch and useSelector. These custom hooks will serve the same purpose as their "generalized" siblings, but they are injected with our application types.