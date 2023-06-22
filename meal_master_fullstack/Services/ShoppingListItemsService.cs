namespace meal_master_fullstack.Services
{
    public class ShoppingListItemsService
    {
        private readonly ShoppingListItemsRepository _repo;

        public ShoppingListItemsService(ShoppingListItemsRepository repo)
        {
            _repo = repo;
        }

        internal ShoppingListItem Create(ShoppingListItem itemData)
        {
            ShoppingListItem newItem = _repo.Create(itemData);
            return newItem;
        }


        internal List<ShoppingListItem> GetMyShoppingList(string id)
        {
            List<ShoppingListItem> item = _repo.GetMyShoppingList(id);
            return item;
        }
        internal ShoppingListItem Edit(int id, ShoppingListItem itemData, string userId)
        {
            ShoppingListItem original = _repo.GetOne(id);
            if (original.CreatorId != userId) throw new Exception("This is not yours to edit");
            original.IsChecked = itemData.IsChecked ? itemData.IsChecked : original.IsChecked;
            int rowsAffected = _repo.Edit(original);
            if (rowsAffected == 0) throw new Exception("Could not modify for some reason");
            if (rowsAffected > 1) throw new Exception("Something went very wrong and you edited more than one row");
            return original;

        }
        internal string Delete(int id, string userId)
        {
            ShoppingListItem item = _repo.GetOne(id);
            if (item == null) throw new Exception($"No items with id: {id}");
            if (item.CreatorId != userId) throw new Exception("This is not your items to delete!");
            _repo.Delete(id);
            return "Your item has been deleted";
        }

    }
}