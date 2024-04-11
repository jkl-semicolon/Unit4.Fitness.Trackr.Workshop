import client from "./client.js";

const addRoutineAndCheck = async () => {
  try {
    await client.query(`
      INSERT INTO routines (is_public, name, goal)
      VALUES (false, 'Jogging', '20 miles');
    `)
    const checking = await client.query(`
      SELECT * FROM routines;
    `)
    console.log(checking);
  } catch (err) {
    console.log(err);
  }
}

const syncAndSeed = async() => {
  await client.connect();
  console.log('connected to database');

  await addRoutineAndCheck();
  console.log('test administered');

  await client.end();
  console.log('end database connection');
}

syncAndSeed();