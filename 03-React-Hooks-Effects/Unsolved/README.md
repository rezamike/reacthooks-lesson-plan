# Effect Hooks

## Instructions

### Setup

Let's continue to work on the same folder with our initial application from the last activity, so we don't have to reinstall all our modules over again.

### Assignment Prep

Now let's look at how Effect Hooks work in our applications. We'll just be going over a smidgen of the extent that Effect Hooks could consolidate and make more efficient your applications, but you should have a good understanding of its fullest capabilities.

* With a partner, do some research to see what the full extent of utilization there is for Effect Hooks. Here are some questions you can use as reference to help you sift through what's important here:

  1. How does `useEffect` compare with current lifecycle events (ex. `componentDidMount`)?

  2. How would you fetch data inside `useEffect`? What are other Hook-based functions that can be used to help?

  3. What are the two most common side effects that Effect Hooks help to consolidate?
  
### Assignment

In your `App.js` from the last activity, let's add a simple Effect Hook. Your Effect Hook should accomplish the following goal:

  * In the title of the DOM, you should reflect the amount of tasks (todos) you have - it needs to be dynamic, showing the side effects of the changes being made on the DOM.
    - ex. `You have 5 tasks!`
  
### Bonus

If you're hoping for more of a challenge:

  * Have the application track the tasks you actually have left, based on if you've checked some of them off or not.
