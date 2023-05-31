using System.Linq;

namespace meal_master_fullstack.Repositories
{
  public class RecipesRepository
  {
    private readonly IDbConnection _db;

    public RecipesRepository(IDbConnection db)
    {
      _db = db;
    }
    internal List<Recipe> GetAll()
    {
      string sql = "SELECT * FROM recipes;";
      return _db.Query<Recipe>(sql).ToList();
    }

    internal Recipe Get(int id)
    {
      string sql = "SELECT * FROM recipes WHERE id = @id;";
      return _db.QueryFirstOrDefault<Recipe>(sql, new { id });
    }

    internal Recipe Create(Recipe newRecipe)
    {
      string sql = @"
      INSERT INTO recipes
      (title, subtitle, category, cuisine, imgUrl, creatorId)
      VALUES
      (@title, @subtitle, @category, @cuisine, @imgUrl, @creatorId);
      SELECT LAST_INSERT_ID()
      ;";
      int id = _db.ExecuteScalar<int>(sql, newRecipe);
      newRecipe.Id = id;
      return newRecipe;
    }

    internal void Remove(int id)
    {
      string sql = "DELETE FROM recipes WHERE id = @id LIMIT 1;";
      _db.Execute(sql, new { id });
    }

    internal Recipe Update(Recipe updatedRecipe)
    {
      string sql = @"
      UPDATE recipes
      SET
      Title = @Title,
      Subtitle = @Subtitle,
      Category = @Category,
      Cuisine = @Cuisine,
      ImgUrl = @ImgUrl
      WHERE Id = @Id
      ;";
      int rows = _db.Execute(sql, updatedRecipe);
      if (rows <= 0)
      {
        throw new Exception("Recipe was not updated");
      }
      return updatedRecipe;
    }
  }
}