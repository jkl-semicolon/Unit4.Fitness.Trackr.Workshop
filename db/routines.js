import { log } from 'console';

import client from "./client.js";

const getRoutines = async () => {
  try {
    const {rows} = await client.query(`SELECT * FROM routines;`);
    return rows;
  } catch (err) {
    log(err);
  }
}

const getRoutine = async (id) => {
  try {
    const {rows:[routine]} = await client.query(`SELECT * FROM routines WHERE ${id} = id;`)
    return routine;
  } catch (err) {
    log(err);
  }
}

export { getRoutines, getRoutine }