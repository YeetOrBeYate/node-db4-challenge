
exports.up = function(knex) {
    return knex.schema.createTable('Recipe-Ingredient', tbl=>{

        tbl.primary(['RecipeId', 'IngredientId']);
  
         //FOREIGN KEY
         tbl.integer('RecipeId')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('Recipe')
         .onDelete('CASCADE') //could be cascade, it just depends on the usecase
         .onUpdate('CASCADE');
 
 
         //FOREIGN KEY
         tbl.integer('IngredientId')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('Ingredient')
         .onDelete('CASCADE') //could be cascade, it just depends on the usecase
         .onUpdate('CASCADE');
  
  
    })
  
};

exports.down = function(knex) {
  
};
