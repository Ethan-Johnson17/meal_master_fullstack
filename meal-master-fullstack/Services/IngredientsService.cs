namespace meal_master_fullstack.Services
{
    public class IngredientsService
    {
        private readonly IngredientsRepository _repo;

        public IngredientsService(IngredientsRepository repo)
        {
            _repo = repo;
        }

        internal Ingredient CreateIngredient(Ingredient ingredientData)
        {
            Ingredient ingredient = _repo.CreateIngredient(ingredientData);
            return ingredient;
        }

        internal string DeleteIngredient(int recipeId, Account userInfo)
        {
            Ingredient ingredient = _repo.FindIngredient(recipeId);
            bool result = _repo.DeleteIngredient(recipeId);
            return "deleted";
        }

        internal List<Ingredient> FindByRecipe(int recipeId)
        {
            List<Ingredient> ingredients = _repo.FindByRecipe(recipeId);
            return ingredients;
        }
    }
}