namespace meal_master_fullstack.Repositories
{
    public class StepsRepository
    {
        private readonly IDbConnection _db;
        public StepsRepository(IDbConnection db)
        {
            _db = db;
        }
        internal List<Step> GetAll()
        {
            string sql = "SELECT * FROM steps;";
            return _db.Query<Step>(sql).ToList();
        }

        internal Step Create(Step newStep)
        {
            string sql =@"
            INSERT INTO steps
            (stepOrder, bodyText, recipeId, creatorId)
            VALUES
            (@stepOrder, @bodyText, @recipeId, @creatorId);
            SELECT LAST_INSERT_ID()
            ;";
            int id = _db.ExecuteScalar<int>(sql, newStep);
            newStep.Id = id;
            return newStep;
        }

        internal Step Get(int id)
        {
            string sql = "SELECT * FROM steps WHERE id = @id;";
            return _db.QueryFirstOrDefault<Step>(sql, new { id });
        }

        internal bool RemoveStep(int id)
        {
            string sql = "DELETE FROM steps WHERE id = @id;";
            int rows = _db.Execute(sql, new { id });
            return rows == 1; 
        }

        internal Step Update(Step updatedStep)
        {
            string sql = @"
            UPDATE steps
            SET
            BodyText = @BodyText
            StepOrder = @StepOrder
            WHERE id = @Id
            ;";
            int rows = _db.Execute(sql, updatedStep);
            if (rows <= 0)
            {
                throw new Exception("Step was not updated");
            }
            return updatedStep;
        }
    }
}