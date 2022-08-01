using Microsoft.AspNetCore.Mvc;
using Data.Models;
using Data.Services;


namespace CheTranqui.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly ILogger<ProjectController> _logger;

        public ProjectController(ILogger<ProjectController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProjectModel>> GetProjects()
        {
            var projectData = new InMemoryProjectData();
            return Ok(projectData.GetAllProjects());
        }
    }
}