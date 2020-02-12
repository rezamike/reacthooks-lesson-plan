## Understanding Hooks

## Instructions

### Source

* Take some time with a partner to look over the lowdown of [Hooks and Effects](https://reactjs.org/docs/hooks-intro.html) that have rolled out with React v.16.8. You should be able to answer the following questions:

  1. What is the purpose of a Hook and when would you use it?

  2. How do Hooks differ from the current spread of stateful Components?

  3. What problem is there currently with the lifecycle that Hooks now solve?

### Assignment

Once you feel confident about your answers to the questions above, let's take a look at the unsolved "Counter with Button" application. There's nothing to install or test here, we're just going to try and analyze this file.

* Here are some things to note from the file before we dissect - try to soak this up like a sponge:

  1. With this activity, there's only one stateful component - this won't always be the case. Whether you're making an app that shows all the restaurants in a 10-mile radius with accesible restrooms, or you're making your own portfolio, you'll always end up with more components. That's not a bad thing! However, with so many states to manage, you could end up in what we call "Wrapper Hell" - and that's not where Tupac and Biggie are resting (they're in Thugz Mansion). Wrapper Hell is where you're reusing logic between multiple components that become so deeply nested, you can't find the threads to adjust states appropriately.
  
  2. Constructors just seem uneseccary, right? The truth is, setting up the object of `this.state` is more of a process than it needs to be - naming local state as a key, then an initial value as the key's value. It's extra work within the `constructor()` function, and it takes up more lines in your files. The default method is `setState()` anytime you want to make a change to your state, whether you need to re-render to default or change value. It also limits you to maintaining component states across your entire project, instead of having a global parser to manage states from every component, dynamically.
  
### Hook It Up!
  
* Based on the information you've gathered from the [React Website](https://reactjs.org/docs/hooks-intro.html), let's put some hooks in this file!
  
### Hints
  
* Make sure to reference the [React Website](https://reactjs.org/docs/hooks-intro.html) if you're feeling lost, and don't forget:
  > Google is a coder's best friend!
