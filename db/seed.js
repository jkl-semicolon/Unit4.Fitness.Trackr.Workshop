import client from "./client.js";
import { routines, activities, routines_activities, shuffle } from './data.js';
const log = console.log;

const addTestRoutines = async (routines) => {
  try {
    for (let i=0; i<routines.length; i++) {
      await client.query(`
      INSERT INTO routines (is_public, name, goal)
      VALUES (${routines[i].is_public}, '${routines[i].name}', '${routines[i].goal}');
      `)
    }
  } catch (err) {
    log(err);
  }
}

const addTestActivities = async (activities) => {
  try {
    for (let i=0; i<activities.length; i++) {
      await client.query(`
      INSERT INTO activities (name, description)
      VALUES ('${activities[i].name}', '${activities[i].description}');
      `)
    }
  } catch (err) {
    log(err);
  }
}

const addTestRoutinesActivities = async (routines_activities) => {
  try {
    let routinesObj = await client.query(`SELECT id FROM routines;`);
    const routineIds = shuffle(routinesObj.rows);
    let activitiesObj = await client.query(`SELECT id FROM activities;`);
    const activityIds = shuffle(activitiesObj.rows);

    for (let i=0; i<routines_activities.length; i++) {
      await client.query(`
      INSERT INTO routines_activities (routine_id, activity_id, count)
      VALUES (${routineIds[i].id}, ${activityIds[i].id}, ${routines_activities[i].count});
      `)
    }
  } catch (err) {
    log(err);
  }
}

const emptyTables = async () => {
  try {
    const t = ['routines_activities', 'routines', 'activities'];
    for (let i=0; i<t.length; i++) await client.query(`DELETE FROM ${t[i]};`);
  } catch (err) {
    log(err);
  }
}

const syncAndSeed = async () => {
  await client.connect();
  log('connected to database');

  await emptyTables();
  log('tables emptied');

  await addTestRoutines(routines);
  await addTestActivities(activities);
  await addTestRoutinesActivities(routines_activities);
  log('test data added')

  await client.end();
  log('end database connection');
}

syncAndSeed();