exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
  
 
      tbl.string('username', 255).notNullable();
        tbl.string('password', 255).notNullable();
        tbl.string('first_name', 255).notNullable();
        tbl.string('last_name', 255).notNullable();
        tbl.string('street_address', 255).notNullable();
        tbl.string('city', 255).notNullable();
        tbl.string('state', 255).notNullable();
        tbl.string('zip', 255).notNullable();
        tbl.string('phone_number', 255).notNullable()
        tbl.string('home_airport', 255).notNullable();
        tbl.boolean('admin').defaultTo(false);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };