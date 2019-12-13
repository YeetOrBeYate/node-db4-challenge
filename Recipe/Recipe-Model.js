
const db = require('../data/db-config.js');

const getRecipes = ()=>{
    return db
    .select("*")
    .from('Recipe')

}

const getShoppingList=(id)=>{
    return db
    .select("Recipe.name", "Ing.name as Ingredient","Ing.Measurement", "Ing.Unit")
    
    .from("Recipe")
    .join("Recipe-Ingredient as trans", "Recipe.id", "trans.RecipeId")
    .join("Ingredient as Ing", "trans.IngredientId", "Ing.id")
    .where("Recipe.id", id)

}

const getInstructions = (id)=>{
    return db
    .select("Recipe.name", "s.Step_Number as Step", "s.name as Direction")
    .from('Recipe')
    .join("Recipe-Step as steps", "Recipe.id", "steps.RecipeId")
    .join("Step as s", "steps.StepID", "s.id")
    .where("Recipe.id", id)
}

module.exports= {
    getRecipes,
    getShoppingList,
    getInstructions
}