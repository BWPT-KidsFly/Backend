
exports.up = function(knex) {
    return knex.schema.createTable('trips', tbl => {
      tbl.increments();
  
 
      tbl.string('airport_name', 255).notNullable();
        tbl.integer('airline', 255).notNullable();
        tbl.integer('flight_number', 255).notNullable();
        tbl.dateTime('departure_time', 255).notNullable();
        tbl.integer('carryon_items', 255).notNullable();
        tbl.integer('checked_items', 255).notNullable();
        tbl.integer('children', 255).notNullable();
        tbl.integer('special_needs', 255);
       
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('trips');
  };
