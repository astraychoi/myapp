using Microsoft.AspNetCore.Mvc;

namespace myapp.Controllers
{
    public class HomeController: Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    } 
}