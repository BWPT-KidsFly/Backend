

exports.up = function(knex) {
    return knex.schema.createTable('application', tbl => {
      tbl.increments();
  
      tbl.string('email', 255).notNullable();
      tbl.string('password', 255).notNullable();
      tbl.string('first_name', 255).notNullable();
      tbl.string('last_name', 255).notNullable();
      tbl.string('confirm', 255).notNullable();
      tbl.boolean(`accepted`).defaultTo(false);
      
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('application');
  };
