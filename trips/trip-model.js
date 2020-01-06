const db = require('../database/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db('trips').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('trips').where(filter);
}

async function add(trip) {
  const [id] = await db('trips').insert(trip);

  return findById(id);
}

function findById(id) {
  return db('trips')
    .where({ id })
    .first();
}

function update (trip, id) {
  return db(`trips`)
  .where ({ id })
  .update (trip)
}

function remove(id) {
  return db (`trips`)
  .where ({ id })
  .del()
}
