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


        internal List<ShoppingList> GetMyShoppingList(string id)
        {
            List<ShoppingList> shoppingList = _repo.GetMyShoppingList(id);
            return shoppingList;
        }
        internal string Delete(int id, string userId)
        {
            ShoppingList shoppingList = _repo.GetOne(id);
            if (shoppingList == null) throw new Exception($"No items with id: {id}");
            if (shoppingList.CreatorId != userId) throw new Exception("This is not your items to delete!");
            _repo.Delete(id);
            return "Your item has been deleted";
        }
    }
}