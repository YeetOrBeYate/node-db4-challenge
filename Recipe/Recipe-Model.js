const db = require('../data/db-config.js');

const getRecipes = ()=>{
    return db
    .select("*")
    .from('Recipe')

}

const getShoppingList=(id)=>{
    return db
    .select("Recipe.name", "Ing.name as Ingredient", "Ing.Measurement")
    .from("Recipe")
    .join("Recipe-Ingredient as trans", "Recipe.id", "trans.RecipeId")
    .join("Ingredient as Ing", "trans.IngredientId", "Ing.id")
    .where("Recipe.id", id)

}

module.exports= {
    getRecipes,
    getShoppingList
}