namespace meal_master_fullstack.Services
{
    public class StepsService
    {
        private readonly StepsRepository _repo;
        public StepsService(StepsRepository repo)
        {
            _repo = repo;
        }
        internal List<Step> Get ()
        {
            return _repo.GetAll();
        }

        internal Step Create (Step newStep)
        {
            return _repo.Create(newStep);
        }

        internal Step Get(int id)
        {
            Step found = _repo.Get(id);
            if (found == null)
            {
                throw new Exception("Invalid Id");
            }
            return found;
        }

        internal string RemoveStep(int id, string userId)
        {
            Step step = Get(id);;
            if (step.CreatorId != userId)
            {
                throw new Exception("You are not allowed to remove this Ingredient!!");
            }
            bool result = _repo.RemoveStep(id);
            return $"You have successfully removed the step!";
        }

        internal Step UpdateStep(Step updateData, Account userInfo)
        {
            throw new NotImplementedException();
        }
    }
}