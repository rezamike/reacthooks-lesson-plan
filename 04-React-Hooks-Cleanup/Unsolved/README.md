# Hook Cleanup

## Instructions

### Assignment Prep

Now that we've switched over our statful components to functions that utilize `useState()`, we can finally consolidate our functions and make our Hooks global. This is something that would be extremely helpful on a bigger scale, but for our sake we'll stick with the application we've been working on.

* Take a moment to talk over with a partner how you would best consolidate these Hooks into global functions that can be used in your application
  
### Assignment

Try building two seperate functions in seperate files (ex. `formState.js` & `listState.js`), which run `useState()`. This will allow you to access multiple functions and values in the files that you call these function files in.

* While this may seem excessive for an small-scale application such as this, it will be helpful when building/expanding to a larger-scale.

### Hints

* You shouldn't be using `useState()` directly in either your `App.js` or `Form.js`.
