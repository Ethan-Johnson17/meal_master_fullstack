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

        [HttpPost]
        [Authorize]
        async public Task<ActionResult<ShoppingList>> CreateShoppingList([FromBody] ShoppingList SLData)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                SLData.CreatorId = userInfo.Id;
                ShoppingList newShoppingList = _shoppingListsService.CreateShoppingList(SLData);
                newShoppingList.Creator = userInfo;
                return Ok(newShoppingList);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}