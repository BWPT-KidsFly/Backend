

exports.up = function(knex) {
    return knex.schema.createTable('admins', tbl => {
      tbl.increments();
  
      tbl.string('username', 255).notNullable();
      tbl.string('email', 255).notNullable();
      tbl.string('password', 255).notNullable();
      tbl.string('first_name', 255).notNullable();
      tbl.string('last_name', 255).notNullable();
      tbl.string('confirm', 255).notNullable();
      
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('admins');
  };

  