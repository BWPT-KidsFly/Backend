exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
  
 
      tbl.string('username', 255).notNullable();
        tbl.string('password', 255).notNullable();
        tbl.string('full name', 255).notNullable();
        tbl.string('address', 255).notNullable();
        tbl.string('phone number', 255).notNullable()
        tbl.string('home airport', 255).notNullable();
        tbl.boolean('admin').defaultTo(false);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };