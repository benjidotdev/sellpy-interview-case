# Sellpy interview case

Repo: https://github.com/benjidotdev/sellpy-interview-case

## Contents

- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Assignment](#assignment)

## Requirements

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Getting started

1. Clone the repository

   ```bash
   #SSH
   git clone git@github.com:benjidotdev/sellpy-interview-case.git
   ```

   or

   ```bash
   #HTTPS
   git clone https://github.com/benjidotdev/sellpy-interview-case.git
   ```

2. From project root, navigate to `/backend` and create a `.env` file

   ```
   cp .env.example .env
   ```
   
3. Update the `.env` file with the credentials provided

   ```
   See email
   ```

4. Install the backend dependencies
   
   ```bash
   npm ci
   ```

5. Start the server

   ```bash
   npm start
   ```

6. Navigate to `/frontend`

   ```
   cd frontend
   ```

7. Install the dependencies

   ```bash
   npm ci
   ```

8. Start the frontend

   ```bash
   npm start
   ```

9. Navigate to  http://localhost:3000

## Assignment

As requested, I've tried to keep things as clean and simple as possible.

### Main Task

> Persist the todo lists on the server. Persisting in a database is not required. (Simple js structures on the server is fine). If you do go for an actual DB (again not required), be sure to include instructions of how to get it up and running.

I decided to use MongoDB to persist the todo lists. As it says in the [getting started](#getting-started), you will need to create and update the `.env` file. The details are in my reply to the `Teknisk intervju` invite email.

### Additional tasks

> 1. Don't require users to press save when an item is added/edited in the todo list. (Autosave functionality)
> 2. Make it possible to indicate that a todo is completed.
> 3. Indicate that a todo list is completed if all todo items within are completed.
> 4. Add a date for completion to todo items. Indicate how much time is remaining or overdue.

I decided to go for tasks 1 and 4.

For task 1, I created an `updateTodo` function with a basic pseudo-debounce that when timeout is reached, triggers an api call to update the todo list in the database. It also uses basic optimistic updating techniques, as does the `addTodo` and `removeTodo` functionality.

For task 4, I used the `<input type="date">` to generate and set a date. I then created some time utilities in the `utils/time.js` file for displaying remaining/overdue time and associated logic.