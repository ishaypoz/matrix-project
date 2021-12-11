using Matrix.Api.Models;
using Newtonsoft.Json;
using System;
using System.Diagnostics;
using System.IO;

namespace Matrix.Api.Controllers.DL
{
    public class GetEmployeesDL
    {
        public static MonthEmployeesModel[] getEmployees(string companyName)
        {
            try
            {
                MonthEmployeesModel[] monthsEmployeesData;
                using (StreamReader reader = new StreamReader("Data.json"))
                {
                    var jsonData = reader.ReadToEnd();
                    Tables DT_Results = JsonConvert.DeserializeObject<Tables>(jsonData);

                    switch (companyName)
                    {
                        case "Google":
                            monthsEmployeesData = DT_Results.GoogleTable;
                            break;
                        case "Amazon":
                            monthsEmployeesData = DT_Results.AmazonTable;
                            break;
                        case "Microsoft":
                            monthsEmployeesData = DT_Results.MicrosoftTable;
                            break;
                        default:
                            monthsEmployeesData = null;
                            break;
                    }
                }

                return monthsEmployeesData;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return null;
            }
        }
    }
}
