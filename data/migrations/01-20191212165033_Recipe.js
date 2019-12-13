
exports.up = function(knex) {
  return knex.schema.createTable('Recipe', tbl=>{

      tbl.increments();

      tbl.string('name', 160)
      .notNullable();


  })
};

exports.down = function(knex) {
  
};
