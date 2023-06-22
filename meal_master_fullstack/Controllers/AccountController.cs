namespace meal_master_fullstack.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
    private readonly AccountService _accountService;
    private readonly Auth0Provider _auth0Provider;
    private readonly ShoppingListItemsService _shoppingListItemsService;

    public AccountController(AccountService accountService, Auth0Provider auth0Provider, ShoppingListItemsService shoppingListItemsService)
    {
        _accountService = accountService;
        _auth0Provider = auth0Provider;
        _shoppingListItemsService = shoppingListItemsService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<Account>> Get()
    {
        try
        {
            Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
            return Ok(_accountService.GetOrCreateProfile(userInfo));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("shoppinglist")]
    [Authorize]
    public async Task<ActionResult<List<ShoppingListItem>>> GetMyShoppingList()
    {
        try
        {
            Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
            List<ShoppingListItem> shoppingList = _shoppingListItemsService.GetMyShoppingList(userInfo.Id);
            return Ok(shoppingList);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
