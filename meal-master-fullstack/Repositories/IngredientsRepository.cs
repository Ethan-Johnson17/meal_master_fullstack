namespace meal_master_fullstack.Repositories
{
    public class IngredientsRepository
    {
        private readonly IDbConnection _db;
        public IngredientsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal Ingredient CreateIngredient(Ingredient ingredientData)
        {
            string sql = @"
            INSERT INTO ingredients
            (quantity, recipeId, name)
            VALUES
            (@quantity, @recipeId, @name);
            SELECT LAST_INSERT_ID();
            ";
            int id = _db.ExecuteScalar<int>(sql, ingredientData);
            ingredientData.Id = id;
            return ingredientData;
        }

        internal bool DeleteIngredient(int recipeId)
        {
            string sql = @"
            DELETE FROM ingredients WHERE id = @recipeId;
            ";
            int rows = _db.Execute(sql, new { recipeId });
            return rows == 1;
        }


        internal List<Ingredient> FindByRecipe(int recipeId)
        {
            string sql = @"
            SELECT
            ing.*
            FROM ingredients ing
            WHERE ing.recipeId = @recipeId
            ";
            List<Ingredient> ingredients = _db.Query<Ingredient>(sql, new { recipeId }).ToList();
            return ingredients;
        }

        internal Ingredient FindIngredient(int recipeId)
        {
            string sql = @"
            SELECT
            ing.*
            FROM ingredients ing
            WHERE ing.id = @recipeId;
            ";
            Ingredient ingredient = _db.Query<Ingredient>(sql, new {recipeId}).FirstOrDefault();
            return ingredient;
        }
    }
}