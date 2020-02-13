## Introduction to Hooks

### Overview

Students should have an understanding of HTML, JavaScript, React and a base knowledge of frameworks. Prior knowledge of non-class-based state-management isn't required.

Be the end of the lesson, students should have a strong base understanding of React Hooks with regards to both states and effects, and their implementation with React applications. They'll be transforming the React application given to them, to a Hook-based React app, utilizing all of the new methods they'll be learning. We'll be focusing mainly on the two most used strategies of React Hooks - States and Effects.

- - -

### Activity #1

#### Instructor Demo

* Have students recap their understanding of stateful components and the benefits they have in single page application manipulation.

* Explain the purpose of stateful components and their usefulness in working with data from the client to manipulate the DOM. Include the efficiency of their uses, but that there are issues with nesting many components and still efficiently maintaining data. The solution to processing this information for scale is React Hooks.

#### Student Assignment

* Students should work in pairs to research React Hooks through the [React Documentation](https://reactjs.org/docs/hooks-intro.html) to answer the following:

  1. What is the purpose of a Hook and when would you use it?

  2. How do Hooks differ from the current spread of stateful Components?

  3. What problem is there currently with the lifecycle that Hooks now solve?
  
  4. How many different Hook strategies are there?

* Once they've reviewed the information, you may call on them to answer the questions above. Otherwise, direct the students to look over the example in the `/Unsolved` folder of a stateful component. Ask them to discuss between themselves how they might switch this stateful component to a function that uses React Hooks with the inherit `useState()` method.

* They should make an attempt at making the changes needed, but they should be reminded that this assignment is more for understanding - it's more important that they see the process of it.

#### Instructor Review

* If any students feel confident to showcase their attempt, that should be encouraged. Otherwise, you may show the students how to make the changes yourself, or the solution (`StateHook.js`) may be shown to the students.

* This is the time for really highlighting the comparison between the two. `useState()` is not a difficult overhaul method for stateful components, but it is the groundwork for understanding Hooks in React.

* Here's an extra, useful example that you may also show:

  ```
  // New state variables can be anything you want
  const [value, setValue] = useState(initial value);

  // useState will process your inital value by what you set it, so it can be a number (2), a string ('foo'), or an empty array for you to fill ([]).
  

  // This example:
  const [cash, setCash] = useState(0)

  // is the same as this (in previous stateful component landscapes):
  constructor(props) {
      super(props);

      this.state = {
          cash: 0
      }
  }

  // Which would you rather use?
  ```

- - -

### Activity #2

#### Instructor Demo

* From this point forward, students will be using the same React project for the rest of the lesson. Each lesson moving forward has a `/src` folder inside of the `/Solved` folder that they may copy and paste if they did not find the solution themselves, to follow along in the assignment after.

* First, instruct the students to open the unsolved folder, and open the terminal - making sure they are in the `/Unsolved` folder in the directory of the terminal. From here, they should run:
`npm install`

  - As that's installing, students should take a moment to look back over the previous assignment or the React Hooks documentation, as this assignment will have them switching stateful components to functions with Hooks.

* After the installation is completed, they may work in pairs to look over the application, run `npm start` and follow the changes being made to the state, how they're being made, and what the goals of the component really are.

#### Student Assignment

* Having spent some time with the application and how the components utilize states, instruct them to attempt the switch again, as they did in the first activity.

* Since this activity is a bigger scope than the first, it will take them a good amount of time, and they may need help. They should be looking back over the initial assignment, as well as looking through the React Hooks documentation. Should they need more assistance, you have the `/Solved` folder with the solution to provide more of a breakdown/understanding of the most efficient way to use `useState()` in the `App.js` and `Form.js`.

#### Instructor Review

