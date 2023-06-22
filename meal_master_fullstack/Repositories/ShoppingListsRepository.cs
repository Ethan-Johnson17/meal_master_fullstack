namespace meal_master_fullstack.Repositories
{
    public class ShoppingListsRepository
    {
        private readonly IDbConnection _db;

        public ShoppingListsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal ShoppingList CreateShoppingList(ShoppingList SLData)
        {
            string sql = @"
            INSERT INTO
            shoppingLists
            (name, quantity, notes, category, creatorId)
            VALUES
            (@name, @quantity, @notes, @category, @creatorId);
            SELECT LAST_INSERT_ID();
            "; int id = _db.ExecuteScalar<int>(sql, SLData);
            SLData.Id = id;
            return SLData;
        }


        internal List<ShoppingList> GetMyShoppingList(string id)
        {
            string sql = @"
            SELECT 
            sl.*, a.*
            FROM shoppingLists sl
            JOIN accounts a ON sl.creatorId = a.id
            WHERE creatorId = @id;
            "; List<ShoppingList> shoppingList = _db.Query<ShoppingList, Account, ShoppingList>(sql, (sl, a) =>
            {
                sl.Creator = a;
                return sl;
            }, new { id }).ToList();
            return shoppingList;
        }

        internal ShoppingList GetOne(int id)
        {
            string sql = @"
            SELECT * FROM shoppingLists
            WHERE id = @id
            "; ShoppingList sl = _db.Query<ShoppingList>(sql, new { id }).FirstOrDefault();
            return sl;
        }
        internal void Delete(int id)
        {
            string sql = @"
            DELETE FROM
            shoppingLists
            WHERE id = @id
            "; _db.Execute(sql, new { id });
        }

        internal int Edit(ShoppingList original)
        {
            string sql = @"
            UPDATE shoppingLists
            SET
            ischecked = @ischecked
            WHERE id = @id
            "; int rows = _db.Execute(sql, original);
            return rows;
        }
    }
}