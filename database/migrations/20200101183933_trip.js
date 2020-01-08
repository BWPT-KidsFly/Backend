
exports.up = function(knex) {
    return knex.schema.createTable('trips', tbl => {
      tbl.increments();
  
 
      tbl.string('airport name', 255).notNullable();
        tbl.integer('airline', 255).notNullable();
        tbl.integer('flight number', 255).notNullable();
        tbl.dateTime('departure time', 255).notNullable();
        tbl.integer('carryon items', 255).notNullable()
        tbl.integer('children', 255).notNullable();
        tbl.integer('special needs', 255);
       
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('trips');
  };
