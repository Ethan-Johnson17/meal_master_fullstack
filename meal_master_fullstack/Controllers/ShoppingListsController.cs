namespace meal_master_fullstack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShoppingListsController : ControllerBase
    {
        private readonly ShoppingListsService _shoppingListsService;
        private readonly Auth0Provider _auth;

        public ShoppingListsController(ShoppingListsService shoppingListsService, Auth0Provider auth)
        {
            _shoppingListsService = shoppingListsService;
            _auth = auth;
        }

    }
}