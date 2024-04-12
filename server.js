import { log } from 'console';
import express from 'express';

import { getActivities, getActivity, newActivity, deleteActivity } from './db/activities.js';
import { getRoutines, getRoutine, newRoutine, deleteRoutine } from './db/routines.js';
import { newRoutineActivity } from './db/routines_activities.js';
import client from './db/client.js';

await client.connect(); // top level await in ES6 is cool

const app = express();
const PORT = 8080;

app.use(express.json());   // reading body will be undefined for post requests for raw if this line is missing
app.use(express.urlencoded({extended: true})); // reading body will be undefined for post requests for x-www-form-urlencoded if this line is missing
// TODO look into these more

// TODO add better error handling

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
    const activity = await getActivity(id);
    res.send(activity);
  } catch (err) {
    log(err);
  }
})

app.get('/api/v1/routines/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const routine = await getRoutine(id);
    res.send(routine);
  } catch (err) {
    log(err);
  }
})

app.post('/api/v1/activities', async (req, res) => {
  try {
    const { rows: [newAct] } = await newActivity(req.body);
    const sendObj = {
      success: newAct ? true : false,
      added: newAct
    }
    res.send(sendObj);
  } catch (err) {
    res.send({success: false})
    log(err);
  }
})

app.post('/api/v1/routines', async (req, res) => {
  try {
    const myObj = await newRoutine(req.body);
    const sendObj = {
      success: myObj ? true : false,
      added: myObj
    }
    res.send(sendObj);
  } catch (err) {
    res.send({success: false})
    log (err);
  }
})

app.post('/api/v1/routines_activities', async (req, res) => {
  try {
    const myObj = await newRoutineActivity(req.body);
    const sendObj = {
      success: myObj ? true : false,
      added: myObj
    }
    res.send(sendObj);
  } catch (err) {
    res.send({success: false})
    log (err);
  }
})

app.delete('/api/v1/activities/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const myObj = await deleteActivity(id);
    const sendObj = {
      success: myObj ? true : false,
      deleted: myObj
    }
    res.send(sendObj);
  } catch (err) {
    res.send({success: false});
    log(err);
  }
})

app.delete('/api/v1/routines/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const myObj = await deleteRoutine(id);
    const sendObj = {
      success: myObj ? true : false,
      deleted: myObj
    }
    res.send(sendObj);
  } catch (err) {
    res.send({success: false});
    log(err);
  }
})

app.listen(PORT, () => log('listening on port ' + PORT + ', over.'))