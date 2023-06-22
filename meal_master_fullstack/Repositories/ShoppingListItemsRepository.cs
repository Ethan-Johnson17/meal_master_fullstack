namespace meal_master_fullstack.Repositories
{
    public class ShoppingListItemsRepository
    {
        private readonly IDbConnection _db;

        public ShoppingListItemsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal ShoppingListItem Create(ShoppingListItem itemData)
        {
            string sql = @"
            INSERT INTO
            shoppingListItems
            (name, quantity, notes, category, creatorId)
            VALUES
            (@name, @quantity, @notes, @category, @creatorId);
            SELECT LAST_INSERT_ID();
            "; int id = _db.ExecuteScalar<int>(sql, itemData);
            itemData.Id = id;
            return itemData;
        }


        internal List<ShoppingListItem> GetMyShoppingList(string id)
        {
            string sql = @"
            SELECT 
            sl.*, a.*
            FROM shoppingListItem sl
            JOIN accounts a ON sl.creatorId = a.id
            WHERE creatorId = @id;
            "; List<ShoppingListItem> shoppingListItem = _db.Query<ShoppingListItem, Account, ShoppingListItem>(sql, (sl, a) =>
            {
                sl.Creator = a;
                return sl;
            }, new { id }).ToList();
            return shoppingListItem;
        }

        internal ShoppingListItem GetOne(int id)
        {
            string sql = @"
            SELECT * FROM shoppingListItems
            WHERE id = @id
            "; ShoppingListItem sl = _db.Query<ShoppingListItem>(sql, new { id }).FirstOrDefault();
            return sl;
        }
        internal void Delete(int id)
        {
            string sql = @"
            DELETE FROM
            shoppingListItms
            WHERE id = @id
            "; _db.Execute(sql, new { id });
        }

        internal int Edit(ShoppingListItem original)
        {
            string sql = @"
            UPDATE shoppingListItems
            SET
            ischecked = @ischecked
            WHERE id = @id
            "; int rows = _db.Execute(sql, original);
            return rows;
        }
    }
}