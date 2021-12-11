using Microsoft.AspNetCore.Mvc;

namespace Matrix.Api.Models
{
    public class ResponseModel
    {
        public bool success { get; set; }
        public string responseJson { get; set; }
    }
    public class RequestModel
    {
        public string companyName { get; set; }
    }
    public class MonthEmployeesModel
    {
        public string month { get; set; }
        public int employees { get; set; }
    }

    public class Tables
    {
        public MonthEmployeesModel[] GoogleTable { get; set; }
        public MonthEmployeesModel[] AmazonTable { get; set; }
        public MonthEmployeesModel[] MicrosoftTable { get; set; }

    }

}
