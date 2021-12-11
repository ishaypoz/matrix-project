using Matrix.Api.Controllers.BL;
using Matrix.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Matrix.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GetEmployeesController : ControllerBase
    {

        [HttpPost]
        public ResponseModel getEmployees(RequestModel clientRequest)
        {
            try
            {
                ResponseModel serverResponse = new ResponseModel();

                serverResponse = GetEmployeesBL.getEmployees(clientRequest, serverResponse);

                return serverResponse;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return null;
            }

        }
    }
}
