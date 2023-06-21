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
    }
}