
exports.up = function(knex) {
    return knex.schema.createTable('Step', tbl=>{

        tbl.increments();
  
        tbl.string('name', 160)
        .notNullable();

        tbl.integer('Step_Number')
        .notNullable();
  
  
    })
  
};

exports.down = function(knex) {
  
};
