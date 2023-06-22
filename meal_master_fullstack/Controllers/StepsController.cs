namespace meal_master_fullstack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StepsController : ControllerBase
    {
        private readonly StepsService _stepsService;
        private readonly Auth0Provider _auth;
        public StepsController(StepsService stepsService, Auth0Provider auth)
        {
            _stepsService = stepsService;
            _auth = auth;
        }

        [HttpGet("{id}")]
        public ActionResult<Step> Get (int id)
        {
            try 
            {
                Step step = _stepsService.Get(id);
                return Ok(step);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<Step>> Remove (int id)
        {
            try 
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                _stepsService.RemoveStep(id, userInfo.Id);
                return Ok("Deleted");
            }
            catch (Exception e)
            {
              return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<Step>> UpdateStep([FromBody] Step updateData, int id)
        {
            try 
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                updateData.CreatorId = userInfo.Id;
                updateData.Id = id;
                Step step = _stepsService.UpdateStep(updateData, userInfo);
                return Ok(step);
            }
            catch (Exception e)
            {
              return BadRequest(e.Message);
            }
        }
    }
}