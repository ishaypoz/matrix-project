export interface ResponseModel{
    responseJson: string;
    success: boolean;
}

export interface CompanyData{
    companyName: string;
    table: MonthEmployeesModel[];
}

export interface MonthEmployeesModel{
    month: string;
    employees: number;
}

export var URL_ROUTES = {
    GET_EMPLOYEES: "/GetEmployees"
}