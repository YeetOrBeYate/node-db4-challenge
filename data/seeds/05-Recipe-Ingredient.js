
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe-Ingredient')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe-Ingredient').insert([
        { RecipeId: 1, IngredientId: 2},
        { RecipeId: 1, IngredientId: 3},
        { RecipeId: 2, IngredientId: 1},
        { RecipeId: 3, IngredientId: 4},
        { RecipeId: 3, IngredientId: 5},
        { RecipeId: 3, IngredientId: 6}
      ]);
    });
};
