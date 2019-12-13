
exports.up = function(knex) {
    return knex.schema.createTable('Recipe-Step', tbl=>{

        tbl.primary(['RecipeId', 'StepId']);
  
         //FOREIGN KEY
         tbl.integer('RecipeId')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('Recipe')
         .onDelete('CASCADE') //could be cascade, it just depends on the usecase
         .onUpdate('CASCADE');
 
 
         //FOREIGN KEY
         tbl.integer('StepId')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('Step')
         .onDelete('CASCADE') //could be cascade, it just depends on the usecase
         .onUpdate('CASCADE');
  
  
    })
  
};

exports.down = function(knex) {
  
};
