public class ShoppingList
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Quantity { get; set; }
    public string Notes { get; set; }
    public bool IsChecked { get; set; }
    public string Category { get; set; }
    public string CreatorId { get; set; }
    public Account Creator { get; set; }


}