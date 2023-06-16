namespace meal_master_fullstack.Services
{
    public class ShoppingListsService
    {
        private readonly ShoppingListsRepository _repo;

        public ShoppingListsService(ShoppingListsRepository repo)
        {
            _repo = repo;
        }
    }
}