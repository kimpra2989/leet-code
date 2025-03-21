/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  supplies = new Set(supplies)
  const recipesSet = new Set(recipes)
  const recipeMap = {}

  function RecipeState(ingredients) {
    this.ingredients = ingredients
    this.canMake = 'unknown'
  }

  for (let i = 0; i < recipes.length; i++) {
    recipeMap[recipes[i]] = new RecipeState(ingredients[i])
  }

  const res = []
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i]
    const ingredient = ingredients[i]

    switch (recipeMap[recipe].canMake) {
      case 'unknown':
        updateCanMake(recipe, supplies, recipeMap, new Set([]))
        if (!recipeMap[recipe].canMake) break

      case true: res.push(recipe)
    }
  }

  return res

  function updateCanMake(recipe, supplies, recipeMap, visited) {
    // 순환 참조 도랐?
    if (visited.has(recipe)) {
      recipeMap[recipe].canMake = false
      return
    }

    visited.add(recipe)

    if (recipeMap[recipe].canMake != 'unknown') {
      return recipeMap[recipe].canMake
    }

    const ingredients = recipeMap[recipe].ingredients

    for (const ingredient of ingredients) {
      // 재료에도 레시피에도 없는 경우
      if (!supplies.has(ingredient) && !(ingredient in recipeMap)) {
        recipeMap[recipe].canMake = false
        return
      }

      // 재료가 있음 
      if (supplies.has(ingredient)) continue

      // 재료가 레시피임
      if (recipeMap[ingredient].canMake == 'unknown') {
        updateCanMake(ingredient, supplies, recipeMap, visited)
      }

      if (!recipeMap[ingredient].canMake) {
        recipeMap[recipe].canMake = false
        return
      }

    }
    recipeMap[recipe].canMake = true
  }
};

