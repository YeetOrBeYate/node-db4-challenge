
exports.up = function(knex) {
    return knex.schema.createTable('Ingredient', tbl=>{

        tbl.increments();
  
        tbl.string('name', 160)
        .notNullable();

        tbl.string('Unit', 60)
        .notNullable();

        tbl.float('Measurement')
        .notNullable();
  
  
    })
};

exports.down = function(knex) {
  
};
