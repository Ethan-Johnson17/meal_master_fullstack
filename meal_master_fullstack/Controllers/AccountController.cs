namespace meal_master_fullstack.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
    private readonly AccountService _accountService;
    private readonly Auth0Provider _auth0Provider;
    private readonly ShoppingListsService _shoppingListsService;

    public AccountController(AccountService accountService, Auth0Provider auth0Provider, ShoppingListsService shoppingListsService)
    {
        _accountService = accountService;
        _auth0Provider = auth0Provider;
        _shoppingListsService = shoppingListsService;
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
    public async Task<ActionResult<List<ShoppingList>>> GetMyShoppingList()
    {
        try
        {
            Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
            List<ShoppingList> shoppingList = _shoppingListsService.GetMyShoppingList(userInfo.Id);
            return Ok(shoppingList);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
