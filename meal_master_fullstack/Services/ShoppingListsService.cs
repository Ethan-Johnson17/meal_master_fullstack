namespace meal_master_fullstack.Services
{
    public class ShoppingListsService
    {
        private readonly ShoppingListsRepository _repo;

        public ShoppingListsService(ShoppingListsRepository repo)
        {
            _repo = repo;
        }

        internal ShoppingList CreateShoppingList(ShoppingList SLData)
        {
            ShoppingList newSL = _repo.CreateShoppingList(SLData);
            return newSL;
        }
    }
}