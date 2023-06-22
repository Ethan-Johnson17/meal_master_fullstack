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
        async public Task<ActionResult<ShoppingListItem>> Create([FromBody] ShoppingListItem itemData)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                itemData.CreatorId = userInfo.Id;
                ShoppingListItem newItem = _shoppingListItemsService.Create(itemData);
                newItem.Creator = userInfo;
                return Ok(newItem);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPut("{id}")]
        [Authorize]
        async public Task<ActionResult<ShoppingListItem>> Edit(int id, [FromBody] ShoppingListItem itemData)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                ShoppingListItem shoppingListItem = _shoppingListItemsService.Edit(id, itemData, userInfo.Id);
                return Ok(shoppingListItem);

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