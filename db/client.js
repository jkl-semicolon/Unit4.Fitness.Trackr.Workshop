import pkg from 'pg';
const { Client } = pkg;

const client = new Client('postgres://localhost:5432/fitness_trackr');

export default client;