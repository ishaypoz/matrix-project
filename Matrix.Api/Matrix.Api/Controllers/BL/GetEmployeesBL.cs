using Matrix.Api.Controllers.DL;
using Matrix.Api.Models;
using Newtonsoft.Json;
using System;
using System.Diagnostics;
using System.Text.Json;

namespace Matrix.Api.Controllers.BL
{
    public class GetEmployeesBL
    {
        public static ResponseModel getEmployees(RequestModel clientRequest, ResponseModel serverResponse)
        {
            try
            {
                string companyName = clientRequest.companyName;
                MonthEmployeesModel[] results = GetEmployeesDL.getEmployees(companyName);

                if (results != null)
                {
                    serverResponse.success = true;
                    serverResponse.responseJson = JsonConvert.SerializeObject(results);
                }
                else
                {
                    serverResponse.success = false;
                }

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
