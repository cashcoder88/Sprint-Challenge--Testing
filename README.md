# Sprint Challenge: Testing - TDD Video Games

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Testing. During this Sprint, you studied Introduction to Automated Testing, Testing React Applications & Testing Web APIs. In your challenge this week, you will demonstrate proficiency by creating an application that follows the TDD pattern to create a simple Web API using Node.js and Express.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Testing and your command of the concepts and techniques in the Introduction to Automated Testing, Testing React Applications & Testing Web APIs modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps you in the event you ever need to return to old code, for any number of reasons, and improves your project manager's ability to review and assist you with your project.

## Description

In this challenge use `Test Driven Development` to build a RESTful API using Node.js and Express to create and list _games_. **Data can be stored in memory using a simple JS array**. No need to keep track of incrementing `id`s for this project's MVP, that is part of the Stretch Problem.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

- So describe() is used to create a test suite to house multiple 'its' or 'tests' that are testing something similar. While an it() is for a single unit test itself. So you could have a describe for a GET endpoint, and 5 its inside that all related to that GET endpoint. 

1. What is the point of `Test Driven Development`? What do you think about this approach?

- TDD is a great approach! The point of it is the write your code thinking test first and in very short cyles. In the long run, TDD will help your code have less bugs, be easier to update, and much more.

1. Mention three types of automated tests.

- Three types of automated tests would be unit testing, integration testing, and end-to-end testing!

## Project Set Up

- [x] Fork and clone this repository.
- [x] **CD into the folder** where you downloaded the repository.
- [x] Run `yarn` or `npm i` to download all dependencies.
- [] add other dependencies 
- [] Type `yarn test` or `npm test` to run the tests. The `test` script is already configured.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [x] Use `jest` and `supertest` to write the tests.
- [x] Write the **tests BEFORE** writing the route handlers.
- [x] Your API must have both `POST` and `GET` endpoints for `/games`.
- [x] Write a **minimum** of three tests per endpoint.

Below is a product specification covering the requirements for your endpoints.

### POST /games

- [x] The `POST /games` endpoint should take in an object that looks like this

  ```js
  {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  }
  ```

- [x] In the route handler, validate that the required fields are included inside the body. If the information is incomplete, return a `422` status code.
- [x] Write tests to verify that the endpoint returns the correct HTTP status code when receiving correct and incorrect game data.

### GET /games

- [x] The `GET /games` endpoint should return the list of games and HTTP status code 200.
- [x] Write a test to make sure this endpoint always returns an array, even if there are no games stored. If there are no games to return, the endpoint should return an empty array.

## Stretch Problems

The following exercises are optional, but we suggest that you tackle them if you finish the MVP early.

- [] Validate that the game `title` is unique. If the client tries to create a duplicate game, return a status code 405 (Not Allowed). Write a test that checks for this.
- [x] Add an `id` property to the game schema and write code in the server to increment it automatically. After implementing this functionality work on the following:
  - [x] Write a `GET /games/:id` endpoint that returns the information about a single game. Respond with a 404 status code when a game is not found for the provided `id`. [x] Add the corresponding tests for it.
  - [x]Add a `DELETE /games/:id` endpoint that can remove the corresponding game. If the game does not exist return a 404 status code.  Write tests for this endpoint. [x]

  Finished at 11:57am [x]

**Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!**
