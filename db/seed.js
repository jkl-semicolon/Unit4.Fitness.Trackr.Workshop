import client from "./client.js";
const log = console.log;

const addRoutineAndCheck = async () => {
  try {
    await client.query(`
      INSERT INTO routines (is_public, name, goal)
      VALUES (false, 'Jogging', '20 miles');
    `)
    const checking = await client.query(`
      SELECT * FROM routines;
    `)
    log('I am checking', checking);
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

const syncAndSeed = async() => {
  await client.connect();
  log('connected to database');

  await addRoutineAndCheck();

  await emptyTables();
  log('tables emptied');

  await client.end();
  log('end database connection');
}

syncAndSeed();