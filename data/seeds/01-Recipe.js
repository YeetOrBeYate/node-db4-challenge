
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe').insert([
        { name: 'Grilled Cheese'},
        { name: 'Scrambled Eggs'},
        { name: 'Pancake'}
      ]);
    });
};
