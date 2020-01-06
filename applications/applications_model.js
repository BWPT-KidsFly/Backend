const db = require('../database/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
};

function find() {
  return db('application').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('application').where(filter);
}

async function add(application) {
  const [id] = await db('application').insert(admin);

  return findById(id);
}

function findById(id) {
  return db('application')
    .where({ id })
    .first();
}


function remove(id) {
  return db ("application").where({ id })
  ? db("application")
  .where({ id })
  .del()
  : null;
}