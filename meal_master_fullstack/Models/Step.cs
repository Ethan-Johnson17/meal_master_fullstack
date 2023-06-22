namespace meal_master_fullstack.Models
{
    public class Step
    {
        public int Id { get; set; }
        public int StepOrder { get; set; }
        public string BodyText { get; set; }
        public int RecipeId { get; set; }
        public string CreatorId { get; set; }
    }
}