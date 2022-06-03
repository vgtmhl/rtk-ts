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
