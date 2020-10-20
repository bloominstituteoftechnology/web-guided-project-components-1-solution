# Lesson Plan

## 1- Preliminaries

* Walk the class through the clone, install and start process of the GP repo.
* Students with a broken Node who can't `npm start` will need to move all data to `index.js`.
* Imports working relies on the trans-compiling of `npm start`.
* Test out with the students the git flow for resetting their branch to the instructor's.

## 2- Instructor's Checklist of Things to Cover

* Architecture: each program is its own script in the HTML.
* Architecture: different programs sometimes depend on one another.
* Architecture: compare async vs. defer vs. nothing in the script tag.
* Architecture: go over package.json and NPM projects again.
* Importing other modules: top-level in the script, unconditionally.
* The component as a function that takes data and returns elements.
* Selecting a container for our elements using .querySelector.
* Creating elements with .createElement
* Creating a hierarchy of elements with .appendChild
* Adding text content with .textContent
* Toggling class names with .classList
* Looping over an array of objects, making elements and appending them to the DOM.
* The importance of choosing good variable/parameter names.
* Checking variables (often!) with log statements and breakpoints.

## 3- Demo Part I (Super Fast Component)

* Demo `👉 TASK 0` inside `index.js` following the instructions in the comments.
* This serves the purpose of students seeing the whole component-building flow in under 10 minutes.
* The big demo (Dog Card) can be tedious and the student loses sight of what we're trying to accomplish.
* Comment out the appending to the DOM after you're done.

## 4- Demo Part II (Creating a Dog Card)

* Starting at `👉 TASK 1` inside `index.js` follow the instructions in the comments.
* Make sure to demo debugging of the work in progress, using log statements or breakpoints.
* Make the students do as much of the work as possible! Start timers and use Slack threads.
* But don't copy & paste from Slack: comment and praise students' responses but then type it yourself.
* Demo the VSCode shortcuts and tricks you like that help you work more effectively.
* Elicit variable and parameter names from students, and criticize them.
* Make bugs on purpose and have students guide you through the debugging process.
* This demo includes a gentle intro to importing other modules.
* Both demos include examples of ES6 destructuring.

## 5- Links of Interest

* [async and defer on stackoverflow](https://stackoverflow.com/questions/10808109/script-tag-async-defer)
* [ES6 Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
* [ES6 Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
* [Debugging JavaScript in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript)

## 6- Following Along and Catching Up

* The instructor should make sure students clone the starter repo without forking it.
* The instructor must make commits to a `lecture` branch and push them regularly (or use a script to do it).
* If the students work on their own named branch, `main` is kept clean so they can re-do the demo later.
* In order to catch up, the students can reset their branch to the instructor's last pushed commit:

  ```bash
    git fetch && git reset --hard origin/lecture
  ```
