namespace meal_master_fullstack.Services
{
  public class RecipesService
  {
    private readonly RecipesRepository _repo;
    public RecipesService(RecipesRepository repo)
    {
      _repo = repo;
    }
    internal List<Recipe> Get()
    {
      return _repo.GetAll();
    }

    internal Recipe Get(int id)
    {
      Recipe found = _repo.Get(id);
      if (found == null)
      {
        throw new Exception("Invalid Id");
      }
      return found;
    }

    internal Recipe Create(Recipe newRecipe)
    {
      return _repo.Create(newRecipe);
    }

    internal Recipe Update(Recipe updatedRecipe)
    {
      Recipe oldRecipe = Get(updatedRecipe.Id);
      updatedRecipe.Title = updatedRecipe.Title != null ? updatedRecipe.Title : oldRecipe.Title;
      updatedRecipe.Subtitle = updatedRecipe.Subtitle != null ? updatedRecipe.Subtitle : oldRecipe.Subtitle;
      updatedRecipe.Category = updatedRecipe.Category != null ? updatedRecipe.Category : oldRecipe.Category;
      updatedRecipe.Cuisine = updatedRecipe.Cuisine != null ? updatedRecipe.Cuisine : oldRecipe.Cuisine;
      updatedRecipe.ImgUrl = updatedRecipe.ImgUrl != null ? updatedRecipe.ImgUrl : oldRecipe.ImgUrl;
      return _repo.Update(updatedRecipe);
    }

    internal void Remove(int id, string userId)
    {
      Recipe recipe = Get(id);
      if (recipe.CreatorId != userId)
      {
        throw new Exception("You are not allowed to remove this recipe");
      }
      _repo.Remove(id);
    }
  }
}