import pkg from 'pg';
const { Client } = pkg;

const client = new Client('postgres://localhost:5432/fitness_trackr');

export default client;
// Pseudocode to be located in client.js as it is pretty empty in here.

/**
Complete the following coding challenges using what you know about Node.js runtime, 
Express.js CRUD routes, middleware, and PostgreSQL databases.

Directions
  - create a database called fitness-trackr
  - seed the database with the following
    - an activities table with an id, name, and description
    - a routines table with an id, is_public, name, and goal
    - a routines_activities table with an id, routine_id, activity_id, count
    - mock data in each table
  - create an Express server
  - create the following routes
    - GET /api/v1/activities - sends back all activities
    - GET /api/v1/routines - sends back all routines
    - GET /api/v1/activities/:activityId - sends back a specific activity based on the id that is passed in
    - GET /api/v1/routines/:routineId - sends back a specific routine based on the id that is passed in
    - POST /api/v1/activities - adds a new activity to the database and sends the newly added activity back
    - POST /api/v1/routines - adds a new routine to the database and sends the newly added routine back
    - POST /api/v1/routines_activities/ - adds a new routines_activities to the database and sends the newly added routines_activities back 
    - DELETE /api/v1/activities/:activityId - removes an activity from the database and sends a successful or failed message
    - DELETE /api/v1/routines/:routineId - removes a routine from the database and sends a successful or failed message

////////////////////////////////
////////// PSEUDOCODE //////////
////////////////////////////////

i.  use PSQL to create database called fitness-trackr
ii. npm init, npm install pg, define client variable in client.js, adjust package.json as needed.
  - client variable is new Client('postgres://localhost:5432/fitness_trackr'); for this workshop.
ii. either create the tables for routines, activities, and routines_activities in PSQL or seed.js.

SQL:  CREATE TABLE routines_activities (
        id SERIAL PRIMARY KEY
        routine_id INT REFERENCES routines(id), // NOTE: PSQL DOES NOT NEED FOREIGN KEY KEYWORDS
        activity_id INT REFERENCES activities(id),
        count INT
      );

iii. add mock data to the three tables, either in psql or in separate .js modules representing the 
different tables. Separate .js modules preferred.
  - Use client.connect(); to connect, and run npm run seed to our seed.js. 
      - package.json should have "seed": "node relativepath/seed.js",
  - All queries and connections to client are asynchronous.
iv. create server.js, npm install express, npm install nodemon, adjust package.json as needed.
  - Will need to use the following after making an app variable:
      app.use(express.urlencoded({extended: true}));
      app.use(express.json());
  - TODO - look more into this
v. create routes in server.js, while importing needed functions from the .js modules of the database tables.
  - utilize app.use as middleware, next param in the callback function, error handling, .get, .post
  - can use postman to test server connections to the database
 */