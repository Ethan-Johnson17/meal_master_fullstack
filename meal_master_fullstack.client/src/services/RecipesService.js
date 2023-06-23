import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class RecipesService {
  async getAll(query = '') {
    const res = await api.get(query)
    AppState.recipes = res.data
  }

  async createRecipe(recipe) {
    const res = await api.post('api/Recipes', recipe)
    AppState.recipes.push(res.data)
  }

  async remove(id) {
    await api.delete('api/recipes/' + id)
    AppState.recipes = AppState.recipes.filter(r => r.id !== id)
  }

  async editRecipe(recipeId, recipe) {
    logger.log('service', recipe)
    const res = await api.put('api/recipes/' + recipeId, recipe)
    logger.log('service res', res.data)
  }

  async getAllRecipes() {
    const res = await api.get('api/recipes')
    AppState.recipes = res.data
    logger.log('appstate', AppState.recipes, '{resdata}', res.data)
  }

  async searchRecipes(query) {
    logger.log('query', query)
    // const res = await api.get()
  }
}

export const recipesService = new RecipesService()