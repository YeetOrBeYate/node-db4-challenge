
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe-Step')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe-Step').insert([
        { RecipeId: 1, Stepid: 1},
        { RecipeId: 1, Stepid: 2},
        { RecipeId: 2, Stepid: 3},
        { RecipeId: 2, Stepid: 4},
        { RecipeId: 3, Stepid: 5},
        { RecipeId: 3, Stepid: 6},
      ]);
    });
};
