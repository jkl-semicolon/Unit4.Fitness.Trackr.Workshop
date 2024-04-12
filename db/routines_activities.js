import { log } from 'console';

import client from "./client.js";

const newRoutineActivity = async (routineActivity) => {
  try {
    const {rows:[mySql]} = await client.query(`
      INSERT INTO routines_activities (routine_id, activity_id, count)
      VALUES (${routineActivity.routine_id}, ${routineActivity.activity_id}, ${routineActivity.count})
      RETURNING *;
    `)
    return mySql;
  } catch (err) {
    log(err);
  }
}

export { newRoutineActivity }