# Understanding Hooks

## Instructions

### Assignment Prep

#### Part 1

* For our lesson plan, we'll only be focusing on State Hooks and Effect Hooks. Take some time with a partner to look over the lowdown of [React Hooks](https://reactjs.org/docs/hooks-intro.html) from the React v.16.8 update. You should be able to answer the following questions:

  1. What is the purpose of a Hook and when would you use it?

  2. How do Hooks differ from the current spread of stateful Components?

  3. What problem is there currently with the lifecycle that Hooks now solve?
  
  4. How many different Hook strategies are there?

#### Part 2

Once you feel confident about your answers to the questions above, let's take a look at the `PreHooks.js` file. There's nothing to install or test here, we're just going to try and analyze this file.

* Here are some things to note from the file before we dissect:

  1. With this activity, there's only one stateful component - this won't always be the case. With more states to manage, you could end up in what we call "Wrapper Hell". Wrapper Hell is where you're reusing logic between multiple components that become too deeply nested.
  
  2. Constructors and setting up the object of `this.state` is more of a process than it needs to be - naming local state as a key, then an initial value as the key's value. The default method is `setState()` anytime you want to make a change to your state, whether you need to re-render to default or change value.
  
### Assignment
  
* Based on the information you've gathered, look at `StateHook.js` alongside `PreHooks.js`. Try to notice and understand the differences.

### Bonus

Before opening `StateHook.js`, look through `PreHooks.js` and see if you can find where Hooks can be implemented based on what you've researched so far. Try just making the changes in the file yourself.
  
### Hints
  
* Make sure to reference the [React Website](https://reactjs.org/docs/hooks-intro.html) if you're feeling lost, and don't forget:
  > Google is a coder's best friend!
