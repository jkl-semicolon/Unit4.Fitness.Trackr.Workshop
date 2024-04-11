import { log } from 'console';
import express from 'express';

import { getActivities, getActivity } from './db/activities.js';
import { getRoutines, getRoutine } from './db/routines.js';
import client from './db/client.js';

await client.connect(); // top level await in ES6 is cool

const app = express();
const PORT = 8080;

app.use(express.json());   // reading body will be undefined for post requests for raw if this line is missing
app.use(express.urlencoded({extended: true})); // reading body will be undefined for post requests for x-www-form-urlencoded if this line is missing
// TODO look into these more


app.get('/api/v1/activities', async (req, res) => {
  try {
    const activities = await getActivities();
    res.send(activities);
  } catch (err) {
    log(err);
  }
})

app.get('/api/v1/routines', async (req, res) => {
  try {
    const routines = await getRoutines();
    res.send(routines);
  } catch (err) {
    log(err);
  }
})

app.get('/api/v1/activities/:id', async (req, res) => {
  try {
    const {id} = req.params;
    log(id);
    const activity = await getActivity(id);
    res.send(activity);
  } catch (err) {
    log(err);
  }
})

app.get('/api/v1/routines/:id', async (req, res) => {
  try {
    const {id} = req.params;
    log(id);
    const routine = await getRoutine(id);
    res.send(routine);
  } catch (err) {
    log(err);
  }
})

app.post('/api/v1/activities', async (req, res) => {
  try {

  } catch (err) {
    log(err);
  }
})

app.listen(PORT, () => log('listening on port ' + PORT + ', over.'))