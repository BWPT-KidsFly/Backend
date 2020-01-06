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
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function update (changes, id) {
  return db("users").where({ id })
  .update(users)
  .then(res => {
      return db ("susers").where({ id });
  });
}

function remove(id) {
  return db ("users").where({ id })
  ? db("users")
  .where({ id })
  .del()
  : null;
}
