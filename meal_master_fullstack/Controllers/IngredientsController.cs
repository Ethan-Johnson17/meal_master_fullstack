namespace meal_master_fullstack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IngredientsController : ControllerBase
    {
        private readonly IngredientsService _ingredientsService;
        private readonly Auth0Provider _auth;

        public IngredientsController(IngredientsService ingredientsService, Auth0Provider auth)
        {
            _ingredientsService = ingredientsService;
            _auth = auth;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Ingredient>> CreateIngredient([FromBody] Ingredient ingredientData)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                Ingredient ingredient = _ingredientsService.CreateIngredient(ingredientData);
                return ingredient;
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<string>> DeleteIngredient(int id)
        {
            try 
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                String message = _ingredientsService.DeleteIngredient(id, userInfo);
                return Ok(message);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}