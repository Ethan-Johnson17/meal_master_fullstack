namespace meal_master_fullstack.Services
{
    public class ShoppingListItemsService
    {
        private readonly ShoppingListItemsRepository _repo;

        public ShoppingListItemsService(ShoppingListItemsRepository repo)
        {
            _repo = repo;
        }

        internal ShoppingListItem CreateShoppingListItem(ShoppingListItem SLData)
        {
            ShoppingListItem newSL = _repo.CreateShoppingListItem(SLData);
            return newSL;
        }


        internal List<ShoppingListItem> GetMyShoppingListItem(string id)
        {
            List<ShoppingListItem> shoppingList = _repo.GetMyShoppingListItem(id);
            return shoppingList;
        }
        internal ShoppingListItem Edit(int id, ShoppingListItem sLData, string userId)
        {
            ShoppingListItem original = _repo.GetOne(id);
            if (original.CreatorId != userId) throw new Exception("This is not yours to edit");
            original.IsChecked = sLData.IsChecked ? sLData.IsChecked : original.IsChecked;
            int rowsAffected = _repo.Edit(original);
            if (rowsAffected == 0) throw new Exception("Could not modify for some reason");
            if (rowsAffected > 1) throw new Exception("Something went very wrong and you edited more than one row");
            return original;

        }
        internal string Delete(int id, string userId)
        {
            ShoppingListItem shoppingList = _repo.GetOne(id);
            if (shoppingList == null) throw new Exception($"No items with id: {id}");
            if (shoppingList.CreatorId != userId) throw new Exception("This is not your items to delete!");
            _repo.Delete(id);
            return "Your item has been deleted";
        }

    }
}