namespace meal_master_fullstack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShoppingListItemsController : ControllerBase
    {
        private readonly ShoppingListItemsService _shoppingListItemsService;
        private readonly Auth0Provider _auth;

        public ShoppingListItemsController(ShoppingListItemsService shoppingListItemsService, Auth0Provider auth)
        {
            _shoppingListItemsService = shoppingListItemsService;
            _auth = auth;
        }

        [HttpPost]
        [Authorize]
        async public Task<ActionResult<ShoppingListItem>> CreateShoppingListItem([FromBody] ShoppingListItem SLData)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                SLData.CreatorId = userInfo.Id;
                ShoppingListItem newShoppingList = _shoppingListItemsService.CreateShoppingListItem(SLData);
                newShoppingList.Creator = userInfo;
                return Ok(newShoppingList);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPut("{id}")]
        [Authorize]
        async public Task<ActionResult<ShoppingListItem>> Edit(int id, [FromBody] ShoppingListItem SLData)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                ShoppingListItem shoppingList = _shoppingListItemsService.Edit(id, SLData, userInfo.Id);
                return Ok(shoppingList);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        async public Task<ActionResult<string>> Delete(int id)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                string message = _shoppingListItemsService.Delete(id, userInfo.Id);
                return Ok(message);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}