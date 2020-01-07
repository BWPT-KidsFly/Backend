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
  return db('admins').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('admins').where(filter);
}

async function add(admin) {
  const [id] = await db('admins').insert(admin);

  return findById(id);
}

function findById(id) {
  return db('admins')
    .where({ id })
    .first();
}

function update (changes, id) {
  return db("admins").where({ id })
  .update(changes)
  .then(res => {
      return db ("admins").where({ id });
  });
}

function remove(id) {
  return db ("admins").where({ id })
  ? db("admins")
  .where({ id })
  .del()
  : null;
}
