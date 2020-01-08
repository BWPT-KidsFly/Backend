exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
  
 
      tbl.string('username', 255).notNullable();
        tbl.string('password', 255).notNullable();
        tbl.string('first name', 255).notNullable();
        tbl.string('last name', 255).notNullable();
        tbl.string('street address', 255).notNullable();
        tbl.string('city', 255).notNullable();
        tbl.string('state', 255).notNullable();
        tbl.string('zip', 255).notNullable();
        tbl.string('phone number', 255).notNullable()
        tbl.string('home airport', 255).notNullable();
        tbl.boolean('admin').defaultTo(false);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };