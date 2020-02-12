# Hook Cleanup

## Instructions

### Assignment Prep

So since we've been mostly exploring the usefulness of State Hooks, we can take a look at how Effect Hooks work in our applications. We'll just be going over a smidgen of the extent that Effect Hooks could consolidate and make more efficient your applications, but you should have a good understanding of its fullest capabilities - it'll help set you apart from competition when looking for the job of your dreams!

* With a partner, why don't you do some research to see what the full extent of utilization there is for Effect Hooks. Here are some questions you can use as reference to help you sift through what's important here:

  1. How does `useEffect` compare with current lifecycle events (ex. `componentDidMount`)?

  2. How would you fetch data inside `useEffect`? What are other Hook-based functions that can be used to help?

  3. What are the two most common side effects that Effect Hooks help to consolidate?
  
### Assignment

In your `App.js` from the last activity, let's go ahead and add a simple Effect Hook. Your Effect Hook should accomplish the following goal:

  * In the title of the DOM, you should reflect the amount of tasks (todos) you have - it needs to be dynamic, showing the side effects of the changes being made on the DOM.
    - ex. `You have 5 tasks!`
  
### Bonus

Since that activity should be relatively easy, if you're hoping for a challenge:

  * Have the application track the tasks you actually have left, based on if you've checked some of them off or not.
