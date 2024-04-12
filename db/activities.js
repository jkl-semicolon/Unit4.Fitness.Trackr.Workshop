import { log } from 'console';

import client from "./client.js";

const getActivities = async () => {
  try {
    const {rows} = await client.query(`SELECT * FROM activities;`);
    return rows;
  } catch (err) {
    log(err);
  }
}

const getActivity = async (id) => {
  try {
    const {rows:[activity]} = await client.query(`SELECT * FROM activities WHERE ${id} = id;`);
    return activity;
  } catch (err) {
    log(err);
  }
}

const newActivity = async (activity) => {
  try {
    const newAct = await client.query(`
      INSERT INTO activities (name, description)
      VALUES ('${activity.name}', '${activity.description}')
      RETURNING *;
    `)
    return newAct;
  } catch (err) {
    log(err);
  }
}

export { getActivities, getActivity, newActivity }